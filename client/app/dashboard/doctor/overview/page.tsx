"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import {
  IconCalendarEvent,
  IconDownload,
  IconFileText,
  IconSearch,
  IconStethoscope,
  IconTrendingUp,
} from "@tabler/icons-react"
import { useCallback, useEffect, useMemo, useState } from "react"
import { toast } from "sonner"

import { useAuth } from "@/lib/auth-context"
import {
  createLabReportsPdfPreviewUrl,
  downloadLabReportsPdf,
  type DoctorLabReportPdfItem,
} from "@/lib/doctor-lab-report-pdf"
import { api } from "@/lib/http"

type DoctorOverviewResponse = {
  metrics: {
    appointmentsToday: number
    consultationsClosed: number
    pendingReports: number
    unsignedCharts: number
  }
  appointments: Array<{
    id: string
    time: string
    endTime: string
    patientName: string
    reasonForVisit: string | null
    status: string
    notes: string | null
  }>
  labReports: Array<{
    id: string
    patientName: string
    title: string
    status: string
    summary: string | null
    resultNotes: string | null
    createdAt: string
    reviewedAt: string | null
    fileUrls: string[]
  }>
}

type PatientSearchResult = {
  id: string
  name: string
  email?: string | null
  phone?: string | null
}

type PriorityReport = DoctorLabReportPdfItem & {
  patient: string
  test: string
  statusLabel: string
}

const formatLabel = (value: string | null | undefined, fallback = "Not available") => {
  const normalized = value?.trim()
  if (!normalized) return fallback

  return normalized
    .toLowerCase()
    .replaceAll("_", " ")
    .replace(/\b\w/g, (character) => character.toUpperCase())
}

