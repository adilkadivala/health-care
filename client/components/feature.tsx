import { Card, CardContent, } from "@/components/ui/card";
import {  IconStethoscope,IconCalendarEvent, IconShieldLock, IconPill } from "@tabler/icons-react"
import Link from "next/link";


export const Feature = () => {
  return (
    <section id="features" className="border-y bg-muted/50 py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-2 text-sm font-semibold tracking-wider text-primary uppercase">
            Designed for Scale
          </h2>
          <h3 className="text-3xl font-bold tracking-tight md:text-5xl">
            Everything you need, <br className="hidden md:inline" /> in a clean
            architecture.
          </h3>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="group overflow-hidden bg-card shadow-sm border transition-colors hover:border-primary/50 md:col-span-2">
            <CardContent className="p-8 pb-0">
              <IconStethoscope className="mb-6 size-10 text-emerald-500 transition-transform group-hover:-translate-y-1" />
              <h4 className="mb-2 text-2xl font-bold">Doctor Workspaces</h4>
              <p className="mb-8 text-muted-foreground">
                An intuitive and distraction-free workspace for doctors to
                review appointments, lab reports, and sign digital clinical
                notes flawlessly.
              </p>
              <div className="relative h-32 w-full rounded-t-xl border-x border-t border-border bg-background p-4 shadow-inner">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-100" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-1/3 rounded bg-muted" />
                    <div className="h-3 w-1/2 rounded bg-muted/50" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden bg-card shadow-sm border transition-colors hover:border-primary/50">
            <CardContent className="flex h-full flex-col p-8 pt-8">
              <IconCalendarEvent className="mb-6 size-10 text-indigo-500 transition-transform group-hover:-translate-y-1" />
              <h4 className="mb-2 text-2xl font-bold">Smart Scheduling</h4>
              <p className="text-muted-foreground">
                Patients can book, reschedule, and track their timelines
                actively. No more phone queues.
              </p>
              <div className="mt-auto flex gap-2 pt-8">
                <div className="h-8 w-8 rounded-md bg-indigo-100" />
                <div className="h-8 w-8 rounded-md bg-indigo-100" />
                <div className="h-8 w-8 rounded-md bg-indigo-600 shadow-md" />
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-card shadow-sm border transition-colors hover:border-primary/50">
            <CardContent className="p-8">
              <IconShieldLock className="mb-6 size-10 text-rose-500 transition-transform group-hover:-translate-y-1" />
              <h4 className="mb-2 text-2xl font-bold">Bank-grade Security</h4>
              <p className="mb-4 text-muted-foreground">
                HIPAA compliant data storage and audit trails for everything.
              </p>
              <Link
                href="/dashboard/admin/audit"
                className="text-sm font-medium text-primary hover:underline"
              >
                View Audit Demo &rarr;
              </Link>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden bg-card shadow-sm border transition-colors hover:border-primary/50 md:col-span-2">
            <CardContent className="p-8 pb-0">
              <IconPill className="mb-6 size-10 text-amber-500 transition-transform group-hover:-translate-y-1" />
              <h4 className="mb-2 text-2xl font-bold">Integrated Pharmacy</h4>
              <p className="mb-8 max-w-md text-muted-foreground">
                Seamless integration between doctor prescriptions and pharmacy
                dispensing queues. Stock management included.
              </p>
              <div className="flex h-24 w-full items-end gap-2 border-b-0">
                <div className="h-8 w-full rounded-t-md bg-amber-100 dark:bg-amber-900/50" />
                <div className="relative h-16 w-full overflow-hidden rounded-t-md bg-amber-200 dark:bg-amber-800/50">
                  <div className="absolute top-2 right-2 size-2 animate-pulse rounded-full bg-amber-500" />
                </div>
                <div className="h-12 w-full rounded-t-md bg-amber-100 dark:bg-amber-900/50" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}