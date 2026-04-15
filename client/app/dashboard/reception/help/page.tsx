<<<<<<< HEAD
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
=======
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { IconBook, IconLifebuoy, IconMessageCircle, IconPhoneCall, IconSearch } from "@tabler/icons-react"

>>>>>>> 840abc40f09212a414d550d90fe5e854e638aa89
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
<<<<<<< HEAD
import { Input } from "@/components/ui/input"
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
=======
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ReceptionHelp() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center py-10 bg-primary/5 rounded-xl border border-primary/10">
        <h2 className="text-3xl font-bold tracking-tight">How can we help the reception?</h2>
        <p className="text-muted-foreground max-w-[600px]">
          Search our knowledge base or browse categories below to find answers to your questions.
        </p>
        <div className="relative w-full max-w-[500px] mt-4">
          <IconSearch className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search for help..." className="pl-10 py-6 text-base rounded-full shadow-sm" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
        <Card className="hover:border-primary/50 transition-colors cursor-pointer">
          <CardHeader className="flex flex-row items-center space-x-4">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <IconBook className="w-6 h-6" />
            </div>
            <div>
              <CardTitle className="text-lg">Documentation</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Read comprehensive guides and tutorials to master the front-desk and patient processing.
            </p>
          </CardContent>
        </Card>

        <Dialog>
          <DialogTrigger asChild>
            <Card className="hover:border-primary/50 transition-colors cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <IconLifebuoy className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">Support Tickets</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Can&apos;t find what you need? Open a support ticket and our IT team will get back to you shortly.
                </p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Open Support Ticket</DialogTitle>
              <DialogDescription>
                Describe your issue below and our support team will get in touch with you.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What is your issue about?" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Please provide details..." className="h-32" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Submit Ticket</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Card className="hover:border-primary/50 transition-colors cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <IconPhoneCall className="w-6 h-6" />
            </div>
                <div>
                  <CardTitle className="text-lg">Contact Us</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Need immediate assistance? Call our dedicated support line for priority help.
                </p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Contact Us</DialogTitle>
              <DialogDescription>
                Reach out to us directly via phone or email for immediate assistance regarding the reception system.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-primary/5">
                <IconPhoneCall className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold">+1 (800) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Available 24/7 for emergencies</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-primary/5">
                <IconMessageCircle className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold">support@hospital.org</p>
                  <p className="text-sm text-muted-foreground">We usually reply within 24 hours</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>
            Quick answers to common front-desk issues.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-b pb-4">
            <h4 className="font-semibold text-base mb-2">How do I register a walk-in patient?</h4>
            <p className="text-sm text-muted-foreground">
              Navigate to the Walk-ins tab and click on "Register Walk-in". Fill out their information and automatically add them to the queue.
            </p>
          </div>
          <div className="border-b pb-4">
            <h4 className="font-semibold text-base mb-2">How do I process copays?</h4>
            <p className="text-sm text-muted-foreground">
              In the Billing section, enter the patient ID and total amount due, then select "Process Card" or "Cash Payment" to record the transaction.
            </p>
          </div>
          <div>
             <h4 className="font-semibold text-base mb-2">Can I modify an already assigned appointment?</h4>
            <p className="text-sm text-muted-foreground">
              Yes. Visit the Appointments tab, click the three-dots context menu on the specific appointment, and select "Reschedule" or "Cancel".
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
>>>>>>> 840abc40f09212a414d550d90fe5e854e638aa89
