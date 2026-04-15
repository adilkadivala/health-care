<<<<<<< HEAD
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
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IconFilter, IconSearch } from "@tabler/icons-react"
import { api } from "@/lib/http"
import { useEffect, useMemo, useState } from "react"

type ReceptionAppointmentsResponse = {
  appointments: Array<{
    id: string
    patientName: string
    doctorName: string
    startTime: string
    status: string
  }>
}

export default function Appointments() {
  const [appointments, setAppointments] = useState<ReceptionAppointmentsResponse["appointments"]>([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.get<ReceptionAppointmentsResponse>(`/reception/appointments?q=${encodeURIComponent(query)}`)
        setAppointments(data.appointments)
      } catch {
        setAppointments([])
      }
    }
    void load()
  }, [query])

  const appointmentRows = useMemo(
    () =>
      appointments.map((a) => ({
        id: a.id,
        patient: a.patientName,
        doctor: a.doctorName,
        slot: new Date(a.startTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        status: a.status.toLowerCase().replaceAll("_", " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      })),
    [appointments],
  )

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Appointments</h2>
          <p className="text-muted-foreground">
            Manage same-day check-ins and front desk appointment coordination.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle>Today&apos;s Desk Queue</CardTitle>
            <CardDescription>Track current arrivals and update their intake status.</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <IconSearch className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search patient..." className="w-[240px] pl-8" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <Button variant="outline" size="icon">
              <IconFilter className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Appointment ID</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Time Slot</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointmentRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-mono text-xs">{row.id}</TableCell>
                  <TableCell className="font-medium">{row.patient}</TableCell>
                  <TableCell>{row.doctor}</TableCell>
                  <TableCell>{row.slot}</TableCell>
                  <TableCell>
                    <Badge
                      variant={row.status === "Checked In" ? "default" : "outline"}
                      className={
                        row.status === "Waiting"
                          ? "bg-orange-500/15 text-orange-700 border-orange-200"
                          : ""
                      }
                    >
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
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IconCalendarEvent, IconClock, IconUser, IconCheck, IconX, IconDotsVertical } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AppointmentsPage() {
  const appointments = [
    { id: 1, patient: "Sarah Connor", time: "09:00 AM", doctor: "Dr. Smith", type: "Regular Checkup", status: "Confirmed" },
    { id: 2, patient: "John Doe", time: "09:30 AM", doctor: "Dr. Adams", type: "Consultation", status: "Pending" },
    { id: 3, patient: "Emily Chen", time: "10:15 AM", doctor: "Dr. Smith", type: "Follow-up", status: "Confirmed" },
    { id: 4, patient: "Michael Johnson", time: "11:00 AM", doctor: "Dr. Lee", type: "Vaccination", status: "Cancelled" },
    { id: 5, patient: "Robert Brown", time: "01:00 PM", doctor: "Dr. Adams", type: "Skin Check", status: "In Progress" },
  ];

  return (
    <div className="flex flex-col gap-6 px-4 lg:px-6 py-6 border-t mt-4 border-t-transparent pt-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl shadow-sm">
            <IconCalendarEvent className="size-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Appointments</h1>
            <p className="text-muted-foreground text-sm">Manage front-desk scheduling and patient assignments.</p>
          </div>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Input placeholder="Search patient..." className="w-full sm:w-64 bg-background" />
          <Button>New Appointment</Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Today's Schedule</CardTitle>
                <CardDescription>All appointments scheduled for today.</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Prev</Button>
                <Button variant="outline" size="sm">Today</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {appointments.map((apt) => (
                <div key={apt.id} className="flex items-center justify-between p-4 border rounded-xl hover:shadow-md transition-all bg-card">
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex flex-col items-center justify-center w-16 h-16 bg-muted rounded-lg border">
                      <span className="text-xs text-muted-foreground font-medium">TIME</span>
                      <span className="text-sm font-bold text-foreground">{apt.time.split(" ")[0]}</span>
                      <span className="text-xs text-muted-foreground">{apt.time.split(" ")[1]}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-base">{apt.patient}</h4>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                        <span className="flex items-center gap-1"><IconUser className="size-3" /> {apt.doctor}</span>
                        <span className="flex items-center gap-1"><IconClock className="size-3" /> {apt.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={
                      apt.status === "Confirmed" ? "default" :
                      apt.status === "Pending" ? "outline" :
                      apt.status === "In Progress" ? "secondary" : "destructive"
                    }>
                      {apt.status}
                    </Badge>
                    <div className="flex gap-1 hidden sm:flex">
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/50"><IconCheck className="size-4" /></Button>
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/50"><IconX className="size-4" /></Button>
                    </div>
                    <Button size="icon" variant="ghost" className="h-8 w-8 sm:hidden"><IconDotsVertical className="size-4" /></Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <div className="flex flex-col gap-6">
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle>Mini Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 border rounded-xl bg-muted/30 flex items-center justify-center h-48 text-muted-foreground">
                [Calendar Component Placeholder]
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center p-3 border rounded-lg bg-card text-sm">
                  <span className="text-muted-foreground">Total Today</span>
                  <span className="font-bold text-accent-foreground">24</span>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg bg-card text-sm">
                  <span className="text-muted-foreground">Completed</span>
                  <span className="font-bold text-emerald-600">8</span>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg bg-card text-sm">
                  <span className="text-muted-foreground">No Shows</span>
                  <span className="font-bold text-red-600">1</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
>>>>>>> 840abc40f09212a414d550d90fe5e854e638aa89
