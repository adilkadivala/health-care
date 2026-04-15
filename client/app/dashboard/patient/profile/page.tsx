"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useState } from "react"
import { api } from "@/lib/http"

export default function Profile() {
  const [fullName, setFullName] = useState("Aarav Sharma")
  const [dateOfBirth, setDateOfBirth] = useState("1992-08-14")
  const [email, setEmail] = useState("aarav.sharma@email.com")
  const [phone, setPhone] = useState("+1 800 222 0192")
  const [address, setAddress] = useState("1540 Greenwood Ave, Austin, TX 78701")
  const [allergies, setAllergies] = useState("Penicillin")
  const [conditions, setConditions] = useState("Hypertension")

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.get<{
          user: { firstName: string; lastName: string; email: string; phone?: string | null }
          patient: { dateOfBirth: string; address?: string | null; allergies?: string[]; medicalHistory?: string | null }
        }>("/patient/me")
        setFullName(`${data.user.firstName} ${data.user.lastName}`.trim())
        setEmail(data.user.email)
        setPhone(data.user.phone ?? "")
        setDateOfBirth(data.patient.dateOfBirth.slice(0, 10))
        setAddress(data.patient.address ?? "")
        setAllergies((data.patient.allergies ?? []).join(", "))
        setConditions(data.patient.medicalHistory ?? "")
      } catch {
        // Keep defaults.
      }
    }
    void load()
  }, [])

  const handleSavePersonal = async () => {
    const [firstName, ...rest] = fullName.trim().split(" ")
    const lastName = rest.join(" ")
    if (!firstName || !lastName) return
    try {
      const data = await api.patch<{
        user: { firstName: string; lastName: string; email: string; phone?: string | null }
      }>("/patient/me", { firstName, lastName, phone, dateOfBirth, address })
      setFullName(`${data.user.firstName} ${data.user.lastName}`.trim())
      setEmail(data.user.email)
      setPhone(data.user.phone ?? "")
    } catch {
      // keep UI unchanged; silent failure
    }
  }

  const handleSaveMedical = async () => {
    try {
      await api.patch("/patient/me", {
        allergies: allergies.split(",").map((item) => item.trim()).filter(Boolean),
        medicalHistory: conditions,
      })
    } catch {
      // keep UI unchanged; silent failure
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Patient Profile</h2>
          <p className="text-muted-foreground">
            Keep personal, medical, and emergency details up to date.
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-7">
        <Card className="lg:col-span-2">
          <CardHeader className="items-center text-center">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://i.pravatar.cc/150?u=patient-profile-1" alt="Patient profile" />
              <AvatarFallback>PT</AvatarFallback>
            </Avatar>
            <CardTitle className="mt-2">Aarav Sharma</CardTitle>
            <CardDescription>Patient ID: PT-2026-0921</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Blood Group</span>
              <span className="font-medium">O+</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Primary Physician</span>
              <span className="font-medium">Dr. Sarah Jenkins</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Insurance</span>
              <span className="font-medium">Active</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge variant="outline">Cardiology</Badge>
              <Badge variant="outline">Annual Checkup</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Update Photo
            </Button>
          </CardFooter>
        </Card>

        <div className="space-y-4 lg:col-span-5">
          <Card>
            <CardHeader>
              <CardTitle>Personal Details</CardTitle>
              <CardDescription>Basic profile details used across appointments and records.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <Input id="full-name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} readOnly />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  className="h-20"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSavePersonal}>Save Personal Details</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Medical & Emergency Info</CardTitle>
              <CardDescription>
                Share allergies and emergency contact details with your care team.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="allergies">Known Allergies</Label>
                  <Input id="allergies" value={allergies} onChange={(e) => setAllergies(e.target.value)} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="conditions">Chronic Conditions</Label>
                  <Input id="conditions" value={conditions} onChange={(e) => setConditions(e.target.value)} />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="emergency-name">Emergency Contact Name</Label>
                  <Input id="emergency-name" defaultValue="Neha Sharma" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="emergency-phone">Emergency Contact Phone</Label>
                  <Input id="emergency-phone" defaultValue="+1 800 222 1192" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="relationship">Relationship</Label>
                <Select defaultValue="spouse">
                  <SelectTrigger id="relationship">
                    <SelectValue placeholder="Select relationship" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spouse">Spouse</SelectItem>
                    <SelectItem value="parent">Parent</SelectItem>
                    <SelectItem value="sibling">Sibling</SelectItem>
                    <SelectItem value="friend">Friend</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={handleSaveMedical}>Save Medical Info</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
