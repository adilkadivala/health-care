import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { IconReceipt2 } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
export default function Billing() {
  return (
    <div className="flex flex-col gap-6 px-4 lg:px-6 py-6 pt-0">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl">
            <IconReceipt2 className="size-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Consultation Billing</h1>
            <p className="text-muted-foreground text-sm">Review charges and submit new billing codes.</p>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add New Charge</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Consultation Charge</DialogTitle>
              <DialogDescription>Input ICD-10 and CPT codes for the visit.</DialogDescription>
            </DialogHeader>
            <div className="py-6 flex justify-center text-muted-foreground">
              Billing Form Placeholder
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Submit</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Charges</CardTitle>
            <CardDescription>History of your submitted procedure bills.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { pt: "Alice Smith", date: "Today", amount: "$150.00", status: "Pending" },
                { pt: "Bob Jones", date: "Yesterday", amount: "$250.00", status: "Approved" },
                { pt: "Charlie Brown", date: "Aug 12", amount: "$90.00", status: "Approved" },
              ].map((bill, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div>
                    <div className="font-semibold">{bill.pt}</div>
                    <div className="text-xs text-muted-foreground">{bill.date}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono">{bill.amount}</span>
                    <Badge variant={bill.status === "Approved" ? "default" : "secondary"}>{bill.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
             <div className="flex justify-between items-center p-3 bg-secondary rounded text-sm font-medium">
               <span>This Week</span> <span>$2,450.00</span>
             </div>
             <div className="flex justify-between items-center p-3 bg-secondary rounded text-sm font-medium">
               <span>Pending Claims</span> <span>5</span>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}