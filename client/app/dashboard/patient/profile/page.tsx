import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function Profile() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Patient Profile</h2>
          <p className="text-muted-foreground">
            Keep personal, medical, and emergency details up to date.
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-7">
        <Card className="lg:col-span-2">
          <CardHeader className="items-center text-center">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://i.pravatar.cc/150?u=patient-profile-1" alt="Patient profile" />
              <AvatarFallback>PT</AvatarFallback>
            </Avatar>
            <CardTitle className="mt-2">Aarav Sharma</CardTitle>
            <CardDescription>Patient ID: PT-2026-0921</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Blood Group</span>
              <span className="font-medium">O+</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Primary Physician</span>
              <span className="font-medium">Dr. Sarah Jenkins</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Insurance</span>
              <span className="font-medium">Active</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge variant="outline">Cardiology</Badge>
              <Badge variant="outline">Annual Checkup</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Update Photo
            </Button>
          </CardFooter>
        </Card>

        <div className="space-y-4 lg:col-span-5">
          <Card>
            <CardHeader>
              <CardTitle>Personal Details</CardTitle>
              <CardDescription>Basic profile details used across appointments and records.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <Input id="full-name" defaultValue="Aarav Sharma" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" defaultValue="1992-08-14" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="aarav.sharma@email.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+1 800 222 0192" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  className="h-20"
                  defaultValue="1540 Greenwood Ave, Austin, TX 78701"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Personal Details</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Medical & Emergency Info</CardTitle>
              <CardDescription>
                Share allergies and emergency contact details with your care team.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="allergies">Known Allergies</Label>
                  <Input id="allergies" defaultValue="Penicillin" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="conditions">Chronic Conditions</Label>
                  <Input id="conditions" defaultValue="Hypertension" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="emergency-name">Emergency Contact Name</Label>
                  <Input id="emergency-name" defaultValue="Neha Sharma" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="emergency-phone">Emergency Contact Phone</Label>
                  <Input id="emergency-phone" defaultValue="+1 800 222 1192" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="relationship">Relationship</Label>
                <Select defaultValue="spouse">
                  <SelectTrigger id="relationship">
                    <SelectValue placeholder="Select relationship" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spouse">Spouse</SelectItem>
                    <SelectItem value="parent">Parent</SelectItem>
                    <SelectItem value="sibling">Sibling</SelectItem>
                    <SelectItem value="friend">Friend</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Save Medical Info</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
