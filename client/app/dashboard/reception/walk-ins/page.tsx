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
