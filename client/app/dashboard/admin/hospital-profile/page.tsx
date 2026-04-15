import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { IconBuildingHospital, IconEdit } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"

export default function HospitalProfilePage() {
  return (
    <div className="flex flex-col gap-6 px-4 lg:px-6 py-6 pt-0">
      <div className="flex items-center justify-between pb-4 border-b">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-xl">
            <IconBuildingHospital className="size-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Hospital Profile</h1>
            <p className="text-muted-foreground text-sm">Manage public organization details and branding.</p>
          </div>
        </div>
        <Button className="gap-2">
          <IconEdit className="size-4" /> Edit Details
        </Button>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-1">
          <CardHeader>
            <CardTitle>Logo & Branding</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 items-center">
            <div className="size-32 rounded-full border-4 border-muted flex items-center justify-center bg-secondary font-bold text-3xl">
              H
            </div>
            <Button variant="outline" size="sm">Upload Logo</Button>
          </CardContent>
        </Card>
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Organization Info</CardTitle>
            <CardDescription>Primary public-facing information.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
             <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="font-medium text-muted-foreground">Legal Name</div>
                <div>St. Jude General Hospital</div>
                <div className="font-medium text-muted-foreground">Registration ID</div>
                <div>HOSP-8492-XX</div>
                <div className="font-medium text-muted-foreground">Address</div>
                <div>123 Medical Drive, Health City, ST 90210</div>
                <div className="font-medium text-muted-foreground">Contact Phone</div>
                <div>(555) 123-4567</div>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
