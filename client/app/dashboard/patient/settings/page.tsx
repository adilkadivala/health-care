"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useEffect } from "react"
import { api } from "@/lib/http"

export default function Settings() {
  useEffect(() => {
    void api.get("/patient/me").catch(() => undefined)
  }, [])

  const handleSavePreferences = async () => {
    const phone = (document.getElementById("phone") as HTMLInputElement | null)?.value ?? ""
    try {
      await api.patch("/patient/me", { phone })
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
            Manage notifications, privacy controls, and account preferences.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-6 md:flex-row">
        <aside className="w-full shrink-0 md:w-64">
          <nav className="flex space-x-2 overflow-x-auto md:flex-col md:space-x-0 md:space-y-1">
            <Button variant={activeTab === "general" ? "secondary" : "ghost"} className="justify-start" onClick={() => setActiveTab("general")}>
              General
            </Button>
            <Button variant={activeTab === "notifications" ? "secondary" : "ghost"} className="justify-start" onClick={() => setActiveTab("notifications")}>
              Notifications
            </Button>
            <Button variant={activeTab === "privacy" ? "secondary" : "ghost"} className="justify-start" onClick={() => setActiveTab("privacy")}>
              Privacy
            </Button>
            <Button variant={activeTab === "security" ? "secondary" : "ghost"} className="justify-start" onClick={() => setActiveTab("security")}>
              Security
            </Button>
          </nav>
        </aside>

        <div className="flex-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Preferences</CardTitle>
              <CardDescription>
                Update basic account details used for communication.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="aarav.sharma@email.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+1 800 222 0192" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSavePreferences}>Save Preferences</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Control how and when you receive care updates.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Appointment reminders</p>
                  <p className="text-sm text-muted-foreground">Alerts 24 hours before your visit.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Lab report updates</p>
                  <p className="text-sm text-muted-foreground">Notify when new reports are available.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Doctor messages</p>
                  <p className="text-sm text-muted-foreground">Receive instant alerts for secure messages.</p>
                </div>
                <Switch />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={handleSavePreferences}>Update Notifications</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Theme Preference</CardTitle>
              <CardDescription>Choose how the patient portal should appear.</CardDescription>
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
