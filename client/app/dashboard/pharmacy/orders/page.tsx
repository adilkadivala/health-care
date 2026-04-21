"use client"

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
import { IconFilter, IconPlus, IconSearch } from "@tabler/icons-react"
import { useEffect, useMemo, useState } from "react"
import { api } from "@/lib/http"
import { toast } from "sonner"

type PharmacyOrdersResponse = {
  orders: Array<{
    id: string
    doctorName: string
    items: Array<{ quantity: number }>
    createdAt: string
    status: string
  }>
}

export default function Orders() {
  const [orders, setOrders] = useState<PharmacyOrdersResponse["orders"]>([])
  const [search, setSearch] = useState("")
  const [supplier, setSupplier] = useState("")
  const [itemCount, setItemCount] = useState("")
  const [amount, setAmount] = useState("")
  const [eta, setEta] = useState("")

  const loadOrders = async () => {
    try {
      const data = await api.get<PharmacyOrdersResponse>(`/pharmacy/orders?q=${encodeURIComponent(search)}`)
      setOrders(data.orders)
    } catch {
      setOrders([])
    }
  }
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { void loadOrders() }, [search])
  const handleCreateOrder = async () => {
    const count = Number(itemCount)
    if (!supplier || !count) {
      toast.error("Supplier and item count are required.")
      return
    }
    try {
      await api.post("/pharmacy/orders", {
        supplier,
        itemName: "Bulk medicine order",
        itemCount: count,
        estimatedAmount: Number(amount) || 0,
        eta,
      })
      setItemCount("")
      setAmount("")
      setEta("")
      await loadOrders()
      toast.success("Purchase order created successfully.")
    } catch {
      toast.error("Failed to create purchase order.")
    }
  }

  const mapped = useMemo(
    () =>
      orders.map((order) => ({
        id: order.id,
        supplier: order.doctorName,
        itemCount: order.items.reduce((sum, i) => sum + i.quantity, 0),
        total: "-",
        eta: new Date(order.createdAt).toLocaleDateString(),
        status: order.status.toLowerCase().replaceAll("_", " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      })),
    [orders],
  )
  const filteredMapped = useMemo(() => {
    const term = search.trim().toLowerCase()
    if (!term) return mapped
    return mapped.filter(
      (order) =>
        order.id.toLowerCase().includes(term) ||
        order.supplier.toLowerCase().includes(term) ||
        order.status.toLowerCase().includes(term),
    )
  }, [mapped, search])

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Orders</h2>
          <p className="text-muted-foreground">
            Track supplier orders and monitor inbound medicine deliveries.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <IconPlus className="mr-2 h-4 w-4" />
              Create Purchase Order
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>New Purchase Order</DialogTitle>
              <DialogDescription>
                Add a supplier order for stock replenishment.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="supplier">Supplier</Label>
                <Select value={supplier} onValueChange={setSupplier}>
                  <SelectTrigger id="supplier">
                    <SelectValue placeholder="Select supplier" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="medisupply">MediSupply Co.</SelectItem>
                    <SelectItem value="healthcore">HealthCore Labs</SelectItem>
                    <SelectItem value="novapharma">Nova Pharma</SelectItem>
                    <SelectItem value="primecare">PrimeCare Distributors</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="items">Item Count</Label>
                  <Input id="items" type="number" placeholder="0" value={itemCount} onChange={(e) => setItemCount(e.target.value)} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="amount">Estimated Amount</Label>
                  <Input id="amount" placeholder="$0.00" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="eta">Expected Delivery Date</Label>
                <Input id="eta" type="date" value={eta} onChange={(e) => setEta(e.target.value)} />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleCreateOrder}>Submit Order</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle>Supplier Orders</CardTitle>
            <CardDescription>Recent and active purchase orders.</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <IconSearch className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search order ID..." className="w-[230px] pl-8" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <Button variant="outline" size="icon">
              <IconFilter className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>ETA</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMapped.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-mono text-xs">{order.id}</TableCell>
                  <TableCell className="font-medium">{order.supplier}</TableCell>
                  <TableCell>{order.itemCount}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>{order.eta}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        order.status === "Delivered"
                          ? "outline"
                          : order.status === "Cancelled"
                            ? "destructive"
                            : "secondary"
                      }
                      className={
                        order.status === "Delivered"
                          ? "bg-green-500/15 text-green-700 border-green-200 hover:bg-green-500/20 dark:text-green-400 dark:border-green-900"
                          : order.status === "In Transit"
                            ? "bg-blue-500/15 text-blue-700 border-blue-200 hover:bg-blue-500/20 dark:text-blue-400 dark:border-blue-900"
                            : order.status === "Processing"
                              ? "bg-orange-500/15 text-orange-700 border-orange-200 hover:bg-orange-500/20 dark:text-orange-400 dark:border-orange-900"
                              : ""
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
