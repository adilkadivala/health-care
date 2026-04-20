"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { IconCheck, IconClock, IconFileText } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import { api } from "@/lib/http"
import { toast } from "sonner"

const checklist = [
  { id: 1, item: "Basic profile information", status: "Completed" },
  { id: 2, item: "Insurance card upload", status: "Pending" },
  { id: 3, item: "Emergency contact details", status: "Completed" },
  { id: 4, item: "Medical history declaration", status: "In Progress" },
]

export default function Registration() {
  const [insuranceProvider, setInsuranceProvider] = useState("aetna")
  const [policyNumber, setPolicyNumber] = useState("ATN-4492-88291")
  const [primaryConcern, setPrimaryConcern] = useState("")
  const [medicalHistory, setMedicalHistory] = useState("")

  useEffect(() => {
    void api.get("/patient/registration").catch(() => undefined)
  }, [])

  const handleSubmitRegistration = async () => {
    try {
      await api.post("/patient/registration", {
        insuranceProvider,
        policyNumber,
        primaryConcern,
        medicalHistory,
      })
      toast.success("Registration submitted successfully.")
    } catch {
      toast.error("Failed to submit registration.")
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Registration</h2>
          <p className="text-muted-foreground">
            Complete your onboarding details for faster appointments and safer care delivery.
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-7">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Registration Progress</CardTitle>
            <CardDescription>Checklist of required onboarding details.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {checklist.map((entry) => (
              <div key={entry.id} className="flex items-center justify-between rounded-lg border p-3">
                <p className="text-sm">{entry.item}</p>
                <Badge
                  variant={entry.status === "Completed" ? "outline" : "secondary"}
                  className={
                    entry.status === "Completed"
                      ? "bg-green-500/15 text-green-700 border-green-200 hover:bg-green-500/20 dark:text-green-400 dark:border-green-900"
                      : entry.status === "In Progress"
                        ? "bg-blue-500/15 text-blue-700 border-blue-200 hover:bg-blue-500/20 dark:text-blue-400 dark:border-blue-900"
                        : "bg-orange-500/15 text-orange-700 border-orange-200 hover:bg-orange-500/20 dark:text-orange-400 dark:border-orange-900"
                  }
                >
                  {entry.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Patient Intake Form</CardTitle>
            <CardDescription>Submit or update details required by the care team.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="insurance-provider">Insurance Provider</Label>
                <Select defaultValue="aetna" value={insuranceProvider} onValueChange={setInsuranceProvider}>
                  <SelectTrigger id="insurance-provider">
                    <SelectValue placeholder="Select provider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aetna">Aetna</SelectItem>
                    <SelectItem value="blue-cross">Blue Cross</SelectItem>
                    <SelectItem value="cigna">Cigna</SelectItem>
                    <SelectItem value="none">No Insurance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="policy-number">Policy Number</Label>
                <Input id="policy-number" defaultValue="ATN-4492-88291" value={policyNumber} onChange={(e) => setPolicyNumber(e.target.value)} />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="primary-concern">Primary Health Concern</Label>
              <Input id="primary-concern" placeholder="Reason for visit or care program" value={primaryConcern} onChange={(e) => setPrimaryConcern(e.target.value)} />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="medical-history">Relevant Medical History</Label>
              <Textarea
                id="medical-history"
                className="h-28"
                placeholder="Share chronic conditions, surgeries, and relevant notes..."
                value={medicalHistory}
                onChange={(e) => setMedicalHistory(e.target.value)}
              />
            </div>

            <Separator />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <IconClock className="h-4 w-4" />
                Average approval time for submitted details: within 24 hours.
              </div>
              <Button onClick={handleSubmitRegistration}>
                <IconFileText className="mr-2 h-4 w-4" />
                Submit Registration
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What Happens Next</CardTitle>
          <CardDescription>After submission, your information is verified by the admin desk.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <IconCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
            Your profile becomes available to assigned doctors.
          </div>
          <div className="flex items-center gap-2">
            <IconCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
            You receive reminders for missing or expiring documents.
          </div>
          <div className="flex items-center gap-2">
            <IconCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
            Appointment check-in becomes faster at the clinic front desk.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
