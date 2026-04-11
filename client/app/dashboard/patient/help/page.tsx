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
        <h2 className="text-3xl font-bold tracking-tight">Patient Help Center</h2>
        <p className="max-w-[640px] text-muted-foreground">
          Search common questions or contact support for appointments, reports, and billing help.
        </p>
        <div className="relative mt-4 w-full max-w-[520px]">
          <IconSearch className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search patient support topics..." className="rounded-full py-6 pl-10 text-base shadow-sm" />
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="cursor-pointer transition-colors hover:border-primary/50">
          <CardHeader className="flex flex-row items-center space-x-4">
            <div className="rounded-lg bg-primary/10 p-2 text-primary">
              <IconBook className="h-6 w-6" />
            </div>
            <CardTitle className="text-lg">Guides</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Step-by-step help for bookings, profile updates, and record downloads.
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
                  Open a request when you need help with account or medical records.
                </p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create Support Ticket</DialogTitle>
              <DialogDescription>
                Share details and our support team will respond as soon as possible.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Issue summary" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="details">Details</Label>
                <Textarea id="details" className="h-32" placeholder="Describe your issue..." />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Submit</Button>
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
                <CardTitle className="text-lg">Contact Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Reach support directly for urgent portal or appointment problems.
                </p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Contact Support Team</DialogTitle>
              <DialogDescription>
                Use these channels to contact the patient support desk.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex items-center space-x-4 rounded-lg bg-primary/5 p-4">
                <IconPhoneCall className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">+1 (800) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Available 24/7 for urgent help</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 rounded-lg bg-primary/5 p-4">
                <IconMessageCircle className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">patient-support@hospital.org</p>
                  <p className="text-sm text-muted-foreground">Average reply time under 24 hours</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Fast answers for common patient portal questions.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-b pb-4">
            <h4 className="mb-2 font-semibold text-base">How can I reschedule an appointment?</h4>
            <p className="text-sm text-muted-foreground">
              Open the Appointments tab, select the visit, and choose a new available slot.
            </p>
          </div>
          <div className="border-b pb-4">
            <h4 className="mb-2 font-semibold text-base">When are lab reports uploaded?</h4>
            <p className="text-sm text-muted-foreground">
              Reports are usually visible within 24 to 48 hours after sample processing.
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-base">Can I update emergency contact details?</h4>
            <p className="text-sm text-muted-foreground">
              Yes, go to Profile and update emergency contact fields, then save changes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
