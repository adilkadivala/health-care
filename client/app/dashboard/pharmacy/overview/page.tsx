import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IconPackage, IconPlus, IconReportMedical, IconSearch } from "@tabler/icons-react"

const pendingPrescriptions = [
  {
    id: "RX-5102",
    patient: "Aarav Sharma",
    doctor: "Dr. Sarah Jenkins",
    medication: "Atorvastatin 20mg",
    quantity: "30 tabs",
    priority: "Normal",
    status: "Ready to Dispense",
  },
  {
    id: "RX-5106",
    patient: "Neha Verma",
    doctor: "Dr. Emily Carter",
    medication: "Metformin 500mg",
    quantity: "60 tabs",
    priority: "High",
    status: "In Verification",
  },
  {
    id: "RX-5111",
    patient: "Rohan Kulkarni",
    doctor: "Dr. Robert Fox",
    medication: "Levothyroxine 50mcg",
    quantity: "30 tabs",
    priority: "Urgent",
    status: "Pending Approval",
  },
]

const lowStockMeds = [
  { id: "MS-01", name: "Amoxicillin 500mg", stock: "18 strips", reorder: "Below 25" },
  { id: "MS-02", name: "Insulin Glargine", stock: "9 pens", reorder: "Below 15" },
  { id: "MS-03", name: "Aspirin 75mg", stock: "21 strips", reorder: "Below 30" },
]

export default function Overview() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Pharmacy Overview</h2>
          <p className="text-muted-foreground">
            Daily summary of prescriptions, inventory pressure, and dispensing workload.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <IconSearch className="mr-2 h-4 w-4" />
            Search Prescription
          </Button>
          <Button>
            <IconPlus className="mr-2 h-4 w-4" />
            New Order
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Pending Prescriptions</CardDescription>
            <CardTitle className="text-2xl">24</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">7 marked high priority</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Dispensed Today</CardDescription>
            <CardTitle className="text-2xl">63</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">+8 from yesterday shift</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Low Stock Alerts</CardDescription>
            <CardTitle className="text-2xl">12</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">3 items require immediate reorder</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Near Expiry Batches</CardDescription>
            <CardTitle className="text-2xl">5</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Expiring in next 30 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Prescription Queue</CardTitle>
            <CardDescription>Orders waiting for verification, approval, or dispensing.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rx ID</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Medication</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingPrescriptions.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell className="font-mono text-xs">{entry.id}</TableCell>
                    <TableCell className="font-medium">{entry.patient}</TableCell>
                    <TableCell>{entry.doctor}</TableCell>
                    <TableCell>{entry.medication}</TableCell>
                    <TableCell>
                      <Badge
                        variant={entry.status === "Ready to Dispense" ? "outline" : "secondary"}
                        className={
                          entry.status === "Ready to Dispense"
                            ? "bg-green-500/15 text-green-700 border-green-200 hover:bg-green-500/20 dark:text-green-400 dark:border-green-900"
                            : entry.status === "In Verification"
                              ? "bg-blue-500/15 text-blue-700 border-blue-200 hover:bg-blue-500/20 dark:text-blue-400 dark:border-blue-900"
                              : "bg-orange-500/15 text-orange-700 border-orange-200 hover:bg-orange-500/20 dark:text-orange-400 dark:border-orange-900"
                        }
                      >
                        {entry.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Low Stock Watchlist</CardTitle>
            <CardDescription>Medicines currently below safe reorder levels.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {lowStockMeds.map((item) => (
              <div key={item.id} className="rounded-lg border p-3">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-medium">{item.name}</p>
                  <Badge variant="outline" className="bg-red-500/10 text-red-700 border-red-200 dark:text-red-400 dark:border-red-900">
                    Low
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">Available: {item.stock}</p>
                <p className="text-xs text-muted-foreground">Reorder trigger: {item.reorder}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Shift Reminder</CardTitle>
          <CardDescription>Validate all urgent prescriptions before handover.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <IconReportMedical className="h-4 w-4" />
            4 urgent prescriptions are waiting for final pharmacist sign-off.
          </div>
          <Button>
            <IconPackage className="mr-2 h-4 w-4" />
            Process Urgent Queue
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
