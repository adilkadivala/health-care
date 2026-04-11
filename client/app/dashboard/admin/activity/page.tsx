import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IconActivity, IconLogin, IconSettings, IconUserPlus } from "@tabler/icons-react"

const activities = [
  {
    id: 1,
    user: "James Wilson",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    action: "Updated system settings",
    time: "2 minutes ago",
    type: "system",
    icon: <IconSettings className="w-4 h-4" />
  },
  {
    id: 2,
    user: "System",
    avatar: "https://ui-avatars.com/api/?name=System&background=random",
    action: "Daily backup completed successfully",
    time: "1 hour ago",
    type: "automated",
    icon: <IconActivity className="w-4 h-4" />
  },
  {
    id: 3,
    user: "Dr. Sarah Jenkins",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    action: "Logged into the portal",
    time: "3 hours ago",
    type: "auth",
    icon: <IconLogin className="w-4 h-4" />
  },
  {
    id: 4,
    user: "Admin",
    avatar: "https://ui-avatars.com/api/?name=Admin&background=random",
    action: "Added new staff member 'Emily Chen'",
    time: "Yesterday, 14:30",
    type: "user",
    icon: <IconUserPlus className="w-4 h-4" />
  },
  {
    id: 5,
    user: "Admin",
    avatar: "https://ui-avatars.com/api/?name=Admin&background=random",
    action: "Added new staff member 'Michael Chang'",
    time: "Yesterday, 14:25",
    type: "user",
    icon: <IconUserPlus className="w-4 h-4" />
  }
]

export default function Activity() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">System Activity</h2>
          <p className="text-muted-foreground">
            Monitor recent actions and events across the healthcare system.
          </p>
        </div>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Recent Activity Log</CardTitle>
          <CardDescription>
            A detailed record of the latest actions performed by users and background services.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={activity.avatar} alt="Avatar" />
                  <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    <span className="font-semibold text-primary">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
                <div className="ml-auto font-medium">
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