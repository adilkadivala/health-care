<<<<<<< HEAD
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
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IconCreditCardPay, IconReceiptTax, IconNfc, IconFileInvoice } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function BillingCopayPage() {
  const transactions = [
    { id: "TX-1092", patient: "Alan Wake", amount: "$50.00", type: "Copay", status: "Completed", time: "10:24 AM" },
    { id: "TX-1091", patient: "Sarah Connor", amount: "$120.00", type: "Consultation", status: "Completed", time: "09:45 AM" },
    { id: "TX-1090", patient: "John Doe", amount: "$35.00", type: "Copay", status: "Failed", time: "09:30 AM" },
    { id: "TX-1089", patient: "Emily Chen", amount: "$250.00", type: "Procedure", status: "Completed", time: "08:15 AM" },
  ];

  return (
    <div className="flex flex-col gap-6 px-4 lg:px-6 py-6 pt-0 mt-4">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-amber-100 dark:bg-amber-900/50 rounded-xl shadow-sm">
          <IconCreditCardPay className="size-6 text-amber-600 dark:text-amber-400" />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold tracking-tight">Billing & Copay</h1>
          <p className="text-muted-foreground text-sm">Process upfront payments and manage invoices securely.</p>
        </div>
        <Button variant="outline" className="hidden sm:flex gap-2">
          <IconFileInvoice className="size-4" />
          Generate Report
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-sm flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Latest processed payments and copays.</CardDescription>
            </div>
            <Input placeholder="Search transaction..." className="w-48 bg-background hidden sm:flex" />
          </CardHeader>
          <CardContent className="flex-1">
            <div className="rounded-xl border overflow-hidden">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-muted-foreground text-xs uppercase font-semibold">
                  <tr>
                    <th className="px-4 py-3">Patient</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Amount</th>
                    <th className="px-4 py-3">Time</th>
                    <th className="px-4 py-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y bg-card">
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-muted/50 transition-colors">
                      <td className="px-4 py-3 font-medium text-foreground">
                        {tx.patient}
                        <div className="text-xs text-muted-foreground font-normal">{tx.id}</div>
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="outline" className="font-normal">{tx.type}</Badge>
                      </td>
                      <td className="px-4 py-3 font-semibold">{tx.amount}</td>
                      <td className="px-4 py-3 text-muted-foreground">{tx.time}</td>
                      <td className="px-4 py-3 text-right">
                        <Badge variant={tx.status === "Completed" ? "default" : "destructive"}>
                          {tx.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-amber-200 dark:border-amber-900 overflow-hidden flex flex-col">
          <div className="bg-amber-50 dark:bg-amber-950/30 p-6 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-lg">Point of Sale</h3>
                  <p className="text-xs text-muted-foreground">Terminal #04 Active</p>
                </div>
                <IconReceiptTax className="text-amber-500/50 size-8" />
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground uppercase">Patient ID / Name</label>
                  <Input placeholder="Enter patient details" className="bg-background" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground uppercase">Amount</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-muted-foreground">$</span>
                    <Input type="number" placeholder="0.00" className="pl-8 text-lg font-bold bg-background h-12" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <Button className="w-full h-14 text-base font-bold gap-2 bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-600/20">
                <IconNfc className="size-5" />
                Process Card
              </Button>
              <Button variant="outline" className="w-full text-muted-foreground">Cash Payment</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
>>>>>>> 840abc40f09212a414d550d90fe5e854e638aa89