export default function Overview() {
  const { user } = useAuth()
  const doctorDisplayName = user
    ? `Dr. ${user.firstName} ${user.lastName}`.trim()
    : "Doctor Workspace"

  const [overview, setOverview] = useState<DoctorOverviewResponse | null>(null)
  const [patientSearch, setPatientSearch] = useState("")
  const [foundPatients, setFoundPatients] = useState<PatientSearchResult[]>([])
  const [hasSearchedPatients, setHasSearchedPatients] = useState(false)
  const [bookingName, setBookingName] = useState("")
  const [bookingTime, setBookingTime] = useState("")
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false)
  const [bookingSubmitting, setBookingSubmitting] = useState(false)
  const [isNotesDialogOpen, setIsNotesDialogOpen] = useState(false)
  const [selectedAppointmentId, setSelectedAppointmentId] = useState("")
  const [clinicalNote, setClinicalNote] = useState("")
  const [savingClinicalNote, setSavingClinicalNote] = useState(false)
  const [selectedReport, setSelectedReport] = useState<PriorityReport | null>(null)
  const [reportPreviewUrl, setReportPreviewUrl] = useState<string | null>(null)
  const [isReportPreviewOpen, setIsReportPreviewOpen] = useState(false)

  const loadOverview = useCallback(async () => {
    try {
      const data = await api.get<DoctorOverviewResponse>("/doctor/overview")
      setOverview(data)
    } catch {
      setOverview(null)
    }
  }, [])

  const runPatientSearch = useCallback(async (query: string) => {
    const term = query.trim()

    if (term.length < 2) {
      setFoundPatients([])
      return
    }

    try {
      const data = await api.get<{ patients: PatientSearchResult[] }>(
        `/doctor/patients/search?q=${encodeURIComponent(term)}`,
      )
      setFoundPatients(data.patients)
    } catch {
      setFoundPatients([])
    }
  }, [])

  useEffect(() => {
    void loadOverview()
  }, [loadOverview])

  useEffect(() => {
    const term = patientSearch.trim()

    if (term.length < 2) {
      setFoundPatients([])
      setHasSearchedPatients(false)
      return
    }

    setHasSearchedPatients(true)
    const timeout = window.setTimeout(() => {
      void runPatientSearch(term)
    }, 250)

    return () => window.clearTimeout(timeout)
  }, [patientSearch, runPatientSearch])

  useEffect(() => {
    if (!isNotesDialogOpen) return

    const defaultAppointment =
      overview?.appointments.find((appointment) => appointment.notes?.trim()) ??
      overview?.appointments[0]

    if (!defaultAppointment) return

    setSelectedAppointmentId(defaultAppointment.id)
    setClinicalNote(defaultAppointment.notes ?? "")
  }, [isNotesDialogOpen, overview])

  useEffect(
    () => () => {
      if (reportPreviewUrl) {
        URL.revokeObjectURL(reportPreviewUrl)
      }
    },
    [reportPreviewUrl],
  )

  const todaysAppointments = useMemo(
    () =>
      (overview?.appointments ?? []).map((appointment) => ({
        id: appointment.id,
        time: new Date(appointment.time).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        patient: appointment.patientName,
        type: formatLabel(appointment.reasonForVisit, "Consultation"),
        status: formatLabel(appointment.status),
        notes: appointment.notes ?? "",
      })),
    [overview],
  )

  const priorityReports = useMemo(
    () =>
      (overview?.labReports ?? []).map((report) => ({
        ...report,
        patient: report.patientName,
        test: report.title,
        statusLabel: formatLabel(report.status),
      })),
    [overview],
  )

  const handleSearchPatient = async () => {
    setHasSearchedPatients(true)
    await runPatientSearch(patientSearch)
  }

  const handleBookPatient = async () => {
    if (!bookingName.trim() || !bookingTime) {
      toast.error("Patient name and time are required.")
      return
    }

    try {
      setBookingSubmitting(true)

      const matches = await api.get<{ patients: Array<{ id: string }> }>(
        `/doctor/patients/search?q=${encodeURIComponent(bookingName.trim())}`,
      )
      const patientId = matches.patients[0]?.id

      if (!patientId) {
        toast.error("No patient found for this name.")
        return
      }

      const startTime = new Date()
      const [hours, minutes] = bookingTime.split(":").map(Number)
      startTime.setHours(hours, minutes, 0, 0)
      const endTime = new Date(startTime.getTime() + 30 * 60 * 1000)

      await api.post("/doctor/appointments", {
        patientId,
        date: startTime.toISOString(),
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
        reasonForVisit: "consultation",
      })

      await loadOverview()
      setBookingName("")
      setBookingTime("")
      setIsBookingDialogOpen(false)
      toast.success("Appointment booked successfully.")
    } catch {
      toast.error("Failed to book appointment.")
    } finally {
      setBookingSubmitting(false)
    }
  }

  const handleSelectAppointment = (appointmentId: string) => {
    setSelectedAppointmentId(appointmentId)
    const selectedAppointment = overview?.appointments.find(
      (appointment) => appointment.id === appointmentId,
    )
    setClinicalNote(selectedAppointment?.notes ?? "")
  }

  const handleSaveClinicalNotes = async () => {
    if (!selectedAppointmentId) {
      toast.error("Select an encounter before saving notes.")
      return
    }

    try {
      setSavingClinicalNote(true)
      await api.patch(`/doctor/appointments/${selectedAppointmentId}`, {
        notes: clinicalNote.trim() || null,
      })
      await loadOverview()
      setIsNotesDialogOpen(false)
      toast.success("Clinical notes saved successfully.")
    } catch {
      toast.error("Failed to save clinical notes.")
    } finally {
      setSavingClinicalNote(false)
    }
  }

  const openPriorityReportPreview = (report: PriorityReport) => {
    if (reportPreviewUrl) {
      URL.revokeObjectURL(reportPreviewUrl)
    }

    setSelectedReport(report)
    setReportPreviewUrl(
      createLabReportsPdfPreviewUrl([report], {
        doctorName: doctorDisplayName,
        title: "Priority Lab Report",
      }),
    )
    setIsReportPreviewOpen(true)
  }

  const handleReportPreviewOpenChange = (open: boolean) => {
    if (!open && reportPreviewUrl) {
      URL.revokeObjectURL(reportPreviewUrl)
      setReportPreviewUrl(null)
      setSelectedReport(null)
    }

    setIsReportPreviewOpen(open)
  }

  const handleDownloadSelectedReport = () => {
    if (!selectedReport) return

    downloadLabReportsPdf(
      [selectedReport],
      `lab-report-${selectedReport.id}.pdf`,
      {
        doctorName: doctorDisplayName,
        title: "Priority Lab Report",
      },
    )
  }

  return (
    <div className="flex flex-col gap-4 px-4 py-4 md:gap-6 md:px-6 md:py-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Doctor Workspace</h2>
          <p className="text-muted-foreground">
            Manage your patients, review reports, and update clinical notes.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <IconSearch className="mr-2 h-4 w-4" />
                Search Patient
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[520px]">
              <DialogHeader>
                <DialogTitle>Search Patient Records</DialogTitle>
                <DialogDescription>
                  Search by patient ID, full name, email, or phone number.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="search" className="text-right">
                    Query
                  </Label>
                  <Input
                    id="search"
                    placeholder="e.g. Aarav Sharma or cma1..."
                    className="col-span-3"
                    value={patientSearch}
                    onChange={(event) => setPatientSearch(event.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  {foundPatients.map((patient) => (
                    <div
                      key={patient.id}
                      className="rounded-md border bg-muted/20 px-3 py-2 text-sm"
                    >
                      <p className="font-medium">{patient.name}</p>
                      <p className="font-mono text-xs text-muted-foreground">
                        {patient.id}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {patient.email || "No email"} | {patient.phone || "No phone"}
                      </p>
                    </div>
                  ))}
                  {hasSearchedPatients &&
                  patientSearch.trim().length >= 2 &&
                  foundPatients.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      No patient matched the current search.
                    </p>
                  ) : null}
                </div>
              </div>
              <DialogFooter>
                <Button type="button" onClick={() => void handleSearchPatient()}>
                  Search
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog
            open={isBookingDialogOpen}
            onOpenChange={setIsBookingDialogOpen}
          >
            <DialogTrigger asChild>
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
                <IconCalendarEvent className="mr-2 h-4 w-4" />
                New Appointment
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Schedule Appointment</DialogTitle>
                <DialogDescription>
                  Book a new slot for a walk-in or follow-up patient.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="patient-name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="patient-name"
                    placeholder="Patient full name"
                    className="col-span-3"
                    value={bookingName}
                    onChange={(event) => setBookingName(event.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="time-slot" className="text-right">
                    Time
                  </Label>
                  <Input
                    id="time-slot"
                    type="time"
                    className="col-span-3"
                    value={bookingTime}
                    onChange={(event) => setBookingTime(event.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  className="bg-indigo-600 hover:bg-indigo-700"
                  onClick={() => void handleBookPatient()}
                  disabled={bookingSubmitting}
                >
                  {bookingSubmitting ? "Booking..." : "Confirm Booking"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <Card className="border-indigo-100 bg-gradient-to-r from-indigo-500/10 to-transparent shadow-none dark:border-indigo-900/50">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl text-indigo-900 dark:text-indigo-200">
                Good morning, {doctorDisplayName}
              </CardTitle>
              <CardDescription className="text-indigo-700/70 dark:text-indigo-300">
                You have a busy shift ahead.{" "}
                {overview?.metrics.appointmentsToday ?? 0} patients scheduled, and{" "}
                {overview?.metrics.pendingReports ?? 0} lab reports need your attention.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Today&apos;s Schedule</CardTitle>
              <CardDescription>
                Upcoming patient slots for this shift.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Patient</TableHead>
                    <TableHead>Visit Type</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {todaysAppointments.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="py-6 text-center text-muted-foreground"
                      >
                        No appointments scheduled for today.
                      </TableCell>
                    </TableRow>
                  ) : (
                    todaysAppointments.map((appointment) => (
                      <TableRow key={appointment.id}>
                        <TableCell className="whitespace-nowrap font-medium">
                          {appointment.time}
                        </TableCell>
                        <TableCell>{appointment.patient}</TableCell>
                        <TableCell>{appointment.type}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              appointment.status === "Scheduled"
                                ? "outline"
                                : "secondary"
                            }
                            className={
                              appointment.status === "In Progress"
                                ? "border-blue-200 bg-blue-500/15 text-blue-700"
                                : appointment.status === "Checked In"
                                  ? "border-emerald-200 bg-emerald-500/15 text-emerald-700"
                                  : ""
                            }
                          >
                            {appointment.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4 *:data-[slot=card]:shadow-xs">
            <Card>
              <CardHeader className="p-4 pb-2">
                <CardDescription className="text-xs">
                  Appointments
                </CardDescription>
                <CardTitle className="text-2xl tabular-nums">
                  {overview?.metrics.appointmentsToday ?? 0}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <Badge
                  variant="outline"
                  className="mt-1 border-indigo-200 bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400"
                >
                  <IconTrendingUp className="mr-1 h-3 w-3" /> Live
                </Badge>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="p-4 pb-2">
                <CardDescription className="text-xs">
                  Consultations
                </CardDescription>
                <CardTitle className="text-2xl tabular-nums">
                  {overview?.metrics.consultationsClosed ?? 0}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <Badge
                  variant="outline"
                  className="mt-1 border-emerald-200 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400"
                >
                  On Track
                </Badge>
              </CardContent>
            </Card>
          </div>

          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="text-lg">Priority Reports</CardTitle>
              <CardDescription>Awaiting your verification.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {priorityReports.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No priority reports are waiting for review.
                </p>
              ) : (
                priorityReports.map((report) => (
                  <div
                    key={report.id}
                    className="group rounded-lg border p-3 transition-colors hover:border-indigo-200 dark:hover:border-indigo-800"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-sm font-medium">{report.patient}</p>
                      <Badge
                        variant={
                          report.statusLabel === "Critical"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {report.statusLabel}
                      </Badge>
                    </div>
                    <p className="mb-3 text-sm text-muted-foreground">
                      {report.test}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-muted-foreground">
                        {report.id}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 text-xs"
                        onClick={() => openPriorityReportPreview(report)}
                      >
                        <IconFileText className="mr-1.5 h-3 w-3" />
                        View PDF
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          <Card className="border-indigo-200 bg-indigo-50 dark:border-indigo-900/50 dark:bg-indigo-950/20">
            <CardHeader className="pb-3">
              <div className="mb-1 flex items-center gap-2 text-indigo-700 dark:text-indigo-400">
                <IconStethoscope className="h-5 w-5" />
                <CardTitle className="text-base">Clinical Notes</CardTitle>
              </div>
              <CardDescription>
                {overview?.metrics.unsignedCharts ?? 0} encounters missing final
                notes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog
                open={isNotesDialogOpen}
                onOpenChange={setIsNotesDialogOpen}
              >
                <DialogTrigger asChild>
                  <Button className="w-full border border-indigo-200 bg-white text-indigo-700 hover:bg-white/90 dark:border-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
                    Complete Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[560px]">
                  <DialogHeader>
                    <DialogTitle>Update Clinical Notes</DialogTitle>
                    <DialogDescription>
                      Save notes against a selected encounter from today&apos;s
                      schedule.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="appointment-note-target">Encounter</Label>
                      <Select
                        value={selectedAppointmentId}
                        onValueChange={handleSelectAppointment}
                      >
                        <SelectTrigger id="appointment-note-target">
                          <SelectValue placeholder="Select an encounter" />
                        </SelectTrigger>
                        <SelectContent>
                          {(overview?.appointments ?? []).map((appointment) => (
                            <SelectItem
                              key={appointment.id}
                              value={appointment.id}
                            >
                              {appointment.patientName} |{" "}
                              {new Date(appointment.time).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="clinical-note-text">Diagnosis Notes</Label>
                      <Textarea
                        id="clinical-note-text"
                        placeholder="Type patient evaluation here..."
                        className="min-h-[120px]"
                        value={clinicalNote}
                        onChange={(event) => setClinicalNote(event.target.value)}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      type="button"
                      onClick={() => void handleSaveClinicalNotes()}
                      disabled={
                        savingClinicalNote ||
                        !selectedAppointmentId ||
                        (overview?.appointments ?? []).length === 0
                      }
                    >
                      {savingClinicalNote ? "Saving..." : "Save to Records"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog
        open={isReportPreviewOpen}
        onOpenChange={handleReportPreviewOpenChange}
      >
        <DialogContent className="flex max-w-5xl flex-col gap-4 overflow-hidden">
          <DialogHeader>
            <DialogTitle>
              {selectedReport?.test ?? "Priority Lab Report"}
            </DialogTitle>
            <DialogDescription>
              {selectedReport
                ? `Patient: ${selectedReport.patient} | Report ID: ${selectedReport.id}`
                : "Preview the formatted report PDF."}
            </DialogDescription>
          </DialogHeader>
          {reportPreviewUrl ? (
            <iframe
              title={selectedReport?.id ?? "priority-lab-report-preview"}
              src={reportPreviewUrl}
              className="h-[70vh] w-full rounded-md border"
            />
          ) : (
            <div className="flex h-[70vh] items-center justify-center rounded-md border text-sm text-muted-foreground">
              Preparing PDF preview...
            </div>
          )}
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={handleDownloadSelectedReport}
              disabled={!selectedReport}
            >
              <IconDownload className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
