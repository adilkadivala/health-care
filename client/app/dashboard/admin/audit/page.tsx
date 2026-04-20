"use client"

import React, { useEffect, useMemo, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IconDownload, IconSearch } from "@tabler/icons-react"
import { jsPDF } from "jspdf"
import { toast } from "sonner"

import { api } from "@/lib/http"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type AuditLog = {
  id: string
  category: string
  message: string
  at: string
  ipAddress: string
}

type AuditDateRange = "today" | "last7days" | "last30days" | "all"
type AuditExportFormat = "csv" | "json" | "pdf"
type AuditPdfColumn = {
  header: string
  weight: number
  value: (log: AuditLog) => string
}
type AuditPdfDownloadOptions = {
  logs: AuditLog[]
  filename: string
  dateRange: AuditDateRange
  searchQuery: string
}

const AUDIT_DATE_RANGE_LABELS: Record<AuditDateRange, string> = {
  today: "Today",
  last7days: "Last 7 Days",
  last30days: "Last 30 Days",
  all: "All Time",
}

const getAuditValue = (
  value: string | null | undefined,
  fallback = "Not available",
) => {
  const normalized = value?.trim()
  return normalized ? normalized : fallback
}

const formatAuditTimestamp = (value: string) => {
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return "Invalid date"
  }

  return date.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  })
}

const formatAuditCategory = (value: string) =>
  getAuditValue(value, "Unknown")
    .toLowerCase()
    .replaceAll("_", " ")
    .replace(/\b\w/g, (character) => character.toUpperCase())

const truncateText = (value: string, maxLength: number) =>
  value.length > maxLength
    ? `${value.slice(0, maxLength - 3).trimEnd()}...`
    : value

const AUDIT_PDF_COLUMNS: AuditPdfColumn[] = [
  {
    header: "Log ID",
    weight: 0.19,
    value: (log) => getAuditValue(log.id, "Unavailable"),
  },
  {
    header: "Timestamp",
    weight: 0.2,
    value: (log) => formatAuditTimestamp(log.at),
  },
  {
    header: "Category",
    weight: 0.13,
    value: (log) => formatAuditCategory(log.category),
  },
  {
    header: "Event Details",
    weight: 0.33,
    value: (log) => getAuditValue(log.message, "No event details"),
  },
  {
    header: "IP Address",
    weight: 0.15,
    value: (log) => getAuditValue(log.ipAddress, "Not captured"),
  },
]

const escapeCsvValue = (value: string) => `"${value.replaceAll('"', '""')}"`

const buildCsvContent = (logs: AuditLog[]) =>
  [
    ["id", "timestamp", "category", "message", "ipAddress"].map(escapeCsvValue).join(","),
    ...logs.map((log) =>
      [
        getAuditValue(log.id, "Unavailable"),
        new Date(log.at).toISOString(),
        formatAuditCategory(log.category),
        getAuditValue(log.message, "No event details"),
        getAuditValue(log.ipAddress, "Not captured"),
      ]
        .map((value) => escapeCsvValue(String(value)))
        .join(","),
    ),
  ].join("\n")

const getDateRangeStart = (range: AuditDateRange) => {
  const now = new Date()

  if (range === "all") {
    return null
  }

  const start = new Date(now)

  if (range === "today") {
    start.setHours(0, 0, 0, 0)
    return start
  }

  start.setDate(start.getDate() - (range === "last7days" ? 7 : 30))
  return start
}

const filterLogsByDateRange = (logs: AuditLog[], range: AuditDateRange) => {
  const start = getDateRangeStart(range)

  if (!start) {
    return logs
  }

  return logs.filter((log) => new Date(log.at) >= start)
}

const triggerBrowserDownload = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement("a")
  anchor.href = url
  anchor.download = filename
  anchor.click()
  setTimeout(() => URL.revokeObjectURL(url), 0)
}

