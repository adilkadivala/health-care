"use client"

import React, { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export default function ReceptionSettingsPage() {
  const [activeTab, setActiveTab] = useState("general")

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your reception desk preferences and settings.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-6 md:flex-row">
        <aside className="w-full shrink-0 md:w-64">
          <nav className="flex space-x-2 overflow-x-auto md:flex-col md:space-y-1 md:space-x-0">
            <Button variant={activeTab === "general" ? "secondary" : "ghost"} className="justify-start" onClick={() => setActiveTab("general")}>
              General
            </Button>
            <Button variant={activeTab === "flow" ? "secondary" : "ghost"} className="justify-start" onClick={() => setActiveTab("flow")}>
              Check-in Flow
            </Button>
            <Button variant={activeTab === "notifications" ? "secondary" : "ghost"} className="justify-start" onClick={() => setActiveTab("notifications")}>
              Notifications
            </Button>
            <Button variant={activeTab === "devices" ? "secondary" : "ghost"} className="justify-start" onClick={() => setActiveTab("devices")}>
              Devices
            </Button>
          </nav>
        </aside>

        <div className="flex-1 space-y-6">
          {activeTab === "general" && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Desk Information</CardTitle>
                  <CardDescription>
                    Update the primary details of this front-desk terminal.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="terminalName">Terminal Name</Label>
                    <Input
                      id="terminalName"
                      defaultValue="Main Entrance Desk - 01"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="assignedRole">Assigned Role Group</Label>
                    <Select defaultValue="receptionists">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="receptionists">
                          Receptionists
                        </SelectItem>
                        <SelectItem value="triage">
                          Triage Nurses
                        </SelectItem>
                        <SelectItem value="billing">
                          Billing Specialists
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="logoutTimer">Auto-logout Timer (minutes)</Label>
                    <Input
                      id="logoutTimer"
                      type="number"
                      defaultValue="15"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Appearance & Theme</CardTitle>
                  <CardDescription>
                    Customize the appearance of the reception dashboard.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label>Theme Preference</Label>
                    <ToggleGroup
                      type="single"
                      defaultValue="system"
                      className="justify-start"
                    >
                      <ToggleGroupItem
                        value="light"
                        aria-label="Toggle light theme"
                      >
                        Light
                      </ToggleGroupItem>
                      <ToggleGroupItem value="dark" aria-label="Toggle dark theme">
                        Dark
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="system"
                        aria-label="Toggle system theme"
                      >
                        System
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Reset to default</Button>
                </CardFooter>
              </Card>
            </>
          )}

          {activeTab === "flow" && (
            <Card>
              <CardHeader>
                <CardTitle>Patient Check-in Flow</CardTitle>
                <CardDescription>Configure rules and automation during patient admission.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Require ID Scan</Label>
                    <p className="text-sm text-muted-foreground">Mandatory ID digitisation for new walk-ins.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Digital Consent Forms</Label>
                    <p className="text-sm text-muted-foreground">Automatically trigger e-signature upon check-in.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Update Flow Rules</Button>
              </CardFooter>
            </Card>
          )}

          {activeTab === "notifications" && (
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Manage daily alerts and notifications for the desk.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Doctor Messages</Label>
                    <p className="text-sm text-muted-foreground">Alerts for internal staff communication.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Queue Overcrowding</Label>
                    <p className="text-sm text-muted-foreground">Alert when wait times exceed 45 minutes.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "devices" && (
            <Card>
              <CardHeader>
                <CardTitle>Connected Devices</CardTitle>
                <CardDescription>Manage terminals, scanners, and local printers.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg bg-card text-sm">
                  <div>
                    <p className="font-semibold">POS Terminal - MainDesk01</p>
                    <p className="text-muted-foreground text-xs mt-1">Status: Online</p>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg bg-card text-sm">
                  <div>
                    <p className="font-semibold">ID Document Scanner</p>
                    <p className="text-muted-foreground text-xs mt-1">Status: Online</p>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg bg-card text-sm">
                  <div>
                    <p className="font-semibold">Thermal Receipt Printer</p>
                    <p className="text-muted-foreground text-xs mt-1">Status: Offline, Please check connection.</p>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
