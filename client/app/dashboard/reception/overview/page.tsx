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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  IconCalendarEvent,
  IconCheckupList,
  IconClockHour4,
  IconPlus,
  IconUsers,
} from "@tabler/icons-react"
import { api } from "@/lib/http"
import { useEffect, useMemo, useState } from "react"

type ReceptionOverviewResponse = {
  metrics: {
    appointmentsToday: number
    waitingRoom: number
    walkinsToday: number
  }
}

type ReceptionAppointmentsResponse = {
  appointments: Array<{
    id: string
    patientName: string
    doctorName: string
    startTime: string
    status: string
  }>
}

export default function Overview() {
  const [overview, setOverview] = useState<ReceptionOverviewResponse | null>(null)
  const [appointments, setAppointments] = useState<ReceptionAppointmentsResponse["appointments"]>([])
  const [patientName, setPatientName] = useState("")
  const [reason, setReason] = useState("")

  const loadData = async () => {
    try {
      const [overviewData, appointmentData] = await Promise.all([
        api.get<ReceptionOverviewResponse>("/reception/overview"),
        api.get<ReceptionAppointmentsResponse>("/reception/appointments"),
      ])
      setOverview(overviewData)
      setAppointments(appointmentData.appointments)
    } catch {
      setOverview(null)
      setAppointments([])
    }
  }

  useEffect(() => {
    void loadData()
  }, [])

  const queueRows = useMemo(
    () =>
      appointments.slice(0, 8).map((a) => ({
        id: a.id,
        patient: a.patientName,
        doctor: a.doctorName,
        time: new Date(a.startTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        status: a.status.toLowerCase().replaceAll("_", " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      })),
    [appointments],
  )

  const handleQuickCheckin = async () => {
    if (!patientName || !reason) return
    try {
      await api.post("/reception/walk-ins", { patientName, reason, priority: 3 })
      setPatientName("")
      setReason("")
      await loadData()
    } catch {
      // keep UI unchanged; silent failure
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Reception Dashboard</h2>
          <p className="text-muted-foreground">
            Monitor arrivals, manage queue flow, and support front desk operations.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <IconPlus className="mr-2 h-4 w-4" />
              New Check-in
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Quick Check-in</DialogTitle>
              <DialogDescription>
                Register an arriving patient and assign them to today&apos;s queue.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="patient">Patient Name</Label>
                <Input id="patient" placeholder="Enter full name" value={patientName} onChange={(e) => setPatientName(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="appointment-id">Appointment ID</Label>
                <Input id="appointment-id" placeholder="Visit reason" value={reason} onChange={(e) => setReason(e.target.value)} />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleQuickCheckin}>Confirm Check-in</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Today&apos;s Appointments</CardDescription>
            <CardTitle className="text-2xl">{overview?.metrics.appointmentsToday ?? 0}</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="outline" className="bg-blue-500/10 text-blue-700 border-blue-200">
              <IconCalendarEvent className="mr-1 h-3 w-3" /> +6 from yesterday
            </Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Checked In</CardDescription>
            <CardTitle className="text-2xl">{overview?.metrics.waitingRoom ?? 0}</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="outline" className="bg-green-500/10 text-green-700 border-green-200">
              <IconCheckupList className="mr-1 h-3 w-3" /> On track
            </Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Walk-ins</CardDescription>
            <CardTitle className="text-2xl">{overview?.metrics.walkinsToday ?? 0}</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="outline" className="bg-orange-500/10 text-orange-700 border-orange-200">
              <IconUsers className="mr-1 h-3 w-3" /> Queue active
            </Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Avg Wait Time</CardDescription>
            <CardTitle className="text-2xl">16m</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="outline" className="bg-violet-500/10 text-violet-700 border-violet-200">
              <IconClockHour4 className="mr-1 h-3 w-3" /> Improved by 3m
            </Badge>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Queue</CardTitle>
          <CardDescription>
            Patients scheduled in the next hour and their front-desk status.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Queue ID</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {queueRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-mono text-xs">{row.id}</TableCell>
                  <TableCell className="font-medium">{row.patient}</TableCell>
                  <TableCell>{row.doctor}</TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell>
                    <Badge variant={row.status === "Checked In" ? "default" : "outline"}>
                      {row.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
