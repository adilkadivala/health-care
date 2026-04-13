import Link from "next/link"
import {
  IconHeartbeat,
  IconStethoscope,
  IconCalendarEvent,
  IconPill,
  IconChartInfographic,
} from "@tabler/icons-react"

export const Portfolio = () => {
  return (
    <section id="solutions" className="py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 md:flex-row">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">
              One Platform.
              <br /> Four Tailored Portals.
            </h2>
            <p className="text-lg text-muted-foreground">
              We don't believe in one-size-fits-all. Every role gets a custom
              interface optimized for minimal clicks and maximum efficiency.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/dashboard/patient"
                className="group flex items-center gap-3 rounded-xl border p-4 transition-all hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20"
              >
                <div className="rounded-lg bg-emerald-100 p-2 transition-transform group-hover:scale-110 dark:bg-emerald-900/50">
                  <IconHeartbeat className="size-5 text-emerald-600" />
                </div>
                <span className="font-semibold">Patient Portal</span>
              </Link>
              <Link
                href="/dashboard/doctor"
                className="group flex items-center gap-3 rounded-xl border p-4 transition-all hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"
              >
                <div className="rounded-lg bg-indigo-100 p-2 transition-transform group-hover:scale-110 dark:bg-indigo-900/50">
                  <IconStethoscope className="size-5 text-indigo-600" />
                </div>
                <span className="font-semibold">Doctor Portal</span>
              </Link>
              <Link
                href="/dashboard/reception"
                className="group flex items-center gap-3 rounded-xl border p-4 transition-all hover:border-sky-500 hover:bg-sky-50/50 dark:hover:bg-sky-950/20"
              >
                <div className="rounded-lg bg-sky-100 p-2 transition-transform group-hover:scale-110 dark:bg-sky-900/50">
                  <IconCalendarEvent className="size-5 text-sky-600" />
                </div>
                <span className="font-semibold">Reception Desk</span>
              </Link>
              <Link
                href="/dashboard/pharmacy"
                className="group flex items-center gap-3 rounded-xl border p-4 transition-all hover:border-amber-500 hover:bg-amber-50/50 dark:hover:bg-amber-950/20"
              >
                <div className="rounded-lg bg-amber-100 p-2 transition-transform group-hover:scale-110 dark:bg-amber-900/50">
                  <IconPill className="size-5 text-amber-600" />
                </div>
                <span className="font-semibold">Pharmacy Area</span>
              </Link>
            </div>
          </div>
          <div className="relative flex aspect-square w-full flex-1 items-center justify-center overflow-hidden rounded-2xl border bg-muted/30 p-8 shadow-sm md:aspect-[4/3]">
            <div className="bg-grid-white/10 dark:bg-grid-white/5 absolute inset-0 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0))]" />
            <IconChartInfographic className="size-48 text-muted-foreground/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
