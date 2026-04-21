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
import { IconPackageImport, IconSearch } from "@tabler/icons-react"
import { useEffect, useMemo, useState } from "react"
import { api } from "@/lib/http"
import { toast } from "sonner"

type PharmacyInventoryResponse = {
  inventory: Array<{
    id: string
    name: string
    stockQuantity: number
    updatedAt: string
  }>
}

export default function Inventory() {
  const [inventoryItems, setInventoryItems] = useState<PharmacyInventoryResponse["inventory"]>([])
  const [medicineName, setMedicineName] = useState("")
  const [quantity, setQuantity] = useState("")
  const [search, setSearch] = useState("")

  const loadInventory = async () => {
    try {
      const data = await api.get<PharmacyInventoryResponse>(`/pharmacy/inventory?q=${encodeURIComponent(search)}`)
      setInventoryItems(data.inventory)
    } catch {
      setInventoryItems([])
    }
  }

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    void loadInventory()
  }, [search])

  const handleSaveBatch = async () => {
    const qty = Number(quantity)
    if (!medicineName || Number.isNaN(qty) || qty <= 0) {
      toast.error("Medicine and quantity are required.")
      return
    }
    const match = inventoryItems.find((item) =>
      item.name.toLowerCase().includes(medicineName.toLowerCase()),
    )
    try {
      if (match) {
        await api.patch(`/pharmacy/inventory/${match.id}`, {
          stockQuantity: match.stockQuantity + qty,
        })
      } else {
        await api.post("/pharmacy/inventory", {
          name: medicineName.trim(),
          stockQuantity: qty,
          unitPrice: 0,
        })
      }
      setMedicineName("")
      setQuantity("")
      await loadInventory()
      toast.success("Stock entry saved successfully.")
    } catch {
      toast.error("Failed to save stock entry.")
    }
  }

  const mapped = useMemo(
    () =>
      inventoryItems.map((item) => ({
        sku: item.id,
        name: item.name,
        category: "-",
        stock: item.stockQuantity,
        reorderLevel: 20,
        expiry: new Date(item.updatedAt).toLocaleDateString(),
        status: item.stockQuantity < 20 ? "Low Stock" : "Healthy",
      })),
    [inventoryItems],
  )
  const filteredMapped = useMemo(() => {
    const term = search.trim().toLowerCase()
    if (!term) return mapped
    return mapped.filter(
      (item) =>
        item.sku.toLowerCase().includes(term) ||
        item.name.toLowerCase().includes(term),
    )
  }, [mapped, search])

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Inventory</h2>
          <p className="text-muted-foreground">
            Monitor medicine availability, expiry windows, and reorder thresholds.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <IconPackageImport className="mr-2 h-4 w-4" />
              Add Stock Entry
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Add Inventory Batch</DialogTitle>
              <DialogDescription>
                Register incoming stock with batch and expiry details.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="medicine">Medicine</Label>
                <Input id="medicine" placeholder="Medicine name" value={medicineName} onChange={(e) => setMedicineName(e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input id="quantity" type="number" placeholder="0" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="reorder">Reorder Level</Label>
                  <Input id="reorder" type="number" placeholder="0" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cardiology">Cardiology</SelectItem>
                      <SelectItem value="endocrinology">Endocrinology</SelectItem>
                      <SelectItem value="antibiotics">Antibiotics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" type="date" />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSaveBatch}>Save Batch</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle>Stock Ledger</CardTitle>
            <CardDescription>Current inventory with threshold and expiry status.</CardDescription>
          </div>
          <div className="relative">
            <IconSearch className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search SKU or medicine..." className="w-[260px] pl-8" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SKU</TableHead>
                <TableHead>Medicine</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Reorder Level</TableHead>
                <TableHead>Expiry</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMapped.map((item) => (
                <TableRow key={item.sku}>
                  <TableCell className="font-mono text-xs">{item.sku}</TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.stock}</TableCell>
                  <TableCell>{item.reorderLevel}</TableCell>
                  <TableCell>{item.expiry}</TableCell>
                  <TableCell>
                    <Badge
                      variant={item.status === "Healthy" ? "outline" : "secondary"}
                      className={
                        item.status === "Healthy"
                          ? "bg-green-500/15 text-green-700 border-green-200 hover:bg-green-500/20 dark:text-green-400 dark:border-green-900"
                          : "bg-red-500/15 text-red-700 border-red-200 hover:bg-red-500/20 dark:text-red-400 dark:border-red-900"
                      }
                    >
                      {item.status}
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
