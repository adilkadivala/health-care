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
  const [appointments, setAppointments] = useState<
    ReceptionAppointmentsResponse["appointments"]
  >([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.get<ReceptionAppointmentsResponse>(
          `/reception/appointments?q=${encodeURIComponent(query)}`
        )
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
        slot: new Date(a.startTime).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        status: a.status
          .toLowerCase()
          .replaceAll("_", " ")
          .replace(/\b\w/g, (c) => c.toUpperCase()),
      })),
    [appointments]
  )
  const filteredAppointmentRows = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return appointmentRows
    return appointmentRows.filter(
      (row) =>
        row.id.toLowerCase().includes(term) ||
        row.patient.toLowerCase().includes(term) ||
        row.doctor.toLowerCase().includes(term) ||
        row.status.toLowerCase().includes(term)
    )
  }, [appointmentRows, query])

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
            <CardDescription>
              Track current arrivals and update their intake status.
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <IconSearch className="absolute top-2.5 left-2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search patient..."
                className="w-[240px] pl-8"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
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
              {filteredAppointmentRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-mono text-xs">{row.id}</TableCell>
                  <TableCell className="font-medium">{row.patient}</TableCell>
                  <TableCell>{row.doctor}</TableCell>
                  <TableCell>{row.slot}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        row.status === "Checked In" ? "default" : "outline"
                      }
                      className={
                        row.status === "Waiting"
                          ? "border-orange-200 bg-orange-500/15 text-orange-700"
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
