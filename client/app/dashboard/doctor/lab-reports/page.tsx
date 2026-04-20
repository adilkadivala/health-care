"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
import { api } from "@/lib/http"

type DoctorReportsResponse = {
  labReports: Array<{
    id: string
    patientName: string
    orderedOn: string
    title: string
    summary: string | null
    status: string
  }>
}

export default function LabReports() {
  const [reports, setReports] = useState<DoctorReportsResponse["labReports"]>([])
  const [search, setSearch] = useState("")

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
        result: report.summary ?? "-",
        orderedOn: new Date(report.orderedOn).toLocaleString(),
        priority:
          report.status === "CRITICAL"
            ? "Critical"
            : report.status === "PENDING_REVIEW"
              ? "High"
              : "Routine",
        status: report.status
          .toLowerCase()
          .replaceAll("_", " ")
          .replace(/\b\w/g, (c) => c.toUpperCase()),
      })),
    [reports],
  )
  const filtered = useMemo(
    () =>
      mapped.filter((report) =>
        `${report.id} ${report.patient} ${report.test}`.toLowerCase().includes(search.toLowerCase()),
      ),
    [mapped, search],
  )

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Lab Reports</h2>
          <p className="text-muted-foreground">
            Review report findings, set priority, and track escalation status.
          </p>
        </div>
        <Dialog>
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
                <Select defaultValue="7-days">
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
                <Select defaultValue="csv">
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
              <Button type="submit">Download</Button>
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
              onChange={(e) => setSearch(e.target.value)}
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
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-mono text-xs">{report.id}</TableCell>
                  <TableCell className="font-medium">{report.patient}</TableCell>
                  <TableCell className="text-muted-foreground">{report.orderedOn}</TableCell>
                  <TableCell>{report.test}</TableCell>
                  <TableCell className="text-muted-foreground">{report.result}</TableCell>
                  <TableCell>
                    <Badge
                      variant={report.priority === "Critical" ? "destructive" : "outline"}
                      className={
                        report.priority === "High"
                          ? "bg-orange-500/15 text-orange-700 border-orange-200 hover:bg-orange-500/20 dark:text-orange-400 dark:border-orange-900"
                          : report.priority === "Routine"
                            ? "bg-slate-500/15 text-slate-700 border-slate-200 hover:bg-slate-500/20 dark:text-slate-300 dark:border-slate-800"
                            : ""
                      }
                    >
                      {report.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={report.status === "Escalated" ? "destructive" : "secondary"}
                      className={
                        report.status === "Reviewed"
                          ? "bg-green-500/15 text-green-700 border-green-200 hover:bg-green-500/20 dark:text-green-400 dark:border-green-900"
                          : report.status === "Pending Review"
                            ? "bg-blue-500/15 text-blue-700 border-blue-200 hover:bg-blue-500/20 dark:text-blue-400 dark:border-blue-900"
                            : ""
                      }
                    >
                      {report.status}
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
