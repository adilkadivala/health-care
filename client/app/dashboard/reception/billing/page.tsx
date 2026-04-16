"use client"

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
import { IconCreditCard, IconReceipt2 } from "@tabler/icons-react"
import { api } from "@/lib/http"
import { useEffect, useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type ReceptionBillingResponse = {
  summary: {
    totalAmount: number
    completed: number
    transactions: number
  }
  transactions: Array<{
    id: string
    patientName: string
    description: string | null
    amount: number
    status: string
  }>
}

export default function Billing() {
  const [billing, setBilling] = useState<ReceptionBillingResponse | null>(null)
  const [query, setQuery] = useState("")
  const [status, setStatus] = useState("ALL")

  useEffect(() => {
    const load = async () => {
      try {
        const qs = new URLSearchParams()
        if (query) qs.set("q", query)
        if (status !== "ALL") qs.set("status", status)
        const data = await api.get<ReceptionBillingResponse>(`/reception/billing?${qs.toString()}`)
        setBilling(data)
      } catch {
        setBilling(null)
      }
    }
    void load()
  }, [query, status])

  const billingRows = useMemo(
    () =>
      (billing?.transactions ?? []).map((tx) => ({
        id: tx.id,
        patient: tx.patientName,
        service: tx.description ?? "Consultation",
        copay: `$${tx.amount.toFixed(2)}`,
        status: tx.status.toLowerCase().replaceAll("_", " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      })),
    [billing],
  )

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Billing & Copay</h2>
          <p className="text-muted-foreground">
            Track front-desk payments, copays, and billing handoff status.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Collected Today</CardDescription>
            <CardTitle className="text-2xl">${billing?.summary.totalAmount?.toFixed(2) ?? "0.00"}</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="outline" className="bg-green-500/10 text-green-700 border-green-200">
              <IconCreditCard className="mr-1 h-3 w-3" /> {billing?.summary.completed ?? 0} successful payments
            </Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Pending Collection</CardDescription>
            <CardTitle className="text-2xl">{billing?.summary.transactions ?? 0}</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="outline" className="bg-orange-500/10 text-orange-700 border-orange-200">
              <IconReceipt2 className="mr-1 h-3 w-3" /> Billing entries tracked
            </Badge>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payment Log</CardTitle>
          <CardDescription>Latest billing entries processed by the reception desk.</CardDescription>
          <div className="flex items-center gap-2">
            <Input placeholder="Search patient..." value={query} onChange={(e) => setQuery(e.target.value)} />
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-[180px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All</SelectItem>
                <SelectItem value="PAID">Paid</SelectItem>
                <SelectItem value="PENDING">Pending</SelectItem>
                <SelectItem value="FAILED">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Copay</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {billingRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-mono text-xs">{row.id}</TableCell>
                  <TableCell className="font-medium">{row.patient}</TableCell>
                  <TableCell>{row.service}</TableCell>
                  <TableCell>{row.copay}</TableCell>
                  <TableCell>
                    <Badge variant={row.status === "Paid" ? "default" : "outline"}>
                      {row.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4 flex justify-end">
            <Button variant="outline">Export Report</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
