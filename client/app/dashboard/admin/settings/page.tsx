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
import { Separator } from "@/components/ui/separator"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Switch } from "@/components/ui/switch"

export default function Settings() {
  const [activeTab, setActiveTab] = useState("general")

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your hospital system preferences and settings.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-6 md:flex-row">
        <aside className="w-full shrink-0 md:w-64">
          <nav className="flex space-x-2 overflow-x-auto md:flex-col md:space-y-1 md:space-x-0">
            <Button variant={activeTab === "general" ? "secondary" : "ghost"} className="justify-start" onClick={() => setActiveTab("general")}>
              General
            </Button>
            <Button variant={activeTab === "security" ? "secondary" : "ghost"} className="justify-start" onClick={() => setActiveTab("security")}>
              Security
            </Button>
            <Button variant={activeTab === "notifications" ? "secondary" : "ghost"} className="justify-start" onClick={() => setActiveTab("notifications")}>
              Notifications
            </Button>
            <Button variant={activeTab === "billing" ? "secondary" : "ghost"} className="justify-start" onClick={() => setActiveTab("billing")}>
              Billing
            </Button>
            <Button variant={activeTab === "integrations" ? "secondary" : "ghost"} className="justify-start" onClick={() => setActiveTab("integrations")}>
              Integrations
            </Button>
          </nav>
        </aside>

        <div className="flex-1 space-y-6">
          {activeTab === "general" && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Hospital Information</CardTitle>
                  <CardDescription>
                    Update the primary details of the hospital facility.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="hospitalName">Hospital Name</Label>
                    <Input
                      id="hospitalName"
                      defaultValue="General Regional Hospital"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Contact Email</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      defaultValue="admin@generalregional.org"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">System Timezone</Label>
                    <Select defaultValue="utc">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pst">
                          Pacific Standard Time (PST)
                        </SelectItem>
                        <SelectItem value="est">
                          Eastern Standard Time (EST)
                        </SelectItem>
                        <SelectItem value="utc">
                          Coordinated Universal Time (UTC)
                        </SelectItem>
                      </SelectContent>
                    </Select>
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
                    Customize the appearance of the administrative dashboard.
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

          {activeTab === "security" && (
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your hospital security policies.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Require 2FA for all administrative accounts.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Session Timeout</Label>
                    <p className="text-sm text-muted-foreground">Automatically log out inactive users.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Security Settings</Button>
              </CardFooter>
            </Card>
          )}

          {activeTab === "notifications" && (
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Configure how you receive system alerts.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Email Alerts</Label>
                    <p className="text-sm text-muted-foreground">Receive daily summary reports.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">System Updates</Label>
                    <p className="text-sm text-muted-foreground">Notices about maintenance and updates.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Update Preferences</Button>
              </CardFooter>
            </Card>
          )}

          {activeTab === "billing" && (
            <Card>
              <CardHeader>
                <CardTitle>Billing Plans</CardTitle>
                <CardDescription>Manage your hospital billing system integration.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted rounded-lg border">
                  <p className="font-medium text-lg">Hospital Enterprise Plan</p>
                  <p className="text-sm text-muted-foreground">Next billing date: 01 May 2026</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Manage Subscription</Button>
              </CardFooter>
            </Card>
          )}

          {activeTab === "integrations" && (
            <Card>
              <CardHeader>
                <CardTitle>Provider Integrations</CardTitle>
                <CardDescription>Connect with external labs and pharmacies.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold">LabCorp Connect</h4>
                    <p className="text-sm text-muted-foreground">Direct lab result synchronization.</p>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold">Surescripts e-Prescribing</h4>
                    <p className="text-sm text-muted-foreground">Pharmacy routing and prescription network.</p>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
