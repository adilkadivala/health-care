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
import { IconCalendarEvent, IconFilter, IconPlus, IconSearch } from "@tabler/icons-react"

const appointments = [
  {
    id: "APT-1042",
    patient: "Sana Iqbal",
    time: "09:30 AM",
    visitType: "Follow Up",
    department: "Cardiology",
    status: "Checked In",
  },
  {
    id: "APT-1048",
    patient: "Aarav Sharma",
    time: "10:15 AM",
    visitType: "Consultation",
    department: "General Medicine",
    status: "In Progress",
  },
  {
    id: "APT-1050",
    patient: "Kabir Khan",
    time: "11:00 AM",
    visitType: "New Patient",
    department: "General Medicine",
    status: "Scheduled",
  },
  {
    id: "APT-1056",
    patient: "Neha Verma",
    time: "12:30 PM",
    visitType: "Lab Review",
    department: "Endocrinology",
    status: "Scheduled",
  },
  {
    id: "APT-1062",
    patient: "Ishaan Reddy",
    time: "02:15 PM",
    visitType: "Follow Up",
    department: "Cardiology",
    status: "Rescheduled",
  },
]

export default function Appointments() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Appointments</h2>
          <p className="text-muted-foreground">
            Manage patient slots, visit types, and day schedule flow.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <IconPlus className="mr-2 h-4 w-4" />
              Add Appointment
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create Appointment</DialogTitle>
              <DialogDescription>
                Add a new visit slot to the doctor calendar.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="patient-name">Patient Name</Label>
                <Input id="patient-name" placeholder="Enter patient full name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="visit-type">Visit Type</Label>
                  <Select>
                    <SelectTrigger id="visit-type">
                      <SelectValue placeholder="Select visit type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="follow-up">Follow Up</SelectItem>
                      <SelectItem value="lab-review">Lab Review</SelectItem>
                      <SelectItem value="new-patient">New Patient</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="department">Department</Label>
                  <Select>
                    <SelectTrigger id="department">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Medicine</SelectItem>
                      <SelectItem value="cardiology">Cardiology</SelectItem>
                      <SelectItem value="endocrinology">Endocrinology</SelectItem>
                      <SelectItem value="neurology">Neurology</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">
                <IconCalendarEvent className="mr-2 h-4 w-4" />
                Save Appointment
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle>Day Schedule</CardTitle>
            <CardDescription>
              18 appointments are currently planned for this doctor.
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <IconSearch className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search patient..." className="w-[230px] pl-8" />
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
                <TableHead>Time</TableHead>
                <TableHead>Visit Type</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell className="font-mono text-xs">{appointment.id}</TableCell>
                  <TableCell className="font-medium">{appointment.patient}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.visitType}</TableCell>
                  <TableCell>{appointment.department}</TableCell>
                  <TableCell>
                    <Badge
                      variant={appointment.status === "Scheduled" ? "outline" : "secondary"}
                      className={
                        appointment.status === "In Progress"
                          ? "bg-blue-500/15 text-blue-700 border-blue-200 hover:bg-blue-500/20 dark:text-blue-400 dark:border-blue-900"
                          : appointment.status === "Checked In"
                            ? "bg-green-500/15 text-green-700 border-green-200 hover:bg-green-500/20 dark:text-green-400 dark:border-green-900"
                            : appointment.status === "Rescheduled"
                              ? "bg-orange-500/15 text-orange-700 border-orange-200 hover:bg-orange-500/20 dark:text-orange-400 dark:border-orange-900"
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
