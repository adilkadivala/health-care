"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IconPackage, IconPlus, IconReportMedical, IconSearch, IconTrendingUp, IconTrendingDown, IconAlertTriangle } from "@tabler/icons-react"
import { useEffect, useMemo, useState } from "react"
import { api } from "@/lib/http"
import { toast } from "sonner"

type PharmacyOrdersResponse = {
  orders: Array<{
    id: string
    patientName: string
    doctorName: string
    status: string
    items: Array<{ medication: string; quantity: number }>
  }>
}

const lowStockMeds = [
  { id: "MS-01", name: "Amoxicillin 500mg", stock: "18 strips", reorder: "Below 25" },
  { id: "MS-02", name: "Insulin Glargine", stock: "9 pens", reorder: "Below 15" },
  { id: "MS-03", name: "Aspirin 75mg", stock: "21 strips", reorder: "Below 30" },
]

export default function Overview() {
  const [pendingPrescriptions, setPendingPrescriptions] = useState<PharmacyOrdersResponse["orders"]>([])
  const [rxSearchTerm, setRxSearchTerm] = useState("")
  const [newOrderPatient, setNewOrderPatient] = useState("")
  const [newOrderMedication, setNewOrderMedication] = useState("")
  const [newOrderQuantity, setNewOrderQuantity] = useState("")
  const [reorderQuantities, setReorderQuantities] = useState<Record<string, string>>({})

  const loadOverviewData = async () => {
    try {
      const data = await api.get<PharmacyOrdersResponse>("/pharmacy/orders")
      setPendingPrescriptions(data.orders)
    } catch {
      setPendingPrescriptions([])
    }
  }

  useEffect(() => {
    void api.get("/pharmacy/overview").catch(() => undefined)
    void loadOverviewData()
  }, [])

  const mappedOrders = useMemo(
    () =>
      pendingPrescriptions.map((entry) => ({
        id: entry.id,
        patient: entry.patientName,
        doctor: entry.doctorName,
        medication: entry.items.map((i) => i.medication).join(", ") || "-",
        quantity: `${entry.items.reduce((sum, i) => sum + i.quantity, 0)} units`,
        priority: entry.status === "PENDING" ? "High" : "Normal",
        status:
          entry.status === "DISPENSED"
            ? "Ready to Dispense"
            : entry.status === "PENDING"
              ? "Pending Approval"
              : "In Verification",
      })),
    [pendingPrescriptions],
  )

  const handlePatchOrderStatus = async (orderId: string, status: string) => {
    const normalizedStatus =
      status === "Ready to Dispense"
        ? "DISPENSED"
        : status === "Pending Approval"
          ? "PENDING"
          : "VERIFIED"
    try {
      await api.patch(`/pharmacy/orders/${orderId}`, { status: normalizedStatus })
      await loadOverviewData()
      toast.success("Order status updated successfully.")
    } catch {
      toast.error("Failed to update order status.")
    }
  }
  const handleSearchRx = async () => {
    const term = rxSearchTerm.trim()
    if (!term) {
      await loadOverviewData()
      toast.success("Showing latest prescriptions.")
      return
    }
    try {
      const data = await api.get<PharmacyOrdersResponse>(`/pharmacy/orders?q=${encodeURIComponent(term)}`)
      setPendingPrescriptions(data.orders)
      toast.success(`Found ${data.orders.length} matching prescription(s).`)
    } catch {
      toast.error("Failed to search prescriptions.")
    }
  }
  const handleCreateManualOrder = async () => {
    const qty = Number(newOrderQuantity)
    if (!newOrderPatient.trim() || !newOrderMedication.trim() || Number.isNaN(qty) || qty <= 0) {
      toast.error("Patient, medication and quantity are required.")
      return
    }
    try {
      await api.post("/pharmacy/orders", {
        supplier: `Manual Rx: ${newOrderPatient.trim()}`,
        itemName: newOrderMedication.trim(),
        itemCount: qty,
      })
      setNewOrderPatient("")
      setNewOrderMedication("")
      setNewOrderQuantity("")
      await loadOverviewData()
      toast.success("New order created successfully.")
    } catch {
      toast.error("Failed to create new order.")
    }
  }
  const handleReorder = async (itemId: string, itemName: string) => {
    const qty = Number(reorderQuantities[itemId] ?? "50")
    if (Number.isNaN(qty) || qty <= 0) {
      toast.error("Enter a valid reorder quantity.")
      return
    }
    try {
      await api.post("/pharmacy/orders", {
        supplier: "Auto Reorder",
        itemName,
        itemCount: qty,
      })
      toast.success("Requisition sent successfully.")
    } catch {
      toast.error("Failed to send requisition.")
    }
  }

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="flex items-center justify-between space-y-2 px-4 lg:px-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Pharmacy Operations</h2>
          <p className="text-muted-foreground">
            Monitor incoming prescriptions and active inventory.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <IconSearch className="mr-2 h-4 w-4" />
                Search Rx
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Search Prescriptions</DialogTitle>
                <DialogDescription>Look up by Rx ID, Patient Name, or Medication.</DialogDescription>
              </DialogHeader>
              <Input
                placeholder="Enter details..."
                value={rxSearchTerm}
                onChange={(e) => setRxSearchTerm(e.target.value)}
              />
              <DialogFooter>
                <Button onClick={handleSearchRx}>Search</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                <IconPlus className="mr-2 h-4 w-4" />
                New Order
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create Manual Order</DialogTitle>
                <DialogDescription>Log an over-the-counter or physical prescription.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-2">
                <div className="grid gap-2">
                  <Label>Patient Name</Label>
                  <Input
                    placeholder="John Doe"
                    value={newOrderPatient}
                    onChange={(e) => setNewOrderPatient(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Medication Details</Label>
                  <Input
                    placeholder="e.g. Paracetamol 500mg"
                    value={newOrderMedication}
                    onChange={(e) => setNewOrderMedication(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Quantity</Label>
                  <Input
                    type="number"
                    placeholder="1"
                    value={newOrderQuantity}
                    onChange={(e) => setNewOrderQuantity(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button className="bg-amber-600" onClick={handleCreateManualOrder}>Submit Order</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-4 lg:px-6 *:data-[slot=card]:shadow-xs *:data-[slot=card]:border-amber-100 dark:*:data-[slot=card]:border-amber-900/50">
        <Card className="bg-amber-50/50 dark:bg-amber-950/20">
          <CardHeader className="p-4 pb-2">
            <CardDescription className="text-xs">Waitlist</CardDescription>
            <CardTitle className="text-2xl tabular-nums">24</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <Badge variant="outline" className="text-amber-600 bg-white border-amber-200 mt-1 dark:bg-amber-900/40 dark:text-amber-400">
              <IconAlertTriangle className="mr-1 h-3 w-3" /> 7 High Priority
            </Badge>
          </CardContent>
        </Card>
        <Card className="bg-amber-50/50 dark:bg-amber-950/20">
          <CardHeader className="p-4 pb-2">
            <CardDescription className="text-xs">Dispensed Today</CardDescription>
            <CardTitle className="text-2xl tabular-nums">63</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <Badge variant="outline" className="text-emerald-600 bg-emerald-50 border-emerald-200 mt-1 dark:bg-emerald-950/40 dark:text-emerald-400">
              <IconTrendingUp className="mr-1 h-3 w-3" /> +8 this shift
            </Badge>
          </CardContent>
        </Card>
        <Card className="bg-amber-50/50 dark:bg-amber-950/20">
          <CardHeader className="p-4 pb-2">
            <CardDescription className="text-xs">Low Stock</CardDescription>
            <CardTitle className="text-2xl tabular-nums text-rose-600">12</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <Badge variant="outline" className="text-rose-600 bg-white border-rose-200 mt-1 dark:bg-rose-950/40 dark:text-rose-400">
              <IconTrendingDown className="mr-1 h-3 w-3" /> Critical Needs
            </Badge>
          </CardContent>
        </Card>
        <Card className="bg-amber-50/50 dark:bg-amber-950/20">
          <CardHeader className="p-4 pb-2">
            <CardDescription className="text-xs">Near Expiry</CardDescription>
            <CardTitle className="text-2xl tabular-nums text-orange-500">5</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <Badge variant="outline" className="text-amber-600 bg-white border-amber-200 mt-1 dark:bg-amber-900/40 dark:text-amber-400">
              Check Batches
            </Badge>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 px-4 lg:px-6">
        {/* Prescription Queue */}
        <Card className="flex flex-col border-amber-100 dark:border-amber-950 shadow-sm">
          <CardHeader className="bg-amber-50/30 dark:bg-amber-950/10 border-b border-amber-100 dark:border-amber-900/20 pb-4">
            <CardTitle>Prescription Queue</CardTitle>
            <CardDescription>Orders waiting for verification and dispensing.</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-amber-100 dark:divide-amber-900/20">
              {mappedOrders.map((entry) => (
                <div key={entry.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="font-mono text-[10px] bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 border-none">{entry.id}</Badge>
                      <span className="font-bold">{entry.patient}</span>
                      {entry.priority !== "Normal" && (
                         <Badge variant="destructive" className="h-5 text-[10px] uppercase.">
                           {entry.priority}
                         </Badge>
                      )}
                    </div>
                    <p className="text-sm">
                      <span className="font-medium">{entry.medication}</span> &bull; {entry.quantity}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Prescribed by {entry.doctor}</p>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant={entry.status === "Ready to Dispense" ? "default" : "outline"} className={entry.status === "Ready to Dispense" ? "bg-amber-600 hover:bg-amber-700" : ""}>
                         {entry.status === "Ready to Dispense" ? "Dispense" : "Verify"}
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Order {entry.id}</DialogTitle>
                        <DialogDescription>Review details before updating status.</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-2 py-2">
                        <Label>Update Status To:</Label>
                        <Select defaultValue={entry.status}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="In Verification">In Verification</SelectItem>
                            <SelectItem value="Pending Approval">Pending Approval</SelectItem>
                            <SelectItem value="Ready to Dispense">Ready to Dispense</SelectItem>
                            <SelectItem value="Completed">Completed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <DialogFooter>
                        <Button className="bg-amber-600" onClick={() => handlePatchOrderStatus(entry.id, "Ready to Dispense")}>Save Changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Inventory Watchlist */}
        <Card className="flex flex-col border-rose-100 dark:border-rose-950 shadow-sm">
          <CardHeader className="bg-rose-50/30 dark:bg-rose-950/10 border-b border-rose-100 dark:border-rose-900/20 pb-4">
            <CardTitle>Low Stock Watchlist</CardTitle>
            <CardDescription>Medicines requiring immediate reorder.</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
             <div className="divide-y divide-rose-100 dark:divide-rose-900/20">
              {lowStockMeds.map((item) => (
                <div key={item.id} className="p-4 flex items-center justify-between hover:bg-rose-50/50 dark:hover:bg-rose-900/10 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold">{item.name}</p>
                      <Badge variant="outline" className="bg-red-500/10 text-red-700 border-red-200 dark:text-red-400 dark:border-red-900 h-5 text-[10px]">Low Stock</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Current: <span className="font-medium text-foreground">{item.stock}</span> (Trigger: {item.reorder})</p>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="outline" className="border-rose-200 text-rose-700 hover:bg-rose-50 dark:border-rose-800 dark:text-rose-300 dark:hover:bg-rose-900/50">
                        Reorder
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Reorder {item.name}</DialogTitle>
                        <DialogDescription>Submit an urgent requisition to the distributor.</DialogDescription>
                      </DialogHeader>
                      <div className="py-2">
                        <Label>Quantity Strategy (Boxes)</Label>
                        <Input
                          type="number"
                          value={reorderQuantities[item.id] ?? "50"}
                          onChange={(e) =>
                            setReorderQuantities((prev) => ({ ...prev, [item.id]: e.target.value }))
                          }
                          className="max-w-[150px] mt-2"
                        />
                      </div>
                      <DialogFooter>
                        <Button
                          className="bg-rose-600 hover:bg-rose-700 text-white"
                          onClick={() => handleReorder(item.id, item.name)}
                        >
                          Send Requisition
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
             </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Shift Reminder */}
      <div className="px-4 lg:px-6">
        <Card className="bg-amber-600 text-white shadow-none">
          <CardHeader className="py-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="text-lg">Shift Handover Reminder</CardTitle>
                <CardDescription className="text-amber-100">
                  4 urgent prescriptions are waiting for final pharmacist sign-off.
                </CardDescription>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-white text-amber-700 hover:bg-amber-50">
                    <IconPackage className="mr-2 h-4 w-4" />
                    Process Urgent Queue
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Batch Process Urgent Prescriptions</DialogTitle>
                    <DialogDescription>Verify the remaining 4 high-priority orders for shift handover.</DialogDescription>
                  </DialogHeader>
                  <div className="bg-amber-50 dark:bg-amber-950 p-4 border border-amber-200 dark:border-amber-800 rounded-md">
                    <p className="text-sm font-medium mb-1">Validation Notice</p>
                    <p className="text-xs text-muted-foreground">Ensure final sign-off is logged under your credentials before concluding the shift.</p>
                  </div>
                  <DialogFooter className="mt-2">
                    <Button variant="outline">Abort Handover</Button>
                    <Button className="bg-amber-600">Sign Off & Process All</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
