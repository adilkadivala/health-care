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
import { Textarea } from "@/components/ui/textarea"
import { IconBook, IconLifebuoy, IconMessageCircle, IconPhoneCall, IconSearch } from "@tabler/icons-react"

export default function Help() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex flex-col items-center justify-center space-y-4 rounded-xl border border-primary/10 bg-primary/5 py-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Pharmacy Help Center</h2>
        <p className="max-w-[640px] text-muted-foreground">
          Get help with inventory workflows, supplier orders, and dispensing operations.
        </p>
        <div className="relative mt-4 w-full max-w-[520px]">
          <IconSearch className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search pharmacy support topics..." className="rounded-full py-6 pl-10 text-base shadow-sm" />
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="cursor-pointer transition-colors hover:border-primary/50">
          <CardHeader className="flex flex-row items-center space-x-4">
            <div className="rounded-lg bg-primary/10 p-2 text-primary">
              <IconBook className="h-6 w-6" />
            </div>
            <CardTitle className="text-lg">Workflow Docs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Read process guides for orders, inventory checks, and transaction history.
            </p>
          </CardContent>
        </Card>

        <Dialog>
          <DialogTrigger asChild>
            <Card className="cursor-pointer transition-colors hover:border-primary/50">
              <CardHeader className="flex flex-row items-center space-x-4">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <IconLifebuoy className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Support Ticket</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Open a ticket for issues with pharmacy operations or data sync.
                </p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Open Pharmacy Support Ticket</DialogTitle>
              <DialogDescription>
                Share your issue details and support will contact you shortly.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Issue summary" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" className="h-32" placeholder="Describe the issue..." />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Submit Ticket</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Card className="cursor-pointer transition-colors hover:border-primary/50">
              <CardHeader className="flex flex-row items-center space-x-4">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <IconPhoneCall className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Contact Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Reach pharmacy support for urgent stock or dispensing blockers.
                </p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Contact Pharmacy Support</DialogTitle>
              <DialogDescription>
                Use these channels for direct support assistance.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex items-center space-x-4 rounded-lg bg-primary/5 p-4">
                <IconPhoneCall className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">+1 (800) 123-4567</p>
                  <p className="text-sm text-muted-foreground">24/7 for urgent pharmacy incidents</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 rounded-lg bg-primary/5 p-4">
                <IconMessageCircle className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">pharmacy-support@hospital.org</p>
                  <p className="text-sm text-muted-foreground">Standard response in under 24 hours</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Quick answers for common pharmacy operations.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-b pb-4">
            <h4 className="mb-2 font-semibold text-base">How do I mark stock as received?</h4>
            <p className="text-sm text-muted-foreground">
              Open Orders, locate the purchase order, and update its status to Delivered.
            </p>
          </div>
          <div className="border-b pb-4">
            <h4 className="mb-2 font-semibold text-base">Where can I check low stock items?</h4>
            <p className="text-sm text-muted-foreground">
              Use the Inventory tab and filter by status to list all Low Stock medicines.
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-base">How can I export transaction data?</h4>
            <p className="text-sm text-muted-foreground">
              Go to History and use the Export History button to download logs.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
