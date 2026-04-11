/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { IconBook, IconLifebuoy, IconMessageCircle, IconPhoneCall, IconSearch } from "@tabler/icons-react"

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

export default function Help() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center py-10 bg-primary/5 rounded-xl border border-primary/10">
        <h2 className="text-3xl font-bold tracking-tight">How can we help you?</h2>
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
              Read comprehensive guides and tutorials to master the healthcare administration dashboard.
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
                  Can&apos;t find what you need? Open a support ticket and our team will get back to you shortly.
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
                Reach out to us directly via phone or email for immediate assistance.
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
            Quick answers to common issues.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-b pb-4">
            <h4 className="font-semibold text-base mb-2">How do I add a new doctor?</h4>
            <p className="text-sm text-muted-foreground">
              Navigate to the Users tab, click on "Add User", fill out the required information, and select the "Doctor" role before saving.
            </p>
          </div>
          <div className="border-b pb-4">
            <h4 className="font-semibold text-base mb-2">Can I export the audit logs?</h4>
            <p className="text-sm text-muted-foreground">
              Yes, in the Audit tab there is an "Export CSV" button located in the top right corner that will download all filtered logs.
            </p>
          </div>
          <div>
             <h4 className="font-semibold text-base mb-2">Why is a user's status Offline?</h4>
            <p className="text-sm text-muted-foreground">
              A user status shows as "Offline" when they haven't interacted with the portal in over 15 minutes, or have explicitly logged out.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}