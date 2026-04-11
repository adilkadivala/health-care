import {
  Activity,
  CalendarDays,
  CreditCard,
  FileText,
  HelpCircle,
  LayoutDashboard,
  Pill,
  Search,
  Settings,
  Stethoscope,
  UserRound,
  Users,
} from "lucide-react"

export type DashboardKey = "admin" | "doctor" | "patient" | "pharmacy"

type SidebarLink = {
  title: string
  url: string
  icon: React.ComponentType<{ className?: string }>
}

type DocumentLink = {
  name: string
  url: string
  icon: React.ComponentType<{ className?: string }>
}

export type DashboardSidebarConfig = {
  key: DashboardKey
  label: string
  user: {
    name: string
    email: string
    avatar: string
  }
  navMain: SidebarLink[]
  navSecondary: SidebarLink[]
  documents: DocumentLink[]
}

export const dashboardSidebarConfig = {} as Record<
  DashboardKey,
  DashboardSidebarConfig
>

export function getDashboardKeyFromPathname(pathname: string): DashboardKey {
  const segment = pathname.split("/").filter(Boolean)[0]

  if (segment === "doctor" || segment === "patient" || segment === "pharmacy") {
    return segment
  }

  return "admin"
}

export function getDashboardConfig(pathname: string) {
  return dashboardSidebarConfig[getDashboardKeyFromPathname(pathname)]
}

export function getPageTitle(pathname: string) {
  const segments = pathname.split("/").filter(Boolean)

  if (segments.length === 0) {
    return "Dashboard"
  }

  const lastSegment = segments[segments.length - 1]

  return lastSegment
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}
