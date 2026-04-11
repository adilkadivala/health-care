import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  IconActivity,
  IconCalendarEvent,
  IconFileText,
  IconMessageCircle,
  IconStethoscope,
} from "@tabler/icons-react"

const activities = [
  {
    id: 1,
    user: "Dr. Sarah Jenkins",
    avatar: "https://i.pravatar.cc/150?u=doctor-activity-1",
    action: "Completed consultation for patient Aarav Sharma",
    time: "8 minutes ago",
    type: "consultation",
    icon: <IconStethoscope className="h-4 w-4" />,
  },
  {
    id: 2,
    user: "Lab System",
    avatar: "https://ui-avatars.com/api/?name=Lab+System&background=random",
    action: "Uploaded new thyroid profile report for review",
    time: "24 minutes ago",
    type: "lab",
    icon: <IconFileText className="h-4 w-4" />,
  },
  {
    id: 3,
    user: "Care Coordinator",
    avatar: "https://ui-avatars.com/api/?name=Care+Coordinator&background=random",
    action: "Rescheduled follow up appointment for patient Neha Verma",
    time: "1 hour ago",
    type: "appointment",
    icon: <IconCalendarEvent className="h-4 w-4" />,
  },
  {
    id: 4,
    user: "Patient Portal",
    avatar: "https://ui-avatars.com/api/?name=Patient+Portal&background=random",
    action: "Received a new patient query in secure messaging",
    time: "2 hours ago",
    type: "message",
    icon: <IconMessageCircle className="h-4 w-4" />,
  },
  {
    id: 5,
    user: "System",
    avatar: "https://ui-avatars.com/api/?name=System&background=random",
    action: "Daily summary and chart notes were synced successfully",
    time: "Yesterday, 17:40",
    type: "system",
    icon: <IconActivity className="h-4 w-4" />,
  },
]

export default function Activity() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Doctor Activity</h2>
          <p className="text-muted-foreground">
            Track recent clinical actions, schedule updates, and communication events.
          </p>
        </div>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Recent Activity Log</CardTitle>
          <CardDescription>
            Latest actions related to appointments, lab reviews, and clinical notes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={activity.avatar} alt={activity.user} />
                  <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm leading-none">
                    <span className="font-semibold text-primary">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
                <div className="ml-auto">
                  <Badge variant="outline" className="flex items-center gap-1">
                    {activity.icon}
                    <span className="capitalize">{activity.type}</span>
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
