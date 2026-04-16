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
import { IconFilter, IconPlus, IconSearch } from "@tabler/icons-react"
import { useEffect, useMemo, useState } from "react"
import { api } from "@/lib/http"

type PatientAppointmentsResponse = {
  appointments: Array<{
    id: string
    startTime: string
    doctorName: string
    department: string
    status: string
  }>
}

export default function Appointment() {
  const [appointments, setAppointments] = useState<
    PatientAppointmentsResponse["appointments"]
  >([])
  const [department, setDepartment] = useState("general")
  const [doctorName, setDoctorName] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [doctors, setDoctors] = useState<
    Array<{ id: string; name: string; department: string }>
  >([])

  useEffect(() => {
    void loadAppointments()
    void loadDoctors()
  }, [])

  async function loadAppointments() {
    try {
      const data = await api.get<PatientAppointmentsResponse>(
        "/patient/appointments"
      )
      setAppointments(data.appointments)
    } catch {
      setAppointments([])
    }
  }

  async function loadDoctors() {
    try {
      const data = await api.get<{
        doctors: Array<{ id: string; name: string; department: string }>
      }>("/patient/doctors")
      setDoctors(data.doctors)
    } catch {
      setDoctors([])
    }
  }

  const handleBookAppointment = async () => {
    if (!date || !time) return
    try {
      const selectedDoctor = doctors.find((doctor) => doctor.id === doctorName)
      if (!selectedDoctor) return
      const startTime = new Date(`${date}T${time}:00`)
      const endTime = new Date(startTime.getTime() + 30 * 60 * 1000)
      await api.post("/patient/appointments", {
        doctorId: selectedDoctor.id,
        date: startTime.toISOString(),
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
        reasonForVisit: `${department} consultation`,
      })
      await loadAppointments()
    } catch {
      // keep UI unchanged; silent failure
    }
  }

  const mapped = useMemo(
    () =>
      appointments.map((appointment) => {
        const dt = new Date(appointment.startTime)
        return {
          id: appointment.id,
          date: dt.toLocaleDateString(),
          time: dt.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          doctor: appointment.doctorName,
          department: appointment.department,
          status: appointment.status
            .toLowerCase()
            .replaceAll("_", " ")
            .replace(/\b\w/g, (c) => c.toUpperCase()),
        }
      }),
    [appointments]
  )

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Appointments</h2>
          <p className="text-muted-foreground">
            Manage upcoming visits, view history, and book new consultations.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <IconPlus className="mr-2 h-4 w-4" />
              Book Appointment
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Book New Appointment</DialogTitle>
              <DialogDescription>
                Select your department, preferred doctor, and available slot.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="department">Department</Label>
                <Select value={department} onValueChange={setDepartment}>
                  <SelectTrigger id="department">
                    <SelectValue placeholder="Choose department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="neurology">Neurology</SelectItem>
                    <SelectItem value="general">General Medicine</SelectItem>
                    <SelectItem value="orthopedics">Orthopedics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="doctor">Preferred Doctor</Label>
                <Select value={doctorName} onValueChange={setDoctorName}>
                  <SelectTrigger id="doctor">
                    <SelectValue placeholder="Select doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    {doctors
                      .filter((doctor) =>
                        department === "general"
                          ? true
                          : doctor.department
                              .toLowerCase()
                              .includes(department.toLowerCase())
                      )
                      .map((doctor) => (
                        <SelectItem key={doctor.id} value={doctor.id}>
                          {doctor.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="appointment-date">Date</Label>
                  <Input
                    id="appointment-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="appointment-time">Time</Label>
                  <Input
                    id="appointment-time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleBookAppointment}>
                Confirm Booking
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle>Appointment Timeline</CardTitle>
            <CardDescription>
              All upcoming and recent appointments in your account.
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <IconSearch className="absolute top-2.5 left-2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search doctor or department..."
                className="w-[250px] pl-8"
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
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mapped.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell className="font-mono text-xs">
                    {appointment.id}
                  </TableCell>
                  <TableCell className="font-medium">
                    {appointment.date}
                  </TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.doctor}</TableCell>
                  <TableCell>{appointment.department}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        appointment.status === "Completed"
                          ? "secondary"
                          : appointment.status === "Cancelled"
                            ? "destructive"
                            : "outline"
                      }
                      className={
                        appointment.status === "Confirmed"
                          ? "border-green-200 bg-green-500/15 text-green-700 hover:bg-green-500/20 dark:border-green-900 dark:text-green-400"
                          : appointment.status === "Pending"
                            ? "border-orange-200 bg-orange-500/15 text-orange-700 hover:bg-orange-500/20 dark:border-orange-900 dark:text-orange-400"
                            : appointment.status === "Completed"
                              ? "border-blue-200 bg-blue-500/15 text-blue-700 hover:bg-blue-500/20 dark:border-blue-900 dark:text-blue-400"
                              : ""
                      }
                    >
                      {appointment.status}
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
