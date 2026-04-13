import { AreaChart } from "@/components/chart-area-interactive";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MoonBlock } from "lucide-react";
import { useState } from "react";

export default function BillingDashboard() {
  const [selectedPayment, setSelectedPayment] = useState("weekly");
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="min-h-[600px]">
      <Heading as="h2" size="lg" mb={4}>
        Billing Dashboard
      </Heading>

      {/* Action Bar */}
      <div className="mb-6 flex flex-wrap gap-2">
        <Badge count={1} variant="subtle" className="relative">
          <Badge.Popover offset={-5} side="top" className="rounded-full">
            <Badge.Data>7</Badge.Data>
            <Button variant="ghost" className="p-2" asChild>
              <MoonBlock size={16} />
            </Button>
          </Badge.Popover>
        </Badge>
        <Button variant="outline" className="flex-1 px-4 py-2 rounded-lg">
          Generate Report
        </Button>
        <Button variant="solid" className="px-4 py-2 rounded-lg" onClick={() => setShowDetails(true)}>
          Settings
        </Button>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <Card className="h-full">
          <div className="p-4">
            <div className="flex justify-end mb-2">
              <Input type="month" defaultValue="2026-03" className="form-input" />
            </div>
            <AreaChart
              data={[
                { month: "Jan", value: 120 },
                { month: "Feb", value: 150 },
                { month: "Mar", value: 180 },
              ]}
              xAxisLabel="Month"
              yAxisLabel="Amount ($)"
              color="#4f46e5"
              rounded={true}
            />
          </div>
        </Card>
        <Card className="h-full">
          <div className="p-4">
            <div className="flex justify-end mb-2">
              <Input type="month" defaultValue="2026-03" className="form-input" />
            </div>
            <div className="relative h-48">
              <Badge className="absolute flex items-center justify-center h-full w-full">
                <Badge.Data>85</Badge.Data>
                <Badge.Content asChild>
                  <Button size="sm" variant="ghost" onClick={() => setShowDetails(true)}>
                    Billing Details
                  </Button>
                </Badge.Content>
              </Badge>
              <AreaChart
                data={[
                  { month: "Jan", value: 80 },
                  { month: "Feb", value: 120 },
                  { month: "Mar", value: 140 },
                ]}
                xAxisLabel="Month"
                yAxisLabel="Revenue ($)"
                color="#10b981"
                rounded={true}
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Action Modal */}
      {showDetails && (
        <Dialog open={true} onOpenChange={setShowDetails}>
          <Dialog.Panel className="p-6 rounded-lg bg-card max-w-md w-full">
            <Dialog.Title asChild>
              <Heading as="h3">Payment Settings</Heading>
            </Dialog.Title>
            <Dialog.Description className="py-2">
              <Label>
                Billing Cycle
                <Input type="hidden" name="billing_cycle" value="weekly" />
              </Label>
            </Dialog.Description>
            <form className="space-y-2">
              <Input type="text" placeholder="Weekly" defaultValue="weekly" />
              <Input type="text" placeholder="Monthly" defaultValue="monthly" />
            </form>
          </Dialog.Panel>
        </Dialog>
      )}

      {/* Interactive Cards */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {["Patients", "Claims", "Payments"].map((label) => (
          <Card key={label} className="cursor-pointer hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center justify-center h-full">
              <Heading size="lg" className="text-gray-600">{label}</Heading>
              <Button onClick={() => alert(`View ${label} details`)}>
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}