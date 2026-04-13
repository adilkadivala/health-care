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
