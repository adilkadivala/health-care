"use client"

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IconActivity, IconLogin, IconSettings, IconUserPlus } from "@tabler/icons-react"
import { api } from "@/lib/http"

type AdminActivityResponse = {
  items: Array<{ id: string; lane: string; title: string; status: string; time: string }>
}

export default function Activity() {
  const [activities, setActivities] = useState<AdminActivityResponse["items"]>([])

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.get<AdminActivityResponse>("/admin/activity")
        setActivities(data.items)
      } catch {
        setActivities([])
      }
    }
    void load()
  }, [])

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
                  <AvatarImage src={`https://ui-avatars.com/api/?name=${encodeURIComponent(activity.lane)}`} alt="Avatar" />
                  <AvatarFallback>{activity.lane.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    <span className="font-semibold text-primary">{activity.lane}</span> {activity.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(activity.time).toLocaleString()}
                  </p>
                </div>
                <div className="ml-auto font-medium">
                  <Badge variant="outline" className="flex items-center gap-1">
                     {activity.lane === "Users" ? <IconUserPlus className="w-4 h-4" /> : activity.lane === "Appointments" ? <IconLogin className="w-4 h-4" /> : activity.lane === "Billing" ? <IconSettings className="w-4 h-4" /> : <IconActivity className="w-4 h-4" />}
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