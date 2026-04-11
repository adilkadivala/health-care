"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { Icon } from "@tabler/icons-react"
import {
  IconCalendarEvent,
  IconCreditCard,
  IconDashboard,
  IconHelp,
  IconInnerShadowTop,
  IconActivity,
  IconFileText,
  IconMedicineSyrup,
  IconNotes,
  IconReport,
  IconEye,
  IconSearch,
  IconSettings,
  IconStethoscope,
  IconUser,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

type DashboardKey = "admin" | "doctor" | "patient" | "pharmacy"

type SidebarLink = {
  title: string
  url: string
  icon: Icon
}

type DashboardSidebarConfig = {
  key: DashboardKey
  label: string
  user: {
    name: string
    email: string
    avatar: string
  }
  navMain: SidebarLink[]
  navSecondary: SidebarLink[]
}

const dashboardConfig: Record<DashboardKey, DashboardSidebarConfig> = {
  admin: {
    key: "admin",
    label: "Admin",
    user: {
      name: "Admin User",
      email: "admin@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      { title: "Overview", url: "/dashboard/admin", icon: IconDashboard },
      { title: "Users", url: "/dashboard/admin/users", icon: IconUsers },
      { title: "Audit", url: "/dashboard/admin/audit", icon: IconCreditCard },
      {
        title: "Activity",
        url: "/dashboard/admin/activity",
        icon: IconActivity,
      },
    ],
    navSecondary: [
      {
        title: "Settings",
        url: "/dashboard/admin/settings",
        icon: IconSettings,
      },
      { title: "Help", url: "/dashboard/admin/help", icon: IconHelp },
    ],
  },
  doctor: {
    key: "doctor",
    label: "Doctor",
    user: {
      name: "Doctor User",
      email: "doctor@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      { title: "Overview", url: "/dashboard/doctor", icon: IconDashboard },
      {
        title: "Appointments",
        url: "/dashboard/doctor/appointments",
        icon: IconCalendarEvent,
      },
      {
        title: "Lab Reports",
        url: "/dashboard/doctor/lab-reports",
        icon: IconFileText,
      },
      { title: "Profile", url: "/dashboard/doctor/profile", icon: IconUser },
      {
        title: "Activity",
        url: "/dashboard/doctor/activity",
        icon: IconActivity,
      },
    ],
    navSecondary: [
      {
        title: "Settings",
        url: "/dashboard/doctor/settings",
        icon: IconSettings,
      },
      { title: "Help", url: "/dashboard/doctor/help", icon: IconHelp },
    ],
  },
  patient: {
    key: "patient",
    label: "Patient",
    user: {
      name: "Patient User",
      email: "patient@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      { title: "Overview", url: "/dashboard/patient", icon: IconDashboard },
      {
        title: "Appointments",
        url: "/dashboard/patient/appointment",
        icon: IconCalendarEvent,
      },
      {
        title: "Lab Reports",
        url: "/dashboard/patient/lab-report",
        icon: IconFileText,
      },
      { title: "Profile", url: "/dashboard/patient/profile", icon: IconUser },
      {
        title: "Registration",
        url: "/dashboard/patient/registration",
        icon: IconActivity,
      },
      {
        title: "Activity",
        url: "/dashboard/patient/activity",
        icon: IconActivity,
      },

    ],
    navSecondary: [
      {
        title: "Settings",
        url: "/dashboard/patient/settings",
        icon: IconSettings,
      },
      { title: "Help", url: "/dashboard/patient/help", icon: IconHelp },
    ],
  },
  pharmacy: {
    key: "pharmacy",
    label: "Pharmacy",
    user: {
      name: "Pharmacy User",
      email: "pharmacy@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      { title: "Overview", url: "/dashboard/pharmacy", icon: IconDashboard },
      {
        title: "Orders",
        url: "/dashboard/pharmacy/orders",
        icon: IconFileText,
      },
      {
        title: "Activity",
        url: "/dashboard/pharmacy/activity",
        icon: IconActivity,
      },
      {
        title: "Inventory",
        url: "/dashboard/pharmacy/inventory",
        icon: IconFileText,
      },
      { title: "Orders", url: "/dashboard/pharmacy/orders", icon: IconUsers },
    ],
    navSecondary: [
      {
        title: "Settings",
        url: "/dashboard/pharmacy/settings",
        icon: IconSettings,
      },
      { title: "Help", url: "/dashboard/pharmacy/help", icon: IconHelp },
    ],
  },
}

function getDashboardKey(pathname: string): DashboardKey {
  const firstSegment = pathname.split("/").filter(Boolean)[1]

  if (
    firstSegment === "admin" ||
    firstSegment === "doctor" ||
    firstSegment === "patient" ||
    firstSegment === "pharmacy"
  ) {
    return firstSegment
  }

  return "patient"
}

export function getDashboardConfig(pathname: string) {
  return dashboardConfig[getDashboardKey(pathname)]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const data = getDashboardConfig(pathname)

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <Link href={data.navMain[0]?.url ?? "/"}>
                <IconInnerShadowTop className="size-5!" />
                <span className="text-base font-semibold">
                  {data.label} Panel
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
