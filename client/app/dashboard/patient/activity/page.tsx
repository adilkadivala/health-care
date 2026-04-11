import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  IconActivity,
  IconCalendarEvent,
  IconFileText,
  IconMessageCircle,
  IconUser,
} from "@tabler/icons-react"

const activities = [
  {
    id: 1,
    user: "Patient Portal",
    avatar: "https://ui-avatars.com/api/?name=Patient+Portal&background=random",
    action: "Your cardiology appointment was confirmed for Apr 14, 2026",
    time: "12 minutes ago",
    type: "appointment",
    icon: <IconCalendarEvent className="h-4 w-4" />,
  },
  {
    id: 2,
    user: "Lab Services",
    avatar: "https://ui-avatars.com/api/?name=Lab+Services&background=random",
    action: "Uploaded thyroid profile report to your account",
    time: "1 hour ago",
    type: "lab",
    icon: <IconFileText className="h-4 w-4" />,
  },
  {
    id: 3,
    user: "Dr. Sarah Jenkins",
    avatar: "https://i.pravatar.cc/150?u=doctor-jenkins-activity",
    action: "Sent follow-up instructions through secure messaging",
    time: "3 hours ago",
    type: "message",
    icon: <IconMessageCircle className="h-4 w-4" />,
  },
  {
    id: 4,
    user: "You",
    avatar: "https://i.pravatar.cc/150?u=patient-activity-self",
    action: "Updated emergency contact details in profile settings",
    time: "Yesterday, 04:12 PM",
    type: "profile",
    icon: <IconUser className="h-4 w-4" />,
  },
  {
    id: 5,
    user: "System",
    avatar: "https://ui-avatars.com/api/?name=System&background=random",
    action: "Weekly health summary was generated and archived",
    time: "Yesterday, 08:00 AM",
    type: "system",
    icon: <IconActivity className="h-4 w-4" />,
  },
]

export default function Activity() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Activity</h2>
          <p className="text-muted-foreground">
            A timeline of your patient portal actions and care updates.
          </p>
        </div>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Recent Activity Log</CardTitle>
          <CardDescription>Track appointments, reports, and messages in one place.</CardDescription>
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
