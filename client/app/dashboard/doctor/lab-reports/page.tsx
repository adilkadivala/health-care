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
import { IconDownload, IconSearch } from "@tabler/icons-react"
import { useEffect, useMemo, useState } from "react"
import { toast } from "sonner"

import { useAuth } from "@/lib/auth-context"
import {
  downloadLabReportsPdf,
  type DoctorLabReportPdfItem,
} from "@/lib/doctor-lab-report-pdf"
import { api } from "@/lib/http"

type DoctorReportsResponse = {
  labReports: Array<{
    id: string
    patientName: string
    orderedOn: string
    title: string
    summary: string | null
    resultNotes: string | null
    reviewedAt: string | null
    fileUrls: string[]
    status: string
  }>
}

type ReportExportRange = "today" | "7-days" | "30-days" | "all"
type ReportExportFormat = "csv" | "json" | "pdf"

const formatLabel = (value: string | null | undefined, fallback = "Not available") => {
  const normalized = value?.trim()
  if (!normalized) return fallback

  return normalized
    .toLowerCase()
    .replaceAll("_", " ")
    .replace(/\b\w/g, (character) => character.toUpperCase())
}

const getDateRangeStart = (range: ReportExportRange) => {
  if (range === "all") return null

  const now = new Date()
  const start = new Date(now)

  if (range === "today") {
    start.setHours(0, 0, 0, 0)
    return start
  }

  start.setDate(start.getDate() - (range === "7-days" ? 7 : 30))
  return start
}

const safeValue = (
  value: string | null | undefined,
  fallback = "Not available",
) => {
  const normalized = value?.trim()
  return normalized ? normalized : fallback
}

const triggerBrowserDownload = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement("a")
  anchor.href = url
  anchor.download = filename
  anchor.click()
  setTimeout(() => URL.revokeObjectURL(url), 0)
}

const escapeCsvValue = (value: string) => `"${value.replaceAll('"', '""')}"`

