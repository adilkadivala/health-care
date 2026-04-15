import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IconSettingsAutomation } from "@tabler/icons-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function ConfigPage() {
  return (
    <div className="flex flex-col gap-6 px-4 lg:px-6 py-6 pt-0">
      <div className="flex items-center gap-4 border-b pb-4">
        <div className="p-3 bg-stone-100 dark:bg-stone-800 rounded-xl">
          <IconSettingsAutomation className="size-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">System Configuration</h1>
          <p className="text-muted-foreground text-sm">Fine-tune platform mechanics and integrations.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Feature Flags</CardTitle>
            <CardDescription>Enable or disable experimental modes.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="beta-portal" className="flex flex-col gap-1">
                <span>New Patient Portal</span>
                <span className="font-normal text-xs text-muted-foreground">Use the new v2 UI for patients</span>
              </Label>
              <Switch id="beta-portal" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="ai-triage" className="flex flex-col gap-1">
                <span>AI Triage Assistant</span>
                <span className="font-normal text-xs text-muted-foreground">Allow AI to prioritize walk-ins</span>
              </Label>
              <Switch id="ai-triage" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sms-alerts" className="flex flex-col gap-1">
                <span>SMS Notifications</span>
                <span className="font-normal text-xs text-muted-foreground">Send SMS for appointments</span>
              </Label>
              <Switch id="sms-alerts" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API Configuration</CardTitle>
            <CardDescription>Manage third-party connections.</CardDescription>
          </CardHeader>
          <CardContent className="h-[200px] flex items-center justify-center">
            <p className="text-muted-foreground text-sm">OAuth / Webhooks Config</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
