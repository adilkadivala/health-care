import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
import { IconCalendarEvent, IconFileText, IconSearch, IconStethoscope, IconTrendingUp, IconTrendingDown } from "@tabler/icons-react"

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
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="flex items-center justify-between space-y-2 px-4 lg:px-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Doctor Workspace</h2>
          <p className="text-muted-foreground">
            Manage your patients, review reports, and update clinical notes.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {/* Search Patient Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <IconSearch className="mr-2 h-4 w-4" />
                Search Patient
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Search Patient Records</DialogTitle>
                <DialogDescription>
                  Enter patient ID, name or phone number to find their medical history.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="search" className="text-right">
                    Query
                  </Label>
                  <Input id="search" placeholder="e.g. Aarav Sharma" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Search</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* New Appointment Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <IconCalendarEvent className="mr-2 h-4 w-4" />
                New Appointment
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Schedule Appointment</DialogTitle>
                <DialogDescription>
                  Book a new slot for a walk-in or follow-up patient.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="patient-name" className="text-right">
                    Name
                  </Label>
                  <Input id="patient-name" placeholder="Name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="time-slot" className="text-right">
                    Time
                  </Label>
                  <Input id="time-slot" type="time" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">Confirm Booking</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Main Layout Grid: 2 columns (Left: 2/3, Right: 1/3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-6">
        
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Welcome Banner */}
          <Card className="bg-gradient-to-r from-indigo-500/10 to-transparent border-indigo-100 dark:border-indigo-900/50 shadow-none">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl text-indigo-900 dark:text-indigo-200">Good morning, Dr. Jenkins</CardTitle>
              <CardDescription className="text-indigo-700/70 dark:text-indigo-300">
                You have a busy shift ahead. 18 patients scheduled, and 7 lab reports need your attention.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Schedule Table */}
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
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
                      <TableCell className="font-medium whitespace-nowrap">{appointment.time}</TableCell>
                      <TableCell>{appointment.patient}</TableCell>
                      <TableCell>{appointment.type}</TableCell>
                      <TableCell>
                        <Badge
                          variant={appointment.status === "Scheduled" ? "outline" : "secondary"}
                          className={
                            appointment.status === "In Progress"
                              ? "bg-blue-500/15 text-blue-700 border-blue-200"
                              : appointment.status === "Checked In"
                                ? "bg-emerald-500/15 text-emerald-700 border-emerald-200"
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

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Stats Bento */}
          <div className="grid grid-cols-2 gap-4 *:data-[slot=card]:shadow-xs">
            <Card>
              <CardHeader className="p-4 pb-2">
                <CardDescription className="text-xs">Appointments</CardDescription>
                <CardTitle className="text-2xl tabular-nums">18</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <Badge variant="outline" className="text-indigo-600 bg-indigo-50 border-indigo-200 mt-1 dark:bg-indigo-950/50 dark:text-indigo-400">
                  <IconTrendingUp className="mr-1 h-3 w-3" /> +3
                </Badge>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="p-4 pb-2">
                <CardDescription className="text-xs">Consultations</CardDescription>
                <CardTitle className="text-2xl tabular-nums">11</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <Badge variant="outline" className="text-emerald-600 bg-emerald-50 border-emerald-200 mt-1 dark:bg-emerald-950/50 dark:text-emerald-400">
                  On Track
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Priority Lab Reports */}
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="text-lg">Priority Reports</CardTitle>
              <CardDescription>Awaiting your verification.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {priorityReports.map((report) => (
                <div key={report.id} className="group rounded-lg border p-3 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm font-medium">{report.patient}</p>
                    <Badge variant={report.status === "Critical" ? "destructive" : "secondary"}>
                      {report.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{report.test}</p>
                  
                  {/* View Report Dialog */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-mono">{report.id}</span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" className="h-7 text-xs">
                          <IconFileText className="mr-1.5 h-3 w-3" />
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Lab Report: {report.test}</DialogTitle>
                          <DialogDescription>
                            Patient: {report.patient} | ID: {report.id}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="bg-muted p-4 rounded-md font-mono text-sm">
                          <p className="mb-2">RESULT SUMMARY:</p>
                          <p className="text-rose-500 font-bold">1 Abnormal Flag Detected.</p>
                          <p className="text-muted-foreground mt-2">Values indicate slight elevation. Recommend follow up.</p>
                        </div>
                        <DialogFooter>
                          <Button variant="outline">Request Retest</Button>
                          <Button className="bg-indigo-600">Mark as Reviewed</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Action Reminder */}
          <Card className="bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-900/50">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-1 text-indigo-700 dark:text-indigo-400">
                <IconStethoscope className="h-5 w-5" />
                <CardTitle className="text-base">Clinical Notes</CardTitle>
              </div>
              <CardDescription>3 encounters missing final notes.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Note Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-white text-indigo-700 hover:bg-white/90 border border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800">
                    Complete Now
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Update Clinical Notes</DialogTitle>
                    <DialogDescription>
                      Missing ICD-10 codes and exam summaries for morning block.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <Label>Diagnosis Notes</Label>
                    <Textarea placeholder="Type patient evaluation here..." className="min-h-[100px]" />
                  </div>
                  <DialogFooter>
                    <Button>Save to Records</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
