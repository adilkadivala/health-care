"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IconCalendarEvent, IconFileText, IconSearch, IconTrendingUp, IconTrendingDown, IconHeartbeat } from "@tabler/icons-react"
import { useEffect, useMemo, useState } from "react"
import { api } from "@/lib/http"

type PatientOverviewResponse = {
  metrics: {
    activePrescriptions: number
    profileCompletion: number
  }
  nextAppointment: {
    startTime: string
    doctorName: string
    department: string
  } | null
  appointments: Array<{
    id: string
    startTime: string
    doctorName: string
    department: string
    status: string
  }>
  reminders: Array<{
    id: string
    title: string
    note: string
    due: string
  }>
}

export default function Overview() {
  const [overview, setOverview] = useState<PatientOverviewResponse | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.get<PatientOverviewResponse>("/patient/overview")
        setOverview(data)
      } catch {
        setOverview(null)
      }
    }
    void load()
  }, [])

  const upcomingAppointments = useMemo(
    () =>
      (overview?.appointments ?? []).map((appointment) => {
        const dt = new Date(appointment.startTime)
        return {
          id: appointment.id,
          date: dt.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }),
          time: dt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          doctor: appointment.doctorName,
          department: appointment.department,
          status: appointment.status.toLowerCase().replaceAll("_", " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        }
      }),
    [overview],
  )

  const reminders = useMemo(
    () =>
      (overview?.reminders ?? []).map((r) => ({
        ...r,
        due: new Date(r.due).toLocaleString(),
      })),
    [overview],
  )

  const nextDate = overview?.nextAppointment ? new Date(overview.nextAppointment.startTime) : null

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="flex items-center justify-between space-y-2 px-4 lg:px-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Patient Portal</h2>
          <p className="text-muted-foreground">
            Snapshot of your upcoming care, reports, and health reminders.
          </p>
        </div>
        
        {/* Search Records Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <IconSearch className="mr-2 h-4 w-4" />
              Search Records
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Search Your Health Records</DialogTitle>
              <DialogDescription>
                Find previous lab results, prescriptions, or visit summaries.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="search-records" className="text-right">
                  Keywords
                </Label>
                <Input id="search-records" placeholder="e.g. Blood Test 2025" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">Search</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="px-4 lg:px-6 space-y-6">
        {/* Hero Section: Next Appointment */}
        <Card className="bg-emerald-600 text-white border-transparent shadow-md overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <IconHeartbeat className="w-48 h-48" />
          </div>
          <CardHeader className="relative z-10">
            <CardDescription className="text-emerald-100 font-medium">Your Next Appointment</CardDescription>
            <CardTitle className="text-3xl font-bold mt-1">
              {nextDate ? `${nextDate.toLocaleDateString()} at ${nextDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : "No upcoming appointment"}
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-medium text-emerald-50 text-lg">{overview?.nextAppointment?.doctorName ?? "-"}</p>
              <p className="text-emerald-200">{overview?.nextAppointment?.department ?? "-"}</p>
            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-white text-emerald-700 hover:bg-emerald-50">
                  Reschedule
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Reschedule Appointment</DialogTitle>
                  <DialogDescription>
                    Select a new time slot for Dr. Sarah Jenkins.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right">Date</Label>
                    <Input type="date" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right">Time</Label>
                    <Input type="time" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="button" variant="outline">Cancel</Button>
                  <Button className="bg-emerald-600">Confirm Change</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Column 1: Stats Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold tracking-tight">Your Health Stats</h3>
            <Card className="bg-emerald-50/50 dark:bg-emerald-950/20 shadow-none border-emerald-100 dark:border-emerald-900/50">
              <CardHeader className="p-4 pb-2">
                <CardDescription>Active Prescriptions</CardDescription>
                <CardTitle className="text-2xl tabular-nums">{overview?.metrics.activePrescriptions ?? 0}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-xs text-muted-foreground">2 need refill this week.</p>
              </CardContent>
            </Card>
            <Card className="shadow-none border-dashed border-2 bg-transparent">
              <CardHeader className="p-4 pb-2">
                <CardDescription>Profile Completion</CardDescription>
                <CardTitle className="text-2xl tabular-nums text-emerald-600 dark:text-emerald-500">{overview?.metrics.profileCompletion ?? 0}%</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-xs text-muted-foreground">Add insurance copy to reach 100%.</p>
              </CardContent>
            </Card>
            
            {/* Quick Actions Card mapped into the column */}
            <Card className="mt-2">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex flex-col gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border-none dark:bg-emerald-950 dark:text-emerald-300">
                      <IconCalendarEvent className="mr-2 h-4 w-4" />
                      Book Follow Up
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Book a New Appointment</DialogTitle>
                      <DialogDescription>
                        Schedule a visit with any available doctor in our network.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Specialty</Label>
                        <Input placeholder="e.g. General Medicine" className="col-span-3" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button className="bg-emerald-600">Find Doctors</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
                      <IconFileText className="mr-2 h-4 w-4" />
                      Latest Report
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Download Lab Report</DialogTitle>
                      <DialogDescription>
                        Thyroid Profile (Apr 10, 2026) is ready to download.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="p-4 bg-muted rounded flex items-center justify-between border">
                      <span className="font-mono text-sm">Thyroid_Results.pdf</span>
                      <span className="text-xs text-muted-foreground">1.2 MB</span>
                    </div>
                    <DialogFooter>
                      <Button className="bg-emerald-600 w-full">Download PDF</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>

          {/* Column 2: Upcoming Visits */}
          <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold tracking-tight">Timeline</h3>
            <Card className="flex-1">
              <CardContent className="p-0">
                <div className="divide-y">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="p-4 flex gap-4 hover:bg-muted/50 transition-colors">
                      <div className="flex flex-col items-center justify-center bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 rounded-lg p-2 min-w-[70px]">
                        <span className="text-xs font-semibold uppercase">{appointment.date.split(',')[0].split(' ')[0]}</span>
                        <span className="text-lg font-bold">{appointment.date.split(',')[0].split(' ')[1]}</span>
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="font-semibold">{appointment.doctor}</p>
                        <p className="text-sm text-muted-foreground">{appointment.department} &bull; {appointment.time}</p>
                        <div className="mt-1">
                           <Badge variant={appointment.status === "Confirmed" ? "secondary" : "outline"} className="text-[10px] px-1.5 py-0">
                             {appointment.status}
                           </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Column 3: Care Reminders */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold tracking-tight">Care Reminders</h3>
            <Card className="h-full">
              <CardContent className="p-4 space-y-4">
                {reminders.map((reminder) => (
                  <div key={reminder.id} className="relative pl-6">
                    {/* Timeline dot */}
                    <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-50 dark:ring-emerald-950"></span>
                    <div className="mb-1 flexitems-center justify-between">
                      <p className="text-sm font-semibold">{reminder.title}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{reminder.note}</p>
                    <p className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">{reminder.due}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  )
}
