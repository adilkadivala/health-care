"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import {
  IconActivity,
  IconCalendarEvent,
  IconFileText,
  IconMessageCircle,
  IconStethoscope,
} from "@tabler/icons-react"
import { api } from "@/lib/http"

type DoctorActivityResponse = {
  items: Array<{ id: string; title: string; time: string; lane: string; status: string }>
}

export default function Activity() {
  const [activities, setActivities] = useState<DoctorActivityResponse["items"]>([])

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.get<DoctorActivityResponse>("/doctor/activity")
        setActivities(data.items)
      } catch {
        setActivities([])
      }
    }
    void load()
  }, [])

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
                  <AvatarImage src={`https://ui-avatars.com/api/?name=${encodeURIComponent(activity.lane)}`} alt={activity.lane} />
                  <AvatarFallback>{activity.lane.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm leading-none">
                    <span className="font-semibold text-primary">{activity.lane}</span> {activity.title}
                  </p>
                  <p className="text-sm text-muted-foreground">{new Date(activity.time).toLocaleString()}</p>
                </div>
                <div className="ml-auto">
                  <Badge variant="outline" className="flex items-center gap-1">
                    {activity.lane === "Lab" ? <IconFileText className="h-4 w-4" /> : activity.lane === "Appointment" ? <IconCalendarEvent className="h-4 w-4" /> : activity.lane === "Clinical" ? <IconStethoscope className="h-4 w-4" /> : activity.lane === "Pharmacy" ? <IconMessageCircle className="h-4 w-4" /> : <IconActivity className="h-4 w-4" />}
                    <span className="capitalize">{activity.status.toLowerCase()}</span>
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