const downloadPdf = ({
  logs,
  filename,
  dateRange,
  searchQuery,
}: AuditPdfDownloadOptions) => {
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" })
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const marginX = 12
  const topMargin = 12
  const bottomMargin = 12
  const contentWidth = pageWidth - marginX * 2
  const lineHeight = 4
  const cellPaddingX = 2.5
  const cellPaddingY = 2.5
  const headerRowHeight = 8
  const generatedAt = formatAuditTimestamp(new Date().toISOString())
  const searchSummary = truncateText(
    getAuditValue(searchQuery, "All events"),
    42,
  )
  const columns = AUDIT_PDF_COLUMNS.map((column) => ({
    ...column,
    width: contentWidth * column.weight,
  }))

  let y = topMargin

  const drawIntroSection = () => {
    doc.setFillColor(15, 23, 42)
    doc.rect(marginX, y, contentWidth, 20, "F")
    doc.setTextColor(255, 255, 255)
    doc.setFont("helvetica", "bold")
    doc.setFontSize(18)
    doc.text("Audit Logs Report", marginX + 4, y + 8)
    doc.setFont("helvetica", "normal")
    doc.setFontSize(9)
    doc.text(
      "Structured export of security and compliance activity.",
      marginX + 4,
      y + 14,
    )
    y += 24

    doc.setFillColor(248, 250, 252)
    doc.setDrawColor(203, 213, 225)
    doc.rect(marginX, y, contentWidth, 16, "FD")
    doc.setTextColor(15, 23, 42)
    doc.setFontSize(9)
    doc.setFont("helvetica", "bold")
    doc.text("Date Range", marginX + 4, y + 6)
    doc.text("Search Filter", marginX + contentWidth / 2 + 4, y + 6)
    doc.text("Generated At", marginX + 4, y + 12)
    doc.text("Total Records", marginX + contentWidth / 2 + 4, y + 12)
    doc.setFont("helvetica", "normal")
    doc.text(AUDIT_DATE_RANGE_LABELS[dateRange], marginX + 26, y + 6)
    doc.text(searchSummary, marginX + contentWidth / 2 + 29, y + 6)
    doc.text(generatedAt, marginX + 26, y + 12)
    doc.text(String(logs.length), marginX + contentWidth / 2 + 29, y + 12)
    y += 22
  }

  const drawContinuationHeader = () => {
    doc.setTextColor(15, 23, 42)
    doc.setFont("helvetica", "bold")
    doc.setFontSize(12)
    doc.text("Audit Logs Report", marginX, y)
    doc.setFont("helvetica", "normal")
    doc.setFontSize(8)
    doc.setTextColor(100, 116, 139)
    doc.text(`Continued export | ${logs.length} records`, marginX, y + 5)
    y += 9
  }

  const drawTableHeader = () => {
    let x = marginX
    doc.setFont("helvetica", "bold")
    doc.setFontSize(9)
    doc.setTextColor(255, 255, 255)

    columns.forEach((column) => {
      doc.setFillColor(30, 41, 59)
      doc.setDrawColor(203, 213, 225)
      doc.rect(x, y, column.width, headerRowHeight, "FD")
      doc.text(column.header, x + cellPaddingX, y + 5)
      x += column.width
    })

    y += headerRowHeight
  }

  drawIntroSection()
  drawTableHeader()

  logs.forEach((log, index) => {
    const rowLines = columns.map((column) =>
      doc.splitTextToSize(column.value(log), column.width - cellPaddingX * 2),
    )
    const rowHeight = Math.max(
      8,
      ...rowLines.map((lines) => lines.length * lineHeight + cellPaddingY * 2),
    )

    if (y + rowHeight > pageHeight - bottomMargin) {
      doc.addPage()
      y = topMargin
      drawContinuationHeader()
      drawTableHeader()
    }

    let x = marginX
    rowLines.forEach((lines, columnIndex) => {
      if (index % 2 === 0) {
        doc.setFillColor(255, 255, 255)
      } else {
        doc.setFillColor(248, 250, 252)
      }

      doc.setDrawColor(226, 232, 240)
      doc.rect(x, y, columns[columnIndex].width, rowHeight, "FD")
      doc.setFont("helvetica", columnIndex === 0 ? "bold" : "normal")
      doc.setFontSize(8.5)
      doc.setTextColor(31, 41, 55)
      doc.text(lines, x + cellPaddingX, y + cellPaddingY + 3)
      x += columns[columnIndex].width
    })

    y += rowHeight
  })

  const totalPages = doc.getNumberOfPages()
  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber += 1) {
    doc.setPage(pageNumber)
    doc.setFont("helvetica", "normal")
    doc.setFontSize(8)
    doc.setTextColor(100, 116, 139)
    const pageLabel = `Page ${pageNumber} of ${totalPages}`
    doc.text(
      pageLabel,
      pageWidth - marginX - doc.getTextWidth(pageLabel),
      pageHeight - 4,
    )
  }

  doc.save(filename)
}

