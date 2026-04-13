import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { IconSignature } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function AuthorizeSignaturePage() {
  return (
    <div className="flex flex-col gap-6 px-4 lg:px-6 py-6 pt-0">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-xl">
            <IconSignature className="size-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Authorize Signature</h1>
            <p className="text-muted-foreground text-sm">Review notes and reports requiring your digital sign-off.</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Pending Documents</CardTitle>
              <CardDescription>Select documents to apply signature.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { id: "DOC-2024-81", type: "Discharge Summary", pt: "Alice Smith", urgent: true },
                  { id: "DOC-2024-82", type: "Lab Request", pt: "Bob Jones", urgent: false },
                  { id: "DOC-2024-83", type: "Prescription Refill", pt: "Charlie Brown", urgent: false },
                ].map((doc, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-sm transition-shadow">
                    <Checkbox id={doc.id} className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor={doc.id} className="text-base font-semibold cursor-pointer">
                        {doc.type} - {doc.pt}
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">Document ID: {doc.id}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {doc.urgent && <span className="bg-destructive/10 text-destructive text-xs font-semibold px-2 py-1 rounded">Urgent</span>}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">Review</Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl h-[80vh] flex flex-col">
                          <DialogHeader>
                            <DialogTitle>{doc.type}</DialogTitle>
                            <DialogDescription>Patient: {doc.pt}</DialogDescription>
                          </DialogHeader>
                          <div className="flex-1 bg-muted/50 rounded flex items-center justify-center border font-mono text-muted-foreground">
                            Document Viewer Interface
                          </div>
                          <div className="flex justify-between items-center mt-4">
                             <Button variant="outline">Reject</Button>
                             <Button>Sign Document</Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="bg-muted/20 border-t mt-4 flex items-center justify-between p-4">
              <span className="text-sm text-muted-foreground">3 documents selected</span>
              <Button>Sign All Selected</Button>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Signature Settings</CardTitle>
            </CardHeader>
            <CardContent className="h-[200px] flex items-center justify-center">
               <Button variant="secondary" className="w-full h-full border-dashed bg-transparent border-2">
                  Update Digital Key
               </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
