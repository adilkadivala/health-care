import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  IconActivity,
  IconPackageImport,
  IconPill,
  IconReportMedical,
  IconRotateClockwise2,
} from "@tabler/icons-react"

const activities = [
  {
    id: 1,
    user: "Pharm. James Wilson",
    avatar: "https://i.pravatar.cc/150?u=pharm-james-activity",
    action: "Dispensed Atorvastatin 20mg for patient Aarav Sharma",
    time: "5 minutes ago",
    type: "dispense",
    icon: <IconPill className="h-4 w-4" />,
  },
  {
    id: 2,
    user: "Inventory System",
    avatar: "https://ui-avatars.com/api/?name=Inventory+System&background=random",
    action: "Triggered low stock alert for Insulin Glargine",
    time: "19 minutes ago",
    type: "inventory",
    icon: <IconReportMedical className="h-4 w-4" />,
  },
  {
    id: 3,
    user: "Pharm. Emily Chen",
    avatar: "https://i.pravatar.cc/150?u=pharm-emily-activity",
    action: "Processed supplier delivery for purchase order PO-2112",
    time: "1 hour ago",
    type: "restock",
    icon: <IconPackageImport className="h-4 w-4" />,
  },
  {
    id: 4,
    user: "Pharm. James Wilson",
    avatar: "https://i.pravatar.cc/150?u=pharm-james-activity-2",
    action: "Recorded return for Metformin 500mg",
    time: "2 hours ago",
    type: "return",
    icon: <IconRotateClockwise2 className="h-4 w-4" />,
  },
  {
    id: 5,
    user: "System",
    avatar: "https://ui-avatars.com/api/?name=System&background=random",
    action: "Completed daily reconciliation and batch report generation",
    time: "Yesterday, 06:30 PM",
    type: "system",
    icon: <IconActivity className="h-4 w-4" />,
  },
]

export default function Activity() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Pharmacy Activity</h2>
          <p className="text-muted-foreground">
            Live feed of dispensing, stock updates, and workflow events.
          </p>
        </div>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Recent Activity Log</CardTitle>
          <CardDescription>
            Complete timeline of pharmacy operations and system alerts.
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
