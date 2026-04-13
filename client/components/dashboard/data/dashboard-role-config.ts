import {
  Activity,
  BadgeDollarSign,
  BellRing,
  Building2,
  CalendarDays,
  ClipboardList,
  Clock3,
  FileChartColumnIncreasing,
  FileText,
  FlaskConical,
  LayoutDashboard,
  LifeBuoy,
  PillBottle,
  ReceiptText,
  Settings2,
  ShieldCheck,
  Signature,
  UserPlus,
  UserRound,
  Users,
  WalletCards,
  Workflow,
} from "lucide-react"

import type {
  DashboardRole,
  DashboardRoleDefinition,
} from "./dashboard-types"

export const roleConfigs: Record<DashboardRole, DashboardRoleDefinition> = {
  admin: {
    label: "Admin",
    tagline: "Hospital operations, governance, and performance.",
    user: { name: "Maya Collins", title: "Operations Director", initials: "MC" },
    statusBoard: [
      { label: "Occupancy", value: "82%", note: "ICU holding stable for 6 hours." },
      { label: "Claims queue", value: "118", note: "12 awaiting finance clearance." },
      { label: "Critical alerts", value: "3", note: "All assigned to duty leads." },
    ],
    theme: {
      shell:
        "bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.14),_transparent_38%),linear-gradient(180deg,_rgba(15,23,42,0.03),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_32%),linear-gradient(180deg,_rgba(15,23,42,0.4),_rgba(2,6,23,0.8))]",
      frame: "border-slate-200/80 bg-white/85 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.45)] dark:border-white/10 dark:bg-slate-950/75",
      panel: "border-slate-200/70 bg-white/90 dark:border-white/10 dark:bg-slate-950/80",
      panelAlt: "border-emerald-200/60 bg-emerald-50/80 dark:border-emerald-500/20 dark:bg-emerald-950/20",
      hero:
        "from-emerald-600/15 via-white to-sky-100/60 dark:from-emerald-500/15 dark:via-slate-950 dark:to-slate-900",
      activeNav:
        "bg-emerald-600 text-white shadow-[0_16px_30px_-20px_rgba(5,150,105,0.9)]",
      activeNavText: "text-white",
      pill: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
      primaryButton:
        "bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400",
      secondaryButton:
        "border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-500/30 dark:text-emerald-200 dark:hover:bg-emerald-500/10",
      chip: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
      chipBorder: "border-emerald-200 dark:border-emerald-500/20",
      dot: "bg-emerald-500",
      chartPrimary: "#059669",
      chartSecondary: "#0ea5e9",
    },
    nav: {
      main: [
        { title: "Overview", href: "/dashboard/admin", icon: LayoutDashboard },
        { title: "Users", href: "/dashboard/admin/users", icon: Users },
        { title: "Audit", href: "/dashboard/admin/audit", icon: ShieldCheck },
        {
          title: "Financial Report",
          href: "/dashboard/admin/financial-report",
          icon: FileChartColumnIncreasing,
        },
        {
          title: "Hospital Profile",
          href: "/dashboard/admin/hospital-profile",
          icon: Building2,
        },
        { title: "Activity", href: "/dashboard/admin/activity", icon: Activity },
        { title: "Reviews", href: "/dashboard/admin/reviews", icon: BellRing },
      ],
      secondary: [
        { title: "Config", href: "/dashboard/admin/config", icon: Workflow },
        { title: "Settings", href: "/dashboard/admin/settings", icon: Settings2 },
        { title: "Help", href: "/dashboard/admin/help", icon: LifeBuoy },
      ],
    },
  },
  doctor: {
    label: "Doctor",
    tagline: "Clinical flow, charting, and revenue-ready documentation.",
    user: {
      name: "Dr. Sarah Jenkins",
      title: "Consultant Cardiologist",
      initials: "SJ",
    },
    statusBoard: [
      { label: "Patients waiting", value: "9", note: "3 require escalated review." },
      { label: "Unsigned charts", value: "6", note: "Billing team is blocked on 2 claims." },
      { label: "Priority labs", value: "4", note: "Two flagged as critical." },
    ],
    theme: {
      shell:
        "bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.12),_transparent_35%),linear-gradient(180deg,_rgba(245,245,244,1),_rgba(255,255,255,1))] dark:bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.16),_transparent_30%),linear-gradient(180deg,_rgba(9,9,11,1),_rgba(2,6,23,1))]",
      frame: "border-stone-200/80 bg-white/85 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.45)] dark:border-white/10 dark:bg-zinc-950/75",
      panel: "border-stone-200/80 bg-white/90 dark:border-white/10 dark:bg-zinc-950/80",
      panelAlt: "border-sky-200/70 bg-sky-50/80 dark:border-sky-500/20 dark:bg-sky-950/20",
      hero:
        "from-sky-600/18 via-white to-cyan-100/70 dark:from-sky-500/18 dark:via-zinc-950 dark:to-slate-900",
      activeNav:
        "bg-sky-600 text-white shadow-[0_16px_30px_-20px_rgba(2,132,199,0.9)]",
      activeNavText: "text-white",
      pill: "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
      primaryButton:
        "bg-sky-600 text-white hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400",
      secondaryButton:
        "border-sky-200 text-sky-700 hover:bg-sky-50 dark:border-sky-500/30 dark:text-sky-200 dark:hover:bg-sky-500/10",
      chip: "bg-sky-500/10 text-sky-700 dark:text-sky-300",
      chipBorder: "border-sky-200 dark:border-sky-500/20",
      dot: "bg-sky-500",
      chartPrimary: "#0284c7",
      chartSecondary: "#0f766e",
    },
    nav: {
      main: [
        { title: "Overview", href: "/dashboard/doctor", icon: LayoutDashboard },
        { title: "Appointments", href: "/dashboard/doctor/appointments", icon: CalendarDays },
        { title: "Lab Reports", href: "/dashboard/doctor/lab-reports", icon: FlaskConical },
        { title: "Billing", href: "/dashboard/doctor/billing", icon: BadgeDollarSign },
        {
          title: "Authorize Signature",
          href: "/dashboard/doctor/authorize-signature",
          icon: Signature,
        },
        { title: "Activity", href: "/dashboard/doctor/activity", icon: Activity },
      ],
      secondary: [
        { title: "Profile", href: "/dashboard/doctor/profile", icon: UserRound },
        { title: "Settings", href: "/dashboard/doctor/settings", icon: Settings2 },
        { title: "Help", href: "/dashboard/doctor/help", icon: LifeBuoy },
      ],
    },
  },
  patient: {
    label: "Patient",
    tagline: "Care timeline, documents, and personal health tasks.",
    user: { name: "Aarav Sharma", title: "Care plan member", initials: "AS" },
    statusBoard: [
      { label: "Next visit", value: "Apr 14", note: "Cardiology follow-up at 10:30 AM." },
      { label: "Unread reports", value: "2", note: "One new thyroid profile posted." },
      { label: "Profile score", value: "92%", note: "Insurance copy still pending." },
    ],
    theme: {
      shell:
        "bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_32%),linear-gradient(180deg,_rgba(248,250,252,1),_rgba(255,255,255,1))] dark:bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),_transparent_30%),linear-gradient(180deg,_rgba(9,9,11,1),_rgba(2,6,23,1))]",
      frame: "border-emerald-200/80 bg-white/85 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.3)] dark:border-white/10 dark:bg-zinc-950/75",
      panel: "border-emerald-200/70 bg-white/90 dark:border-white/10 dark:bg-zinc-950/80",
      panelAlt: "border-emerald-200/70 bg-emerald-50/90 dark:border-emerald-500/20 dark:bg-emerald-950/20",
      hero:
        "from-emerald-600/18 via-white to-lime-100/70 dark:from-emerald-500/18 dark:via-zinc-950 dark:to-slate-900",
      activeNav:
        "bg-emerald-600 text-white shadow-[0_16px_30px_-20px_rgba(5,150,105,0.9)]",
      activeNavText: "text-white",
      pill: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
      primaryButton:
        "bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400",
      secondaryButton:
        "border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-500/30 dark:text-emerald-200 dark:hover:bg-emerald-500/10",
      chip: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
      chipBorder: "border-emerald-200 dark:border-emerald-500/20",
      dot: "bg-emerald-500",
      chartPrimary: "#059669",
      chartSecondary: "#65a30d",
    },
    nav: {
      main: [
        { title: "Overview", href: "/dashboard/patient", icon: LayoutDashboard },
        { title: "Appointments", href: "/dashboard/patient/appointment", icon: CalendarDays },
        { title: "Lab Report", href: "/dashboard/patient/lab-report", icon: FileText },
        { title: "Registration", href: "/dashboard/patient/registration", icon: ClipboardList },
        { title: "Activity", href: "/dashboard/patient/activity", icon: Activity },
      ],
      secondary: [
        { title: "Profile", href: "/dashboard/patient/profile", icon: UserRound },
        { title: "Settings", href: "/dashboard/patient/settings", icon: Settings2 },
        { title: "Help", href: "/dashboard/patient/help", icon: LifeBuoy },
      ],
    },
  },
  pharmacy: {
    label: "Pharmacy",
    tagline: "Verification, dispense flow, stock pressure, and handover.",
    user: { name: "Zara Malik", title: "Lead Pharmacist", initials: "ZM" },
    statusBoard: [
      { label: "Ready to dispense", value: "24", note: "7 urgent orders in queue." },
      { label: "Low stock", value: "12", note: "Three require distributor contact." },
      { label: "Near expiry", value: "5", note: "Prioritize before evening shift." },
    ],
    theme: {
      shell:
        "bg-[linear-gradient(180deg,_rgba(17,24,39,1),_rgba(28,25,23,1))] text-zinc-50 dark:bg-[linear-gradient(180deg,_rgba(17,24,39,1),_rgba(9,9,11,1))]",
      frame: "border-white/10 bg-white/5 shadow-[0_20px_50px_-32px_rgba(245,158,11,0.35)] backdrop-blur",
      panel: "border-amber-200/70 bg-white/95 text-zinc-900 dark:border-white/10 dark:bg-zinc-950/88 dark:text-zinc-50",
      panelAlt: "border-amber-300/30 bg-amber-500/10 text-zinc-50 dark:border-amber-400/20 dark:bg-amber-500/10",
      hero:
        "from-amber-500/20 via-white to-orange-100/60 dark:from-amber-500/14 dark:via-zinc-950 dark:to-zinc-900",
      activeNav:
        "bg-amber-500 text-zinc-950 shadow-[0_16px_30px_-20px_rgba(245,158,11,0.9)]",
      activeNavText: "text-zinc-950",
      pill: "bg-amber-500/15 text-amber-200 dark:bg-amber-500/15 dark:text-amber-200",
      primaryButton:
        "bg-amber-500 text-zinc-950 hover:bg-amber-400 dark:bg-amber-500 dark:hover:bg-amber-400",
      secondaryButton:
        "border-amber-300/40 text-amber-100 hover:bg-amber-500/10 dark:border-amber-500/30 dark:text-amber-100",
      chip: "bg-amber-500/12 text-amber-200",
      chipBorder: "border-amber-300/20",
      dot: "bg-amber-400",
      chartPrimary: "#f59e0b",
      chartSecondary: "#f97316",
    },
    nav: {
      main: [
        { title: "Overview", href: "/dashboard/pharmacy", icon: LayoutDashboard },
        { title: "Orders", href: "/dashboard/pharmacy/orders", icon: ReceiptText },
        { title: "Inventory", href: "/dashboard/pharmacy/inventory", icon: PillBottle },
        { title: "History", href: "/dashboard/pharmacy/history", icon: Clock3 },
        { title: "Activity", href: "/dashboard/pharmacy/activity", icon: Activity },
      ],
      secondary: [
        { title: "Settings", href: "/dashboard/pharmacy/settings", icon: Settings2 },
        { title: "Help", href: "/dashboard/pharmacy/help", icon: LifeBuoy },
      ],
    },
  },
  reception: {
    label: "Reception",
    tagline: "Front-desk intake, queue flow, appointments, and payments.",
    user: { name: "Riya Kapoor", title: "Front Desk Lead", initials: "RK" },
    statusBoard: [
      { label: "Lobby wait", value: "14 min", note: "Two walk-ins ahead of schedule." },
      { label: "Check-ins due", value: "11", note: "3 missing payer documents." },
      { label: "Desk collections", value: "$9.4k", note: "71% of daily target reached." },
    ],
    theme: {
      shell:
        "bg-[radial-gradient(circle_at_top_right,_rgba(251,146,60,0.16),_transparent_34%),linear-gradient(180deg,_rgba(255,247,237,1),_rgba(255,255,255,1))] dark:bg-[radial-gradient(circle_at_top_right,_rgba(251,146,60,0.16),_transparent_32%),linear-gradient(180deg,_rgba(17,24,39,1),_rgba(2,6,23,1))]",
      frame: "border-orange-200/80 bg-white/85 shadow-[0_20px_50px_-32px_rgba(249,115,22,0.3)] dark:border-white/10 dark:bg-slate-950/75",
      panel: "border-orange-200/70 bg-white/92 dark:border-white/10 dark:bg-slate-950/80",
      panelAlt: "border-orange-200/70 bg-orange-50/90 dark:border-orange-500/20 dark:bg-orange-950/20",
      hero:
        "from-orange-500/18 via-white to-amber-100/80 dark:from-orange-500/16 dark:via-slate-950 dark:to-slate-900",
      activeNav:
        "bg-orange-500 text-white shadow-[0_16px_30px_-20px_rgba(249,115,22,0.9)]",
      activeNavText: "text-white",
      pill: "bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-200",
      primaryButton:
        "bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-500 dark:hover:bg-orange-400",
      secondaryButton:
        "border-orange-200 text-orange-700 hover:bg-orange-50 dark:border-orange-500/30 dark:text-orange-200 dark:hover:bg-orange-500/10",
      chip: "bg-orange-500/10 text-orange-700 dark:text-orange-200",
      chipBorder: "border-orange-200 dark:border-orange-500/20",
      dot: "bg-orange-500",
      chartPrimary: "#f97316",
      chartSecondary: "#fb7185",
    },
    nav: {
      main: [
        { title: "Overview", href: "/dashboard/reception", icon: LayoutDashboard },
        { title: "Check In", href: "/dashboard/reception/check-in", icon: UserPlus },
        { title: "Appointments", href: "/dashboard/reception/appointments", icon: CalendarDays },
        { title: "Queue", href: "/dashboard/reception/queue", icon: ClipboardList },
        { title: "Billing", href: "/dashboard/reception/billing", icon: WalletCards },
      ],
      secondary: [
        { title: "Settings", href: "/dashboard/reception/settings", icon: Settings2 },
        { title: "Help", href: "/dashboard/reception/help", icon: LifeBuoy },
      ],
    },
  },
}
