"use client"

import { useEffect, useMemo, useState } from "react"
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { api } from "@/lib/http"

type AdminOverviewResponse = {
  metrics: {
    totalPatients: number
    totalAppointments: number
    totalDoctors: number
    criticalLabs: number
  }
}

export function SectionCards() {
  const [metrics, setMetrics] = useState<AdminOverviewResponse["metrics"] | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.get<AdminOverviewResponse>("/admin/overview")
        setMetrics(data.metrics)
      } catch {
        setMetrics(null)
      }
    }
    void load()
  }, [])

  const values = useMemo(
    () => ({
      totalPatients: metrics?.totalPatients ?? 0,
      totalAppointments: metrics?.totalAppointments ?? 0,
      totalDoctors: metrics?.totalDoctors ?? 0,
      criticalLabs: metrics?.criticalLabs ?? 0,
    }),
    [metrics],
  )

  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Patients</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {values.totalPatients.toLocaleString()}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Total registered patients
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>New Appointments</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {values.totalAppointments.toLocaleString()}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              -12%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Down 12% this period <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Slight drop in daily bookings
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Doctors</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {values.totalDoctors.toLocaleString()}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +5.2%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Optimal capacity levels <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Registered clinical staff</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Critical Labs</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {values.criticalLabs.toLocaleString()}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              Active
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Requires immediate review <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Critical report queue size</div>
        </CardFooter>
      </Card>
    </div>
  )
}
