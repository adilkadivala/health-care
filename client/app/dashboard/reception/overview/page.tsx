import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardAction } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { IconClipboardList, IconUsers, IconHeartbeat, IconCalendarPlus } from "@tabler/icons-react"

export default function ReceptionOverview() {
  return (
    <div className="flex flex-col gap-6 py-4 md:py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 lg:px-6">
        {[
          { title: "Waiting Room", value: "14", desc: "Currently waiting", icon: IconUsers },
          { title: "Today's Appointments", value: "48", desc: "Scheduled for today", icon: IconClipboardList },
          { title: "Walk-ins", value: "24", desc: "Unscheduled visits today", icon: IconHeartbeat },
          { title: "New Registrations", value: "7", desc: "New patients today", icon: IconCalendarPlus },
        ].map((stat, i) => (
          <Dialog key={i}>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <stat.icon className="size-16" />
                </div>
                <CardHeader className="pb-2">
                  <CardDescription>{stat.title}</CardDescription>
                  <CardTitle className="text-3xl font-bold">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="mt-2 text-xs">{stat.desc}</Badge>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{stat.title} Details</DialogTitle>
                <DialogDescription>
                  Detailed view of {stat.title.toLowerCase()}. You can find actionable insights here.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4">
                <div className="text-sm font-medium">Metric breakdown:</div>
                <div className="p-4 bg-muted rounded-md border flex items-center justify-between">
                  <span>Current count</span>
                  <span className="font-bold text-lg">{stat.value}</span>
                </div>
                <Button>Generate Report</Button>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
      
      <div className="grid lg:grid-cols-3 gap-6 px-4 lg:px-6">
        <div className="col-span-2">
          <ChartAreaInteractive />
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <Card className="flex-1 h-full flex flex-col">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest reception updates</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="flex-1">
                    <p className="font-medium">Patient John Doe arrived</p>
                    <p className="text-xs text-muted-foreground">10 minutes ago</p>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
