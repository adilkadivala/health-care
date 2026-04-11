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
import { IconCalendarEvent, IconFileText, IconSearch } from "@tabler/icons-react"

const upcomingAppointments = [
  {
    id: "PA-4001",
    date: "Apr 14, 2026",
    time: "10:30 AM",
    doctor: "Dr. Sarah Jenkins",
    department: "Cardiology",
    status: "Confirmed",
  },
  {
    id: "PA-4008",
    date: "Apr 18, 2026",
    time: "02:00 PM",
    doctor: "Dr. Robert Fox",
    department: "Neurology",
    status: "Pending",
  },
  {
    id: "PA-4013",
    date: "Apr 23, 2026",
    time: "09:15 AM",
    doctor: "Dr. Emily Carter",
    department: "General Medicine",
    status: "Confirmed",
  },
]

const reminders = [
  {
    id: "RM-101",
    title: "Take evening medication",
    note: "Atorvastatin 20mg after dinner",
    due: "Today, 08:00 PM",
  },
  {
    id: "RM-102",
    title: "Upload previous ECG",
    note: "Needed before cardiology follow up",
    due: "Tomorrow, 11:00 AM",
  },
  {
    id: "RM-103",
    title: "Fasting before blood test",
    note: "No food 10 hours before sample collection",
    due: "Apr 17, 10:00 PM",
  },
]

export default function Overview() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Patient Overview</h2>
          <p className="text-muted-foreground">
            Snapshot of your upcoming care, reports, and health reminders.
          </p>
        </div>
        <Button variant="outline">
          <IconSearch className="mr-2 h-4 w-4" />
          Search Records
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Upcoming Appointments</CardDescription>
            <CardTitle className="text-2xl">3</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Next visit is on Apr 14, 2026</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Active Prescriptions</CardDescription>
            <CardTitle className="text-2xl">5</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">2 need refill this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Lab Reports Available</CardDescription>
            <CardTitle className="text-2xl">2</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">New thyroid report added today</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Profile Completion</CardDescription>
            <CardTitle className="text-2xl">92%</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Add insurance copy to reach 100%</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Upcoming Visits</CardTitle>
            <CardDescription>Your next confirmed and pending appointments.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {upcomingAppointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell className="font-medium">{appointment.date}</TableCell>
                    <TableCell>{appointment.time}</TableCell>
                    <TableCell>{appointment.doctor}</TableCell>
                    <TableCell>{appointment.department}</TableCell>
                    <TableCell>
                      <Badge
                        variant={appointment.status === "Confirmed" ? "default" : "secondary"}
                        className={
                          appointment.status === "Confirmed"
                            ? "bg-green-500/15 text-green-700 border-green-200 hover:bg-green-500/20 dark:text-green-400 dark:border-green-900"
                            : "bg-orange-500/15 text-orange-700 border-orange-200 hover:bg-orange-500/20 dark:text-orange-400 dark:border-orange-900"
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
            <CardTitle>Care Reminders</CardTitle>
            <CardDescription>Tasks and timelines from your care plan.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {reminders.map((reminder) => (
              <div key={reminder.id} className="rounded-lg border p-3">
                <p className="text-sm font-semibold">{reminder.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{reminder.note}</p>
                <p className="mt-2 text-xs text-muted-foreground">{reminder.due}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common patient tasks you can complete from here.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 sm:flex-row">
          <Button className="sm:w-auto">
            <IconCalendarEvent className="mr-2 h-4 w-4" />
            Book Follow Up
          </Button>
          <Button variant="outline" className="sm:w-auto">
            <IconFileText className="mr-2 h-4 w-4" />
            Download Latest Report
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
