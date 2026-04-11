import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function Settings() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your hospital system preferences and settings.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <aside className="w-full md:w-64 flex-shrink-0">
          <nav className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-1 overflow-x-auto">
            <Button variant="secondary" className="justify-start">General</Button>
            <Button variant="ghost" className="justify-start">Security</Button>
            <Button variant="ghost" className="justify-start">Notifications</Button>
            <Button variant="ghost" className="justify-start">Billing</Button>
            <Button variant="ghost" className="justify-start">Integrations</Button>
          </nav>
        </aside>
        
        <div className="flex-1 space-y-6">
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
                <Input id="hospitalName" defaultValue="General Regional Hospital" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Contact Email</Label>
                <Input id="contactEmail" type="email" defaultValue="admin@generalregional.org" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">System Timezone</Label>
                <Select defaultValue="utc">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="utc">Coordinated Universal Time (UTC)</SelectItem>
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
                  <ToggleGroup type="single" defaultValue="system" className="justify-start">
                    <ToggleGroupItem value="light" aria-label="Toggle light theme">
                      Light
                    </ToggleGroupItem>
                    <ToggleGroupItem value="dark" aria-label="Toggle dark theme">
                      Dark
                    </ToggleGroupItem>
                    <ToggleGroupItem value="system" aria-label="Toggle system theme">
                      System
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Reset to default</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}