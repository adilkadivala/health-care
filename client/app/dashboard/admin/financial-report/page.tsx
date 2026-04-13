import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { IconReportMoney, IconArrowUpRight, IconDownload } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function FinancialReportPage() {
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
        <Button variant="outline" className="gap-2">
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
            <div className="text-4xl font-bold text-green-700 dark:text-green-400">$1.2M</div>
            <div className="flex items-center gap-1 mt-2 text-sm font-medium text-emerald-600">
              <IconArrowUpRight className="size-4" /> +14.5% vs last year
            </div>
          </CardContent>
        </Card>
        
        <div className="col-span-1 md:col-span-2">
          <ChartAreaInteractive />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
        <Card>
          <CardHeader>
            <CardTitle>Expense Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="h-[250px] flex items-center justify-center border-t border-dashed">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">View Detailed Expenses</Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Expense Breakdown</DialogTitle>
                  <DialogDescription>Detailed ledger analysis</DialogDescription>
                </DialogHeader>
                <div className="p-4 bg-muted rounded">
                  Table Placeholder
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
