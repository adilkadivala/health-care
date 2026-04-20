"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { IconPlus, IconUserScan } from "@tabler/icons-react"
import { api } from "@/lib/http"
import { useEffect, useMemo, useState } from "react"
import { toast } from "sonner"

type ReceptionWalkinsResponse = {
  walkIns: Array<{
    id: string
    patientName: string
    reason: string
    priority: number
    status: string
  }>
}

export default function WalkIn() {
  const [walkIns, setWalkIns] = useState<ReceptionWalkinsResponse["walkIns"]>([])
  const [patientName, setPatientName] = useState("")
  const [reason, setReason] = useState("")
  const [query, setQuery] = useState("")

  const loadWalkIns = async () => {
    try {
      const data = await api.get<ReceptionWalkinsResponse>(`/reception/walk-ins?q=${encodeURIComponent(query)}`)
      setWalkIns(data.walkIns)
    } catch {
      setWalkIns([])
    }
  }

  // eslint-disable-next-line react-hooks/set-state-in-effect, react-hooks/exhaustive-deps
  useEffect(() => {
    void loadWalkIns()
  }, [query])

  const walkInRows = useMemo(
    () =>
      walkIns.map((w) => ({
        id: w.id,
        name: w.patientName,
        reason: w.reason,
        priority: w.priority >= 4 ? "High" : w.priority <= 2 ? "Low" : "Normal",
        status: w.status.toLowerCase().replaceAll("_", " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      })),
    [walkIns],
  )

  const handleCreateWalkIn = async () => {
    if (!patientName || !reason) {
      toast.error("Patient name and reason are required.")
      return
    }
    try {
      await api.post("/reception/walk-ins", { patientName, reason, priority: 3 })
      setPatientName("")
      setReason("")
      await loadWalkIns()
      toast.success("Walk-in created successfully.")
    } catch {
      toast.error("Failed to create walk-in.")
    }
  }
  const handleDeleteWalkIn = async (id: string) => {
    try {
      await api.delete(`/reception/walk-ins/${id}`)
      await loadWalkIns()
      toast.success("Walk-in deleted successfully.")
    } catch {
      toast.error("Failed to delete walk-in.")
    }
  }
  const handleMarkInProgress = async (id: string, name: string, visitReason: string) => {
    try {
      await api.patch(`/reception/walk-ins/${id}`, { status: "IN_TRIAGE", patientName: name, reason: visitReason })
      await loadWalkIns()
      toast.success("Walk-in updated successfully.")
    } catch {
      toast.error("Failed to update walk-in.")
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Walk-ins</h2>
          <p className="text-muted-foreground">
            Register and prioritize unscheduled arrivals at the reception desk.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <IconPlus className="mr-2 h-4 w-4" />
              Add Walk-in
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Register Walk-in Patient</DialogTitle>
              <DialogDescription>
                Capture patient details and assign queue priority.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="walkin-name">Patient Name</Label>
                <Input id="walkin-name" placeholder="Enter full name" value={patientName} onChange={(e) => setPatientName(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="walkin-reason">Visit Reason</Label>
                <Input id="walkin-reason" placeholder="Symptoms or concern" value={reason} onChange={(e) => setReason(e.target.value)} />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleCreateWalkIn}>Create Ticket</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="md:col-span-2 lg:col-span-3">
          <Input placeholder="Search walk-in..." value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        {walkInRows.map((row) => (
          <Card key={row.id}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{row.name}</CardTitle>
              <CardDescription>{row.id}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Reason</span>
                <span className="font-medium">{row.reason}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Priority</span>
                <Badge variant={row.priority === "High" ? "destructive" : "outline"}>
                  {row.priority}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Status</span>
                <Badge variant="secondary" className="gap-1">
                  <IconUserScan className="h-3 w-3" />
                  {row.status}
                </Badge>
              </div>
              <div className="flex items-center justify-end gap-2">
                <Button size="sm" variant="outline" onClick={() => void handleMarkInProgress(row.id, row.name, row.reason)}>Update</Button>
                <Button size="sm" variant="destructive" onClick={() => void handleDeleteWalkIn(row.id)}>Delete</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
