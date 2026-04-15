<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 85b9f2b9130dea36db0778433a0250ffc940dcc4
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
      const data = await api.get<ReceptionWalkinsResponse>("/reception/walk-ins")
      setWalkIns(data.walkIns)
    } catch {
      setWalkIns([])
    }
  }

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    void loadWalkIns()
  }, [])

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
    if (!patientName || !reason) return
    try {
      await api.post("/reception/walk-ins", { patientName, reason, priority: 3 })
      setPatientName("")
      setReason("")
      await loadWalkIns()
    } catch {
      // keep UI unchanged; silent failure
    }
  }
  const handleDeleteWalkIn = async (id: string) => {
    try {
      await api.delete(`/reception/walk-ins/${id}`)
      await loadWalkIns()
    } catch {
      // Keep card list unchanged on failure.
    }
  }
  const handleMarkInProgress = async (id: string, name: string, visitReason: string) => {
    try {
      await api.patch(`/reception/walk-ins/${id}`, { status: "IN_TRIAGE", patientName: name, reason: visitReason })
      await loadWalkIns()
    } catch {
      // Keep card list unchanged on failure.
    }
  }
  const filteredRows = walkInRows.filter((row) =>
    `${row.name} ${row.reason} ${row.id}`.toLowerCase().includes(query.toLowerCase()),
  )

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
        {filteredRows.map((row) => (
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
<<<<<<< HEAD
}
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IconWalk, IconClock, IconUserPlus, IconStethoscope, IconUserHeart } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function WalkInsPage() {
  const queue = [
    { id: "W-104", name: "Ethan Hunt", waitTime: "45 mins", reason: "Chest Pain", status: "Triaging", severity: "High" },
    { id: "W-105", name: "Jane Smith", waitTime: "30 mins", reason: "Fever", status: "Waiting", severity: "Medium" },
    { id: "W-106", name: "Marcus Johnson", waitTime: "15 mins", reason: "Sprained Ankle", status: "Waiting", severity: "Low" },
    { id: "W-107", name: "Alice Cooper", waitTime: "5 mins", reason: "Allergic Reaction", status: "With Doctor", severity: "Medium" },
  ];

  return (
    <div className="flex flex-col gap-6 px-4 lg:px-6 py-6 pt-0 mt-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl shadow-sm border border-emerald-200 dark:border-emerald-800">
            <IconWalk className="size-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Walk-ins Queue</h1>
            <p className="text-muted-foreground text-sm">Real-time tracking of unscheduled patient visits.</p>
          </div>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 shadow-sm">
          <IconUserPlus className="size-4" />
          Register Walk-in
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-sm border-emerald-100 dark:border-emerald-900/50 bg-emerald-50/30 dark:bg-emerald-950/20">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-900/40 rounded-full text-emerald-600 dark:text-emerald-400">
              <IconUserHeart className="size-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Currently Waiting</p>
              <h3 className="text-2xl font-bold text-foreground">12 Patients</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/40 rounded-full text-indigo-600 dark:text-indigo-400">
              <IconClock className="size-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Avg. Wait Time</p>
              <h3 className="text-2xl font-bold text-foreground">24 mins</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-full text-blue-600 dark:text-blue-400">
              <IconStethoscope className="size-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Available Doctors</p>
              <h3 className="text-2xl font-bold text-foreground">4 Active</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm overflow-hidden flex flex-col mt-2">
        <CardHeader className="bg-muted/50 border-b pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Live Queue Matrix</CardTitle>
              <CardDescription>Drag and drop patients to assign them automatically.</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-card">High: 1</Badge>
              <Badge variant="outline" className="bg-card">Med: 2</Badge>
              <Badge variant="outline" className="bg-card">Low: 1</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full text-sm text-left">
            <thead className="bg-card text-muted-foreground text-xs uppercase font-semibold border-b">
              <tr>
                <th className="px-6 py-4">Patient</th>
                <th className="px-6 py-4">Wait Time</th>
                <th className="px-6 py-4">Reason</th>
                <th className="px-6 py-4">Severity</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y bg-card">
              {queue.map((pt) => (
                <tr key={pt.id} className="hover:bg-muted/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-foreground">{pt.name}</div>
                    <div className="text-xs text-muted-foreground">{pt.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 font-medium">
                      <IconClock className="size-3 text-amber-500" />
                      {pt.waitTime}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">{pt.reason}</td>
                  <td className="px-6 py-4">
                    <Badge variant={pt.severity === "High" ? "destructive" : pt.severity === "Medium" ? "secondary" : "outline"}>
                      {pt.severity}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${pt.status === 'Waiting' ? 'bg-amber-400' : pt.status === 'Triaging' ? 'bg-indigo-400' : 'bg-emerald-400'}`} />
                      <span className="font-medium text-muted-foreground">{pt.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button size="sm" variant={pt.status === 'Waiting' ? 'default' : 'outline'} className={pt.status === 'Waiting' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}>
                      {pt.status === 'Waiting' ? 'Triage' : 'Manage'}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}
>>>>>>> 840abc40f09212a414d550d90fe5e854e638aa89
=======
}
>>>>>>> 85b9f2b9130dea36db0778433a0250ffc940dcc4
