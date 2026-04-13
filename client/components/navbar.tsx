import { IconHeartbeat } from "@tabler/icons-react"
import Link from "next/link"
import React from "react"
import { Button } from "@/components/ui/button"

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
            <IconHeartbeat className="size-5 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight">CareSync</span>
        </div>
        <nav className="hidden gap-6 text-sm font-medium text-muted-foreground md:flex">
          <Link
            href="#features"
            className="transition-colors hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="#solutions"
            className="transition-colors hover:text-primary"
          >
            Solutions
          </Link>
          <Link
            href="#testimonials"
            className="transition-colors hover:text-primary"
          >
            Testimonials
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild className="hidden sm:inline-flex">
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button
            asChild
            className="rounded-full shadow-lg transition-all hover:shadow-primary/25"
          >
            <Link href="/dashboard/patient">Patient Portal &rarr;</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}