export default function LabReports() {
  const { user } = useAuth()
  const doctorDisplayName = user
    ? `Dr. ${user.firstName} ${user.lastName}`.trim()
    : "Doctor"

  const [reports, setReports] =
    useState<DoctorReportsResponse["labReports"]>([])
  const [search, setSearch] = useState("")
  const [isExportDialogOpen, setIsExportDialogOpen] = useState(false)
  const [exportRange, setExportRange] = useState<ReportExportRange>("7-days")
  const [exportFormat, setExportFormat] =
    useState<ReportExportFormat>("pdf")
  const [downloading, setDownloading] = useState(false)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.get<DoctorReportsResponse>("/doctor/lab-reports")
        setReports(data.labReports)
      } catch {
        setReports([])
      }
    }
    void load()
  }, [])

  const mapped = useMemo(
    () =>
      reports.map((report) => ({
        ...report,
        patient: report.patientName,
        test: report.title,
        result: report.summary ?? "No summary available",
        orderedOnLabel: new Date(report.orderedOn).toLocaleString(),
        priority:
          report.status === "CRITICAL"
            ? "Critical"
            : report.status === "PENDING_REVIEW"
              ? "High"
              : "Routine",
        statusLabel: formatLabel(report.status),
      })),
    [reports],
  )

  const filtered = useMemo(
    () =>
      mapped.filter((report) =>
        `${report.id} ${report.patient} ${report.test}`
          .toLowerCase()
          .includes(search.toLowerCase()),
      ),
    [mapped, search],
  )

  const filteredForExport = useMemo(() => {
    const start = getDateRangeStart(exportRange)
    if (!start) return filtered

    return filtered.filter((report) => new Date(report.orderedOn) >= start)
  }, [exportRange, filtered])

  const mapReportToPdf = (report: (typeof mapped)[number]): DoctorLabReportPdfItem => ({
    id: report.id,
    patientName: report.patient,
    title: report.test,
    status: report.status,
    summary: report.summary,
    resultNotes: report.resultNotes,
    orderedOn: report.orderedOn,
    reviewedAt: report.reviewedAt,
    fileUrls: report.fileUrls,
  })

  const buildCsvContent = (items: typeof filteredForExport) =>
    [
      [
        "reportId",
        "patientName",
        "orderedOn",
        "testTitle",
        "status",
        "summary",
        "resultNotes",
      ]
        .map(escapeCsvValue)
        .join(","),
      ...items.map((report) =>
        [
          report.id,
          report.patient,
          new Date(report.orderedOn).toISOString(),
          report.test,
          report.statusLabel,
          safeValue(report.summary, "No summary available"),
          safeValue(report.resultNotes, "No result notes"),
        ]
          .map((value) => escapeCsvValue(String(value)))
          .join(","),
      ),
    ].join("\n")

  const handleDownloadSingleReport = (report: (typeof mapped)[number]) => {
    downloadLabReportsPdf(
      [mapReportToPdf(report)],
      `lab-report-${report.id}.pdf`,
      {
        doctorName: doctorDisplayName,
        title: "Medical Lab Report",
      },
    )
    toast.success("Lab report downloaded.")
  }

  const handleExport = async () => {
    if (filteredForExport.length === 0) {
      toast.error("No lab reports match the current filters.")
      return
    }

    const filename = `doctor-lab-reports-${new Date()
      .toISOString()
      .slice(0, 10)}.${exportFormat}`

    try {
      setDownloading(true)

      if (exportFormat === "pdf") {
        downloadLabReportsPdf(
          filteredForExport.map(mapReportToPdf),
          filename,
          {
            doctorName: doctorDisplayName,
            title: "Doctor Lab Reports Export",
          },
        )
      } else if (exportFormat === "csv") {
        triggerBrowserDownload(
          new Blob([buildCsvContent(filteredForExport)], {
            type: "text/csv;charset=utf-8",
          }),
          filename,
        )
      } else {
        triggerBrowserDownload(
          new Blob([JSON.stringify(filteredForExport, null, 2)], {
            type: "application/json;charset=utf-8",
          }),
          filename,
        )
      }

      setIsExportDialogOpen(false)
      toast.success(`Reports downloaded as ${exportFormat.toUpperCase()}.`)
    } catch {
      toast.error("Failed to download lab reports.")
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Lab Reports</h2>
          <p className="text-muted-foreground">
            Review report findings, set priority, and track escalation status.
          </p>
        </div>
        <Dialog
          open={isExportDialogOpen}
          onOpenChange={setIsExportDialogOpen}
        >
          <DialogTrigger asChild>
            <Button variant="outline">
              <IconDownload className="mr-2 h-4 w-4" />
              Export Reports
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Export Report Data</DialogTitle>
              <DialogDescription>
                Download filtered lab reports for handoff or documentation.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="report-range">Date Range</Label>
                <Select
                  value={exportRange}
                  onValueChange={(value: ReportExportRange) =>
                    setExportRange(value)
                  }
                >
                  <SelectTrigger id="report-range">
                    <SelectValue placeholder="Select date range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="7-days">Last 7 Days</SelectItem>
                    <SelectItem value="30-days">Last 30 Days</SelectItem>
                    <SelectItem value="all">All Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="report-format">Format</Label>
                <Select
                  value={exportFormat}
                  onValueChange={(value: ReportExportFormat) =>
                    setExportFormat(value)
                  }
                >
                  <SelectTrigger id="report-format">
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="json">JSON</SelectItem>
                    <SelectItem value="pdf">PDF</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                onClick={() => void handleExport()}
                disabled={downloading}
              >
                {downloading ? "Preparing..." : "Download"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle>Report Queue</CardTitle>
            <CardDescription>
              Reports awaiting review and escalation follow up.
            </CardDescription>
          </div>
          <div className="relative">
            <IconSearch className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search report ID or patient..."
              className="w-[280px] pl-8"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report ID</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Ordered On</TableHead>
                <TableHead>Test</TableHead>
                <TableHead>Result Summary</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={8}
                    className="py-6 text-center text-muted-foreground"
                  >
                    No lab reports matched the current search.
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell className="font-mono text-xs">
                      {report.id}
                    </TableCell>
                    <TableCell className="font-medium">
                      {report.patient}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {report.orderedOnLabel}
                    </TableCell>
                    <TableCell>{report.test}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {report.result}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          report.priority === "Critical"
                            ? "destructive"
                            : "outline"
                        }
                        className={
                          report.priority === "High"
                            ? "border-orange-200 bg-orange-500/15 text-orange-700 hover:bg-orange-500/20 dark:border-orange-900 dark:text-orange-400"
                            : report.priority === "Routine"
                              ? "border-slate-200 bg-slate-500/15 text-slate-700 hover:bg-slate-500/20 dark:border-slate-800 dark:text-slate-300"
                              : ""
                        }
                      >
                        {report.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          report.statusLabel === "Escalated"
                            ? "destructive"
                            : "secondary"
                        }
                        className={
                          report.statusLabel === "Reviewed"
                            ? "border-green-200 bg-green-500/15 text-green-700 hover:bg-green-500/20 dark:border-green-900 dark:text-green-400"
                            : report.statusLabel === "Pending Review"
                              ? "border-blue-200 bg-blue-500/15 text-blue-700 hover:bg-blue-500/20 dark:border-blue-900 dark:text-blue-400"
                              : ""
                        }
                      >
                        {report.statusLabel}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownloadSingleReport(report)}
                      >
                        <IconDownload className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
