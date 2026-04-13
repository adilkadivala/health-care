import type { LucideIcon } from "lucide-react"

export type DashboardRole =
  | "admin"
  | "doctor"
  | "patient"
  | "pharmacy"
  | "reception"

export type DashboardPageKind =
  | "overview"
  | "operations"
  | "activity"
  | "profile"
  | "settings"
  | "help"
  | "form"

export type DashboardNavItem = {
  title: string
  href: string
  icon: LucideIcon
  badge?: string
}

export type DashboardMetric = {
  label: string
  value: string
  delta: string
  note: string
  tone?: "neutral" | "success" | "warning" | "danger" | "info"
}

export type DashboardChartPoint = {
  label: string
  primary: number
  secondary: number
}

export type DashboardTableColumn =
  | "subject"
  | "owner"
  | "category"
  | "status"
  | "date"
  | "amount"

export type DashboardTableRow = {
  id: string
  subject: string
  owner: string
  category: string
  status: string
  date: string
  amount?: string
  detail: string
}

export type DashboardSpotlightItem = {
  title: string
  description: string
  meta: string
  status: string
  action: string
}

export type DashboardTimelineItem = {
  id: string
  title: string
  description: string
  actor: string
  time: string
  lane: string
  status: string
}

export type DashboardFormField = {
  key: string
  label: string
  type: "text" | "textarea" | "select" | "date" | "number"
  initial: string
  options?: string[]
}

export type DashboardSettingsItem = {
  key: string
  label: string
  description: string
  kind: "switch" | "select"
  initial: boolean | string
  options?: string[]
}

export type DashboardSettingsGroup = {
  title: string
  items: DashboardSettingsItem[]
}

export type DashboardFaqItem = {
  question: string
  answer: string
}

export type DashboardPageDefinition = {
  title: string
  description: string
  kind: DashboardPageKind
  hero: {
    eyebrow: string
    headline: string
    summary: string
    primaryAction: string
    secondaryAction: string
  }
  metrics: DashboardMetric[]
  chart?: {
    title: string
    description: string
    primaryLabel: string
    secondaryLabel: string
    data: DashboardChartPoint[]
  }
  table?: {
    title: string
    description: string
    searchPlaceholder: string
    filterOptions: string[]
    detailCta: string
    columns: DashboardTableColumn[]
    rows: DashboardTableRow[]
  }
  spotlight?: {
    title: string
    description: string
    items: DashboardSpotlightItem[]
  }
  timeline?: {
    title: string
    description: string
    filters: string[]
    items: DashboardTimelineItem[]
  }
  form?: {
    title: string
    description: string
    previewTitle: string
    checklist: string[]
    fields: DashboardFormField[]
  }
  settings?: {
    title: string
    description: string
    groups: DashboardSettingsGroup[]
  }
  faq?: {
    title: string
    description: string
    items: DashboardFaqItem[]
  }
}

export type DashboardRoleTheme = {
  shell: string
  frame: string
  panel: string
  panelAlt: string
  hero: string
  activeNav: string
  activeNavText: string
  pill: string
  primaryButton: string
  secondaryButton: string
  chip: string
  chipBorder: string
  dot: string
  chartPrimary: string
  chartSecondary: string
}

export type DashboardRoleDefinition = {
  label: string
  tagline: string
  user: {
    name: string
    title: string
    initials: string
  }
  statusBoard: {
    label: string
    value: string
    note: string
  }[]
  theme: DashboardRoleTheme
  nav: {
    main: DashboardNavItem[]
    secondary: DashboardNavItem[]
  }
}
