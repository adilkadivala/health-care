import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IconDownload, IconSearch } from "@tabler/icons-react"

const historyRows = [
  {
    txId: "TX-8801",
    date: "2026-04-11 09:42",
    patient: "Aarav Sharma",
    item: "Atorvastatin 20mg",
    quantity: "30 tabs",
    action: "Dispensed",
    user: "Pharm. James Wilson",
  },
  {
    txId: "TX-8795",
    date: "2026-04-10 16:15",
    patient: "Neha Verma",
    item: "Metformin 500mg",
    quantity: "60 tabs",
    action: "Returned",
    user: "Pharm. Emily Chen",
  },
  {
    txId: "TX-8788",
    date: "2026-04-10 11:22",
    patient: "Rohan Kulkarni",
    item: "Levothyroxine 50mcg",
    quantity: "30 tabs",
    action: "Dispensed",
    user: "Pharm. James Wilson",
  },
  {
    txId: "TX-8774",
    date: "2026-04-09 14:03",
    patient: "Sana Iqbal",
    item: "Insulin Glargine",
    quantity: "2 pens",
    action: "Adjusted",
    user: "Pharm. Emily Chen",
  },
]

export default function History() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">History</h2>
          <p className="text-muted-foreground">
            Audit trail of dispensing, returns, and stock adjustments.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <IconDownload className="mr-2 h-4 w-4" />
              Export History
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Export Transaction History</DialogTitle>
              <DialogDescription>
                Choose date range and format for the exported file.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="range">Date Range</Label>
                <Select defaultValue="7-days">
                  <SelectTrigger id="range">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="7-days">Last 7 days</SelectItem>
                    <SelectItem value="30-days">Last 30 days</SelectItem>
                    <SelectItem value="all">All time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="format">Format</Label>
                <Select defaultValue="csv">
                  <SelectTrigger id="format">
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="json">JSON</SelectItem>
                    <SelectItem value="pdf">PDF</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Download</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle>Transaction Log</CardTitle>
            <CardDescription>Immutable pharmacy movement records.</CardDescription>
          </div>
          <div className="relative">
            <IconSearch className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search tx ID or patient..." className="w-[250px] pl-8" />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tx ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Medication</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>User</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {historyRows.map((row) => (
                <TableRow key={row.txId}>
                  <TableCell className="font-mono text-xs">{row.txId}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell className="font-medium">{row.patient}</TableCell>
                  <TableCell>{row.item}</TableCell>
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell>
                    <Badge
                      variant={row.action === "Dispensed" ? "outline" : "secondary"}
                      className={
                        row.action === "Dispensed"
                          ? "bg-green-500/15 text-green-700 border-green-200 hover:bg-green-500/20 dark:text-green-400 dark:border-green-900"
                          : row.action === "Returned"
                            ? "bg-orange-500/15 text-orange-700 border-orange-200 hover:bg-orange-500/20 dark:text-orange-400 dark:border-orange-900"
                            : "bg-blue-500/15 text-blue-700 border-blue-200 hover:bg-blue-500/20 dark:text-blue-400 dark:border-blue-900"
                      }
                    >
                      {row.action}
                    </Badge>
                  </TableCell>
                  <TableCell>{row.user}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
