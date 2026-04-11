import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IconCalendarEvent, IconFileText, IconSearch, IconStethoscope } from "@tabler/icons-react"

const todaysAppointments = [
  {
    id: "A-2401",
    time: "09:00 AM",
    patient: "Aarav Sharma",
    type: "Follow Up",
    status: "Checked In",
  },
  {
    id: "A-2402",
    time: "09:30 AM",
    patient: "Neha Verma",
    type: "Consultation",
    status: "In Progress",
  },
  {
    id: "A-2403",
    time: "10:15 AM",
    patient: "Riya Patel",
    type: "Review",
    status: "Scheduled",
  },
  {
    id: "A-2404",
    time: "11:00 AM",
    patient: "Kabir Khan",
    type: "New Patient",
    status: "Scheduled",
  },
]

const priorityReports = [
  {
    id: "LR-8812",
    patient: "Nikhil Joshi",
    test: "CBC + ESR",
    status: "Pending Review",
  },
  {
    id: "LR-8815",
    patient: "Sana Iqbal",
    test: "Liver Function Panel",
    status: "Ready",
  },
  {
    id: "LR-8819",
    patient: "Rohan Kulkarni",
    test: "Thyroid Profile",
    status: "Critical",
  },
]

export default function Overview() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Doctor Overview</h2>
          <p className="text-muted-foreground">
            Daily summary of appointments, patient flow, and report workload.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <IconSearch className="mr-2 h-4 w-4" />
            Search Patient
          </Button>
          <Button>
            <IconCalendarEvent className="mr-2 h-4 w-4" />
            New Appointment
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Appointments Today</CardDescription>
            <CardTitle className="text-2xl">18</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">4 completed in morning block</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Consultations Completed</CardDescription>
            <CardTitle className="text-2xl">11</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">On track with expected workload</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Lab Reports Pending</CardDescription>
            <CardTitle className="text-2xl">7</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">2 reports marked high priority</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Follow Ups Due</CardDescription>
            <CardTitle className="text-2xl">5</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Need confirmation before evening</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Today Schedule</CardTitle>
            <CardDescription>Upcoming patient slots for this shift.</CardDescription>
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
                {todaysAppointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell className="font-medium">{appointment.time}</TableCell>
                    <TableCell>{appointment.patient}</TableCell>
                    <TableCell>{appointment.type}</TableCell>
                    <TableCell>
                      <Badge
                        variant={appointment.status === "Scheduled" ? "outline" : "secondary"}
                        className={
                          appointment.status === "In Progress"
                            ? "bg-blue-500/15 text-blue-700 border-blue-200 hover:bg-blue-500/20 dark:text-blue-400 dark:border-blue-900"
                            : appointment.status === "Checked In"
                              ? "bg-green-500/15 text-green-700 border-green-200 hover:bg-green-500/20 dark:text-green-400 dark:border-green-900"
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

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Priority Lab Reports</CardTitle>
            <CardDescription>Reports that need verification and notes.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {priorityReports.map((report) => (
              <div key={report.id} className="rounded-lg border p-3">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-medium">{report.patient}</p>
                  <Badge
                    variant={
                      report.status === "Critical"
                        ? "destructive"
                        : report.status === "Ready"
                          ? "default"
                          : "secondary"
                    }
                    className={
                      report.status === "Ready"
                        ? "bg-green-500/15 text-green-700 border-green-200 hover:bg-green-500/20 dark:text-green-400 dark:border-green-900"
                        : ""
                    }
                  >
                    {report.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{report.test}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{report.id}</span>
                  <Button size="sm" variant="outline">
                    <IconFileText className="mr-2 h-4 w-4" />
                    View
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Clinical Notes Reminder</CardTitle>
          <CardDescription>
            Keep visit records complete before the end of shift for billing and compliance.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <IconStethoscope className="h-4 w-4" />
            3 encounters are still missing final diagnosis notes.
          </div>
          <Button>Complete Pending Notes</Button>
        </CardContent>
      </Card>
    </div>
  )
}
