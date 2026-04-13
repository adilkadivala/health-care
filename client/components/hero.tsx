import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { IconArrowRight, IconHeartbeat, IconStethoscope, IconShieldLock, IconPill } from "@tabler/icons-react"

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 sm:pt-32 sm:pb-40">
      <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Badge
          variant="outline"
          className="mb-6 rounded-full px-4 py-1.5 text-sm font-medium"
        >
          🚀 Introducing CareSync Portal v2.0
        </Badge>
        <h1 className="mx-auto mb-8 max-w-4xl text-5xl leading-tight font-extrabold tracking-tight text-foreground md:text-7xl">
          Healthcare management, <br className="hidden md:block" />
          <span className="text-primary">
            refined and effortless.
          </span>
        </h1>
        <p className="mx-auto mt-6 mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          We bring doctors, patients, and hospital administrators together
          through one unified, beautiful platform. Say goodbye to fragmented
          health records.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="h-12 w-full gap-2 rounded-full px-8 text-base shadow-sm transition-all sm:w-auto"
            asChild
          >
            <Link href="/dashboard/admin">
              Explore Admin Demo <IconArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 w-full rounded-full border-2 px-8 text-base sm:w-auto"
            asChild
          >
            <Link href="/dashboard/doctor">Doctor Demo</Link>
          </Button>
        </div>

        <div className="mt-20 border-t border-border/50 pt-10">
          <p className="mb-6 text-sm font-medium tracking-wider text-muted-foreground uppercase">
            Trusted by innovative healthcare providers
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50 grayscale transition-all duration-500 hover:grayscale-0">
            {/* Mock Logos */}
            <div className="flex items-center gap-2 text-xl font-bold text-foreground">
              <IconHeartbeat /> MedicoCore
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-foreground">
              <IconPill /> PharmaPlus
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-foreground">
              <IconStethoscope /> Care Clinics
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-foreground">
              <IconShieldLock /> SecureHealth
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

