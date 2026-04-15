import React from "react"
import Link from "next/link"
import { IconHeartbeat } from "@tabler/icons-react"

export const Footer = () => {
  return (
    <footer className="border-t bg-card py-12">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded bg-primary/10">
              <IconHeartbeat className="size-4 text-primary" />
            </div>
            <span className="font-bold tracking-tight">CareSync</span>
          </div>
          <p className="pr-4 text-sm leading-relaxed text-muted-foreground">
            Making healthcare management invisible so you can focus on saving
            lives.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Portals</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link
                href="/dashboard/patient"
                className="transition-colors hover:text-primary"
              >
                Patient App
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/doctor"
                className="transition-colors hover:text-primary"
              >
                Doctor Workspace
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/pharmacy"
                className="transition-colors hover:text-primary"
              >
                Pharmacy POS
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/admin"
                className="transition-colors hover:text-primary"
              >
                Admin Hub
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="#" className="transition-colors hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-colors hover:text-primary">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-colors hover:text-primary">
                Security
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-colors hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="#" className="transition-colors hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-colors hover:text-primary">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-colors hover:text-primary">
                HIPAA Compliance
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-12 max-w-7xl border-t px-4 pt-8 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
        &copy; {new Date().getFullYear()} CareSync Technologies Inc. All rights
        reserved.
      </div>
    </footer>
  )
}