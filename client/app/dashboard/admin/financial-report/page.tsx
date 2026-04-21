"use client"

import { useEffect, useMemo, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { IconReportMoney, IconArrowUpRight, IconDownload } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { api } from "@/lib/http"

type FinancialResponse = {
  summary: {
    totalAmount: number
    averageAmount: number
    totalTransactions: number
    byStatus: Array<{ status: string; count: number; amount: number }>
  }
  transactions: Array<{ id: string; patientName: string; amount: number; status: string; method: string; createdAt: string }>
}

type TrendResponse = {
  points: Array<{ date: string; desktop: number; mobile: number }>
}

export default function FinancialReportPage() {
  const [financialData, setFinancialData] = useState<FinancialResponse | null>(null)
  const [patientTrend, setPatientTrend] = useState<Array<{ date: string; totalPatients: number }>>([])

  useEffect(() => {
    const load = async () => {
      try {
        const [financial, trends] = await Promise.all([
          api.get<FinancialResponse>("/admin/financial-report"),
          api.get<TrendResponse>("/admin/overview/trends?range=30d"),
        ])
        setFinancialData(financial)
        setPatientTrend(
          trends.points.map((point) => ({
            date: new Date(point.date).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
            totalPatients: point.mobile + point.desktop,
          })),
        )
      } catch {
        setFinancialData(null)
        setPatientTrend([])
      }
    }
    void load()
  }, [])

  const totalRevenue = financialData?.summary.totalAmount ?? 0
  const avgTransaction = financialData?.summary.averageAmount ?? 0
  const statusBreakdown = useMemo(
    () =>
      (financialData?.summary.byStatus ?? []).map((entry) => ({
        name: entry.status,
        value: entry.amount,
      })),
    [financialData],
  )
  const expenseByMethod = useMemo(() => {
    const totals = new Map<string, number>()
    for (const txn of financialData?.transactions ?? []) {
      totals.set(txn.method, (totals.get(txn.method) ?? 0) + txn.amount)
    }
    return Array.from(totals.entries()).map(([name, value]) => ({ name, value }))
  }, [financialData])
  const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"]
  const formatCurrency = (value: unknown) => {
    const numericValue =
      typeof value === "number"
        ? value
        : typeof value === "string"
          ? Number(value)
          : NaN
    return Number.isFinite(numericValue) ? `$${numericValue.toLocaleString()}` : "$0"
  }

  return (
    <div className="flex flex-col gap-6 px-4 lg:px-6 py-6 pt-0">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-xl shadow-inner">
            <IconReportMoney className="size-6 text-green-700 dark:text-green-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Financial Report</h1>
            <p className="text-muted-foreground text-sm">Comprehensive overview of revenue, margins, and expenses.</p>
          </div>
        </div>
        <Button variant="outline" className="gap-2" disabled>
          <IconDownload className="size-4" /> Download PDF
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1 border-green-200 dark:border-green-900/50 bg-green-50/30 dark:bg-green-950/20">
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
            <CardDescription>YTD Earnings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-green-700 dark:text-green-400">${totalRevenue.toLocaleString()}</div>
            <div className="flex items-center gap-1 mt-2 text-sm font-medium text-emerald-600">
              <IconArrowUpRight className="size-4" /> Avg transaction: ${avgTransaction.toFixed(2)}
            </div>
          </CardContent>
        </Card>
        
        <div className="col-span-1 md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Total Patient Trend (30 days)</CardTitle>
              <CardDescription>Shows combined daily new patients and appointments.</CardDescription>
            </CardHeader>
            <CardContent className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={patientTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" hide={patientTrend.length > 16} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="totalPatients" fill="#16a34a" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
        <Card>
          <CardHeader>
            <CardTitle>Expense Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="h-[250px] border-t border-dashed">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={expenseByMethod} dataKey="value" nameKey="name" outerRadius={90} label>
                  {expenseByMethod.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatCurrency(value)} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
          <CardFooter className="text-xs text-muted-foreground">
            Breakdown grouped by payment method from recent transactions.
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Transaction Status Mix</CardTitle>
            <CardDescription>Distribution of transaction amounts by status.</CardDescription>
          </CardHeader>
          <CardContent className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={statusBreakdown}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => formatCurrency(value)} />
                <Bar dataKey="value" fill="#2563eb" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
