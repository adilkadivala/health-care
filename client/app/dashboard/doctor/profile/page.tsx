"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { IconStethoscope, IconUser } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import { api } from "@/lib/http"

export default function Profile() {
  const [fullName, setFullName] = useState("Dr. Sarah Jenkins")
  const [email, setEmail] = useState("sarah.jenkins@hospital.org")
  const [phone, setPhone] = useState("+1 800 555 0146")
  const [bio, setBio] = useState(
    "Focused on preventive cardiology, evidence-based treatment plans, and long term patient follow up.",
  )
  const [specialization, setSpecialization] = useState("cardiology")
  const [slotDuration, setSlotDuration] = useState("30")
  const [timezone, setTimezone] = useState("est")

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.get<{
          user: { firstName: string; lastName: string; email: string; phone?: string | null }
          doctor: { specialization?: string | null; preferences?: unknown }
        }>("/doctor/me")
        setFullName(`Dr. ${data.user.firstName} ${data.user.lastName}`.trim())
        setEmail(data.user.email)
        setPhone(data.user.phone ?? "")
        if (data.doctor.specialization) {
          const normalized = data.doctor.specialization.toLowerCase().replaceAll(" ", "-")
          if (["cardiology", "internal-medicine", "neurology"].includes(normalized)) {
            setSpecialization(normalized)
          }
        }
      } catch {
        // Keep default UI values if request fails.
      }
    }
    void load()
  }, [])

  const handleSavePersonalDetails = async () => {
    const [firstName, ...rest] = fullName.trim().replace(/^Dr\.\s*/i, "").split(" ")
    const lastName = rest.join(" ") || "-"
    try {
      const data = await api.patch<{
        user: { firstName: string; lastName: string; email: string; phone?: string | null }
      }>("/doctor/me", { firstName, lastName, phone })
      setFullName(`Dr. ${data.user.firstName} ${data.user.lastName}`.trim())
      setPhone(data.user.phone ?? "")
    } catch (error) {
      console.error("Failed to update doctor personal details", error)
    }
  }

  const handleSaveClinicalPreferences = async () => {
    try {
      await api.patch("/doctor/me", {
        specialization,
        preferences: {
          bio,
          slotDuration,
          timezone,
        },
      })
    } catch (error) {
      console.error("Failed to update doctor clinical preferences", error)
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Doctor Profile</h2>
          <p className="text-muted-foreground">
            Maintain personal, clinical, and public profile information.
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-7">
        <Card className="lg:col-span-2">
          <CardHeader className="items-center text-center">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://i.pravatar.cc/150?u=doctor-profile-01" alt="Doctor profile" />
              <AvatarFallback>DR</AvatarFallback>
            </Avatar>
            <CardTitle className="mt-2">Dr. Sarah Jenkins</CardTitle>
            <CardDescription>Consultant Cardiologist</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Experience</span>
              <span className="font-medium">12 years</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">License</span>
              <span className="font-medium">MED-492018</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Consulting Hours</span>
              <span className="font-medium">09:00 AM - 05:00 PM</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge variant="outline">Cardiology</Badge>
              <Badge variant="outline">Critical Care</Badge>
              <Badge variant="outline">Teleconsultation</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <IconUser className="mr-2 h-4 w-4" />
              Update Picture
            </Button>
          </CardFooter>
        </Card>

        <div className="space-y-4 lg:col-span-5">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Edit basic account and contact details.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <Input id="full-name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} readOnly />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="language">Preferred Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="bio">Short Bio</Label>
                <Textarea
                  id="bio"
                  className="h-24"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSavePersonalDetails}>Save Personal Details</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Clinical Preferences</CardTitle>
              <CardDescription>
                Keep scheduling and documentation defaults consistent.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="grid gap-2">
                  <Label htmlFor="specialty">Primary Specialty</Label>
                  <Select value={specialization} onValueChange={setSpecialization}>
                    <SelectTrigger id="specialty">
                      <SelectValue placeholder="Select specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cardiology">Cardiology</SelectItem>
                      <SelectItem value="internal-medicine">Internal Medicine</SelectItem>
                      <SelectItem value="neurology">Neurology</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="duration">Default Slot Duration</Label>
                  <Select value={slotDuration} onValueChange={setSlotDuration}>
                    <SelectTrigger id="duration">
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
                <div className="grid gap-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select value={timezone} onValueChange={setTimezone}>
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pst">Pacific Time</SelectItem>
                      <SelectItem value="est">Eastern Time</SelectItem>
                      <SelectItem value="utc">UTC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg border p-3 text-sm text-muted-foreground">
                <IconStethoscope className="h-4 w-4" />
                Profile data is visible to staff and patients where access is allowed.
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={handleSaveClinicalPreferences}>Save Clinical Preferences</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
