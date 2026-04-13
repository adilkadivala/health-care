"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function Settings() {
  const [activeTab, setActiveTab] = useState("general")

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Configure pharmacy workflow defaults, alerts, and display preferences.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-6 md:flex-row">
        <aside className="w-full shrink-0 md:w-64">
          <nav className="flex space-x-2 overflow-x-auto md:flex-col md:space-x-0 md:space-y-1">
            <Button variant={activeTab === "general" ? "secondary" : "ghost"} className="justify-start" onClick={() => setActiveTab("general")}>
              General
            </Button>
            <Button variant={activeTab === "dispensing" ? "secondary" : "ghost"} className="justify-start" onClick={() => setActiveTab("dispensing")}>
              Dispensing
            </Button>
            <Button variant={activeTab === "alerts" ? "secondary" : "ghost"} className="justify-start" onClick={() => setActiveTab("alerts")}>
              Alerts
            </Button>
            <Button variant={activeTab === "security" ? "secondary" : "ghost"} className="justify-start" onClick={() => setActiveTab("security")}>
              Security
            </Button>
          </nav>
        </aside>

        <div className="flex-1 space-y-6">
          {activeTab === "general" && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Pharmacy Information</CardTitle>
                  <CardDescription>
                    Update the core details assigned to this branch.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="branch">Branch Name</Label>
                    <Input id="branch" defaultValue="Main Floor Pharmacy" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contact">Internal Extension</Label>
                    <Input id="contact" defaultValue="Ext 4099" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Details</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Theme Preference</CardTitle>
                  <CardDescription>Set visual preference for this dashboard session.</CardDescription>
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
            </>
          )}

          {activeTab === "dispensing" && (
            <Card>
              <CardHeader>
                <CardTitle>Dispensing Defaults</CardTitle>
                <CardDescription>
                  Set standard behavior for queue processing and label generation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="queue-sort">Queue Sort Order</Label>
                    <Select defaultValue="priority">
                      <SelectTrigger id="queue-sort">
                        <SelectValue placeholder="Select sorting" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="priority">Priority First</SelectItem>
                        <SelectItem value="time">Oldest First</SelectItem>
                        <SelectItem value="patient">Patient Name</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="label-format">Label Format</Label>
                    <Select defaultValue="standard">
                      <SelectTrigger id="label-format">
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="compact">Compact</SelectItem>
                        <SelectItem value="barcode">Barcode Focused</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="signature">Shift Signature</Label>
                  <Input id="signature" defaultValue="Pharm. James Wilson | Evening Shift" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Dispensing Defaults</Button>
              </CardFooter>
            </Card>
          )}

          {activeTab === "alerts" && (
            <Card>
              <CardHeader>
                <CardTitle>Alert Preferences</CardTitle>
                <CardDescription>Choose which critical events should notify your team.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Low stock alerts</p>
                    <p className="text-sm text-muted-foreground">Notify when stock drops below reorder levels.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Near expiry batches</p>
                    <p className="text-sm text-muted-foreground">Warn 30 days before medicine expiry.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Urgent prescription queue</p>
                    <p className="text-sm text-muted-foreground">Immediate alerts for urgent doctor orders.</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Update Alert Settings</Button>
              </CardFooter>
            </Card>
          )}

          {activeTab === "security" && (
            <Card>
              <CardHeader>
                <CardTitle>Security & Compliance</CardTitle>
                <CardDescription>Audit controls for dispensing regulated substances.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Two-Factor Override for Controls</p>
                    <p className="text-sm text-muted-foreground">Require manager PIN for Schedule II drugs.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Auto-lock Terminal</p>
                    <p className="text-sm text-muted-foreground">Lock pharmacy sessions after 5 mins of inactivity.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
