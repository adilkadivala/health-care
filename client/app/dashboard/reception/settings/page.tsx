"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { api } from "@/lib/http"
import { useEffect, useState } from "react"

export default function Setting() {
  const [deskName, setDeskName] = useState("Main Reception Desk")
  const [ticketPrefix, setTicketPrefix] = useState("RQ")

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.get<{ settings: Record<string, unknown> }>("/reception/settings")
        setDeskName(String(data.settings.deskName ?? "Main Reception Desk"))
        setTicketPrefix(String(data.settings.ticketPrefix ?? "RQ"))
      } catch {
        // keep defaults
      }
    }
    void load()
  }, [])

  const handleSaveSettings = async () => {
    try {
      await api.patch("/reception/settings", {
        settings: { deskName, ticketPrefix },
      })
    } catch {
      // keep UI unchanged; silent failure
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Configure front-desk workflow and alert preferences.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Desk Preferences</CardTitle>
          <CardDescription>Set queue behavior and display defaults.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="desk-name">Desk Display Name</Label>
            <Input id="desk-name" defaultValue="Main Reception Desk" value={deskName} onChange={(e) => setDeskName(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="ticket-prefix">Queue Ticket Prefix</Label>
            <Input id="ticket-prefix" defaultValue="RQ" value={ticketPrefix} onChange={(e) => setTicketPrefix(e.target.value)} />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveSettings}>Save Preferences</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Alert Settings</CardTitle>
          <CardDescription>Choose when front desk staff should be notified.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">High-priority walk-ins</p>
              <p className="text-sm text-muted-foreground">Notify immediately on escalation.</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Payment pending reminders</p>
              <p className="text-sm text-muted-foreground">Alert when invoices remain unpaid.</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Doctor queue delay alerts</p>
              <p className="text-sm text-muted-foreground">Warn if patient wait exceeds threshold.</p>
            </div>
            <Switch />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" onClick={handleSaveSettings}>Update Alerts</Button>
        </CardFooter>
      </Card>
    </div>
  )
}