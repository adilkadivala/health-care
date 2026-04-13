import { SectionCards } from "@/components/section-cards"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { IconSettings, IconShieldCheck, IconUsersGroup } from "@tabler/icons-react"

export default function Overview() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="px-4 lg:px-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Admin Headquarters</h2>
          <p className="text-muted-foreground text-sm">
            High-level metrics and system control.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
              <IconSettings className="size-4" /> Global Actions
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Global System Actions</DialogTitle>
              <DialogDescription>Administrative overrides and system syncs.</DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-3 py-4">
              <Button variant="outline" className="justify-start gap-2 h-12">
                <IconShieldCheck className="size-5" /> Force Data Sync & Backup
              </Button>
              <Button variant="outline" className="justify-start gap-2 h-12">
                <IconUsersGroup className="size-5" /> Export Master User List
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="cursor-pointer hover:opacity-95 transition-opacity">
        <SectionCards />
      </div>

      <div className="px-4 lg:px-6 grid lg:grid-cols-3 gap-6">
        <div className="col-span-2">
          <ChartAreaInteractive />
        </div>
        
        <div className="flex flex-col gap-4">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>System Health</CardTitle>
              <CardDescription>Server status and real-time alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { s: "Database Cluster", t: "Healthy", c: "bg-emerald-500/10 text-emerald-600" },
                { s: "Auth Service", t: "Healthy", c: "bg-emerald-500/10 text-emerald-600" },
                { s: "Email SMTP", t: "Warning", c: "bg-amber-500/10 text-amber-600" },
              ].map((h, i) => (
                <div key={i} className="flex justify-between items-center p-3 border rounded-lg hover:shadow-sm">
                   <span className="font-medium text-sm">{h.s}</span>
                   <Badge className={h.c} variant="secondary">{h.t}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
