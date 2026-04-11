import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { IconBook, IconLifebuoy, IconMessageCircle, IconPhoneCall, IconSearch } from "@tabler/icons-react"

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
              Can't find what you need? Open a support ticket and our team will get back to you shortly.
            </p>
          </CardContent>
        </Card>

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