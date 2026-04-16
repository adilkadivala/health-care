
import { Button } from "@/components/ui/button"

/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { IconHelpCircle, IconHeadset, IconMessages } from "@tabler/icons-react"

export default function Help() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Help & Support</h2>
          <p className="text-muted-foreground">
            Access guides and contact support for reception desk workflows.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <IconHelpCircle className="h-4 w-4" />
              Desk Guide
            </CardTitle>
            <CardDescription>Standard operating steps for check-in and billing.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Open Guide
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <IconHeadset className="h-4 w-4" />
              Contact IT
            </CardTitle>
            <CardDescription>Get technical help for printer, network, or dashboard issues.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Call Support
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <IconMessages className="h-4 w-4" />
              Submit Ticket
            </CardTitle>
            <CardDescription>Send issue details to the operations support team.</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full">Create Ticket</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Reception Support Ticket</DialogTitle>
                  <DialogDescription>
                    Describe your issue and our team will respond quickly.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="e.g. Queue update not reflecting" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="details">Details</Label>
                    <Textarea id="details" placeholder="Share steps to reproduce the issue..." />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Submit Ticket</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </div>
  )         
}

