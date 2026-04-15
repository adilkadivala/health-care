"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useEffect } from "react"
import { api } from "@/lib/http"

export default function Settings() {
  useEffect(() => {
    void api.get("/doctor/me").catch(() => undefined)
  }, [])

  const handleSaveSettings = async () => {
    const signature = (document.getElementById("signature") as HTMLInputElement | null)?.value ?? ""
    try {
      await api.patch("/doctor/me", { preferences: { signature } })
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
            Configure schedule, notifications, and workspace preferences.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-6 md:flex-row">
        <aside className="w-full shrink-0 md:w-64">
          <nav className="flex space-x-2 overflow-x-auto md:flex-col md:space-x-0 md:space-y-1">
            <Button variant="secondary" className="justify-start">
              General
            </Button>
            <Button variant="ghost" className="justify-start">
              Availability
            </Button>
            <Button variant="ghost" className="justify-start">
              Notifications
            </Button>
            <Button variant="ghost" className="justify-start">
              Privacy
            </Button>
          </nav>
        </aside>

        <div className="flex-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Consultation Defaults</CardTitle>
              <CardDescription>
                Set default values for new appointments and notes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="slot-duration">Slot Duration</Label>
                  <Select defaultValue="30">
                    <SelectTrigger id="slot-duration">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="20">20 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="45">45 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="buffer-time">Buffer Between Visits</Label>
                  <Select defaultValue="10">
                    <SelectTrigger id="buffer-time">
                      <SelectValue placeholder="Select buffer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 minutes</SelectItem>
                      <SelectItem value="10">10 minutes</SelectItem>
                      <SelectItem value="15">15 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signature">Default Signature</Label>
                <Input
                  id="signature"
                  defaultValue="Dr. Sarah Jenkins, MD | Consultant Cardiologist"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveSettings}>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Choose how you receive updates from lab, schedule, and patient messaging.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Lab report alerts</p>
                  <p className="text-sm text-muted-foreground">Notify when high priority reports are ready.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Appointment reminders</p>
                  <p className="text-sm text-muted-foreground">Show alerts 15 minutes before each slot.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Patient messages</p>
                  <p className="text-sm text-muted-foreground">Notify on every new secure conversation.</p>
                </div>
                <Switch />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={handleSaveSettings}>Update Notifications</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Theme Preference</CardTitle>
              <CardDescription>Set the display mode for this dashboard session.</CardDescription>
            </CardHeader>
            <CardContent>
              <ToggleGroup type="single" defaultValue="system" className="justify-start">
                <ToggleGroupItem value="light" aria-label="Light mode">
                  Light
                </ToggleGroupItem>
                <ToggleGroupItem value="dark" aria-label="Dark mode">
                  Dark
                </ToggleGroupItem>
                <ToggleGroupItem value="system" aria-label="System mode">
                  System
                </ToggleGroupItem>
              </ToggleGroup>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