export default function Audit() {
  const [logs, setLogs] = useState<AuditLog[]>([])
  const [query, setQuery] = useState("")
  const [isExportDialogOpen, setIsExportDialogOpen] = useState(false)
  const [dateRange, setDateRange] = useState<AuditDateRange>("last7days")
  const [format, setFormat] = useState<AuditExportFormat>("csv")
  const [downloading, setDownloading] = useState(false)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.get<{ logs: AuditLog[] }>("/admin/audit")
        setLogs(data.logs)
      } catch {
        setLogs([])
      }
    }
    void load()
  }, [])
  const filtered = useMemo(
    () => logs.filter((log) => `${log.id} ${log.category} ${log.message} ${log.ipAddress}`.toLowerCase().includes(query.toLowerCase())),
    [logs, query],
  )

  const handleDownload = async () => {
    const exportLogs = filterLogsByDateRange(filtered, dateRange)

    if (exportLogs.length === 0) {
      toast.error("No audit logs match the current filters.")
      return
    }

    const filename = `audit-logs-${new Date().toISOString().slice(0, 10)}.${format}`

    try {
      setDownloading(true)

      if (format === "csv") {
        triggerBrowserDownload(new Blob([buildCsvContent(exportLogs)], { type: "text/csv;charset=utf-8" }), filename)
      } else if (format === "json") {
        triggerBrowserDownload(new Blob([JSON.stringify(exportLogs, null, 2)], { type: "application/json;charset=utf-8" }), filename)
      } else {
        downloadPdf({
          logs: exportLogs,
          filename,
          dateRange,
          searchQuery: query,
        })
      }

      setIsExportDialogOpen(false)
      toast.success(`Audit logs downloaded as ${format.toUpperCase()}.`)
    } catch {
      toast.error("Failed to download audit logs.")
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Audit Logs</h2>
          <p className="text-muted-foreground">
            Review security and compliance audit records.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog open={isExportDialogOpen} onOpenChange={setIsExportDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <IconDownload className="mr-2 h-4 w-4" /> Export Logs
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Export Audit Logs</DialogTitle>
                <DialogDescription>
                  Configure your export options before downloading.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="dateRange">Date Range</Label>
                  <Select value={dateRange} onValueChange={(value: AuditDateRange) => setDateRange(value)}>
                    <SelectTrigger id="dateRange">
                      <SelectValue placeholder="Select date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="last7days">Last 7 Days</SelectItem>
                      <SelectItem value="last30days">Last 30 Days</SelectItem>
                      <SelectItem value="all">All Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="format">Format</Label>
                  <Select value={format} onValueChange={(value: AuditExportFormat) => setFormat(value)}>
                    <SelectTrigger id="format">
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="csv">CSV (Spreadsheet)</SelectItem>
                      <SelectItem value="json">JSON (Data)</SelectItem>
                      <SelectItem value="pdf">PDF (Printable report)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="button" onClick={() => void handleDownload()} disabled={downloading}>
                  {downloading ? "Preparing..." : "Download"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle>Security Logs</CardTitle>
            <CardDescription>
              A permanent, immutable record of all system events.
            </CardDescription>
          </div>
          <div className="flex space-x-2">
             <div className="relative">
              <IconSearch className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search event or IP..." className="pl-8 w-[250px]" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Log ID</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>User / Principal</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Resource</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-mono text-xs">{log.id}</TableCell>
                  <TableCell className="text-muted-foreground">{new Date(log.at).toLocaleString()}</TableCell>
                  <TableCell>{log.category}</TableCell>
                  <TableCell className="font-medium">{log.message}</TableCell>
                  <TableCell className="text-muted-foreground">System</TableCell>
                  <TableCell className="font-mono text-xs">{log.ipAddress}</TableCell>
                  <TableCell>
                    <Badge variant="default"
                           className='bg-green-500/15 text-green-700 hover:bg-green-500/25 border-green-200 dark:text-green-400 dark:border-green-900'
                    >
                      Success
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
