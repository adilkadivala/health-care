import type {
  DashboardChartPoint,
  DashboardPageDefinition,
} from "./dashboard-types"

export const commonHelpFaq = {
  admin: [
    {
      question: "How do I trace a permissions change?",
      answer:
        "Open audit or config, filter by actor or system area, and review the change detail drawer before approving a rollback.",
    },
    {
      question: "Can I pause billing exports during reconciliation?",
      answer:
        "Yes. Use config to switch billing export mode to manual and complete reconciliation before enabling the nightly push again.",
    },
    {
      question: "Where should hospital-wide alerts be posted?",
      answer:
        "Use the overview action center for urgent notices and duplicate anything operationally critical in help resources for role-based teams.",
    },
  ],
  doctor: [
    {
      question: "How do I finish missing clinical notes faster?",
      answer:
        "Use the authorize signature workflow to stage incomplete charts, then approve them in one pass after checking diagnosis and billing codes.",
    },
    {
      question: "Where can I review urgent labs before rounds?",
      answer:
        "Open lab reports and filter by escalated or critical. The queue stays sorted by due time and flagged result severity.",
    },
    {
      question: "Can I update billing after signing a chart?",
      answer:
        "Yes. Billing keeps signed encounters editable for claim metadata, but clinical findings remain locked once the signature packet is approved.",
    },
  ],
  patient: [
    {
      question: "How do I upload missing registration documents?",
      answer:
        "Open registration, review the checklist, and update the live preview fields before saving. Missing items stay highlighted until completed.",
    },
    {
      question: "Where do I find my latest reports?",
      answer:
        "Lab report keeps the newest documents at the top. Use the search field or filter by ready status to narrow the list.",
    },
    {
      question: "Can I request a follow-up without calling reception?",
      answer:
        "Yes. Use the appointment page primary action to submit a follow-up request and pick your preferred date range.",
    },
  ],
  pharmacy: [
    {
      question: "How do I prioritize urgent medication requests?",
      answer:
        "Use orders or activity and filter by urgent. The table keeps ready-to-dispense items at the top when you choose the urgent lane.",
    },
    {
      question: "Where do I track cold-chain exceptions?",
      answer:
        "Inventory spotlight cards surface cold-chain and expiry risk together so the handover team can act without leaving the board.",
    },
    {
      question: "Can I complete a shift handoff from history?",
      answer:
        "Yes. History includes the batch summary, unresolved verifications, and reorder actions required before sign-off.",
    },
  ],
  reception: [
    {
      question: "How do I move a walk-in patient through check-in quickly?",
      answer:
        "Start from check-in, complete the intake fields, and use the preview panel to confirm department, payer, and document readiness.",
    },
    {
      question: "Where can I see the live front-desk queue?",
      answer:
        "Use queue for arrivals, escorts, and pending desk actions. It stays grouped by next action and expected wait.",
    },
    {
      question: "Can I collect payment before a chart is opened?",
      answer:
        "Yes. Billing allows pre-visit deposits and package collection while still tagging the encounter as awaiting clinical assignment.",
    },
  ],
} as const

export const monthTrend = (primary: number[], secondary: number[]) =>
  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"].map(
    (label, index): DashboardChartPoint => ({
      label,
      primary: primary[index] ?? 0,
      secondary: secondary[index] ?? 0,
    })
  )

export function operationsPage(input: Omit<DashboardPageDefinition, "kind">) {
  return {
    ...input,
    kind: "operations" as const,
  }
}

export function overviewPage(input: Omit<DashboardPageDefinition, "kind">) {
  return {
    ...input,
    kind: "overview" as const,
  }
}

export function activityPage(input: Omit<DashboardPageDefinition, "kind">) {
  return {
    ...input,
    kind: "activity" as const,
  }
}

export function profilePage(input: Omit<DashboardPageDefinition, "kind">) {
  return {
    ...input,
    kind: "profile" as const,
  }
}

export function settingsPage(input: Omit<DashboardPageDefinition, "kind">) {
  return {
    ...input,
    kind: "settings" as const,
  }
}

export function helpPage(input: Omit<DashboardPageDefinition, "kind">) {
  return {
    ...input,
    kind: "help" as const,
  }
}

export function formPage(input: Omit<DashboardPageDefinition, "kind">) {
  return {
    ...input,
    kind: "form" as const,
  }
}
