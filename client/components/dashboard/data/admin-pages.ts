import type { DashboardPageDefinition } from "./dashboard-types"
import {
  commonHelpFaq,
  helpPage,
  monthTrend,
  operationsPage,
  overviewPage,
  profilePage,
  settingsPage,
  activityPage,
} from "./dashboard-helpers"

export const adminPages: Record<string, DashboardPageDefinition> = {
  overview: overviewPage({
    title: "Admin Overview",
    description:
      "Control center for staffing, revenue, compliance, and hospital-wide delivery.",
    hero: {
      eyebrow: "Operations pulse",
      headline: "Everything critical is visible before it becomes urgent.",
      summary:
        "Track occupancy, finance pressure, and policy drift from one board without jumping between separate tools.",
      primaryAction: "Open executive brief",
      secondaryAction: "Share daily digest",
    },
    metrics: [
      {
        label: "Bed occupancy",
        value: "82%",
        delta: "+4.2%",
        note: "Driven by elective recovery and cardiology intake.",
        tone: "info",
      },
      {
        label: "Recovered revenue",
        value: "$412k",
        delta: "+7.9%",
        note: "Week-to-date collections are ahead of forecast.",
        tone: "success",
      },
      {
        label: "Pending claims",
        value: "118",
        delta: "-12",
        note: "Coding backlog is improving after evening review.",
        tone: "warning",
      },
      {
        label: "Policy exceptions",
        value: "3",
        delta: "Needs review",
        note: "Two identity audit mismatches and one export override.",
        tone: "danger",
      },
    ],
    chart: {
      title: "Operational trend",
      description:
        "Admissions versus cleared claims over the last eight months.",
      primaryLabel: "Admissions",
      secondaryLabel: "Cleared claims",
      data: monthTrend(
        [132, 141, 147, 158, 166, 172, 181, 188],
        [108, 114, 121, 129, 136, 149, 154, 168]
      ),
    },
    spotlight: {
      title: "Executive actions",
      description:
        "Short-cycle tasks that need administrative approval today.",
      items: [
        {
          title: "Approve payer dispute packet",
          description:
            "Three cardiology denials need executive counter-sign.",
          meta: "Due in 2 hours",
          status: "Finance",
          action: "Review packet",
        },
        {
          title: "Publish ICU surge note",
          description:
            "Push staffing and throughput guidance to clinical leads.",
          meta: "Draft ready",
          status: "Comms",
          action: "Send update",
        },
        {
          title: "Resolve access exception",
          description:
            "New pharmacy supervisor still lacks controlled-substance access.",
          meta: "1 blocker",
          status: "Security",
          action: "Authorize access",
        },
      ],
    },
    table: {
      title: "Priority operational queue",
      description:
        "Items with direct impact on revenue, compliance, or patient throughput.",
      searchPlaceholder: "Search by queue item, team, or case id",
      filterOptions: ["All", "Finance", "Compliance", "Ops", "Escalated"],
      detailCta: "Inspect case",
      columns: ["subject", "owner", "category", "status", "date", "amount"],
      rows: [
        {
          id: "OPS-104",
          subject: "Orthopedic package claim variance",
          owner: "Finance Office",
          category: "Finance",
          status: "Escalated",
          date: "Today, 09:20",
          amount: "$14,200",
          detail:
            "Charge capture and payer contract rate disagree across two bundled procedures.",
        },
        {
          id: "OPS-111",
          subject: "Night shift roster approval",
          owner: "People Ops",
          category: "Ops",
          status: "Awaiting sign-off",
          date: "Today, 10:45",
          amount: "$0",
          detail:
            "Cardiology and ER roster changes require director approval before publishing.",
        },
        {
          id: "OPS-118",
          subject: "Identity log mismatch",
          owner: "Compliance",
          category: "Compliance",
          status: "Reviewing",
          date: "Today, 11:10",
          amount: "$0",
          detail:
            "Two badge scans do not match user records during a controlled-area audit window.",
        },
        {
          id: "OPS-126",
          subject: "Delayed implant invoice posting",
          owner: "Supply Chain",
          category: "Finance",
          status: "Open",
          date: "Today, 12:05",
          amount: "$22,860",
          detail:
            "Invoice import stalled and downstream billing batches are waiting for validation.",
        },
      ],
    },
  }),
  users: operationsPage({
    title: "Users",
    description:
      "Interactive staff registry with status, ownership, and action review.",
    hero: {
      eyebrow: "Access and staffing",
      headline: "Manage people without losing department context.",
      summary:
        "Filter operational staff, credentialed clinicians, and privileged users from a single control surface.",
      primaryAction: "Invite new staff member",
      secondaryAction: "Export access matrix",
    },
    metrics: [
      {
        label: "Active staff",
        value: "426",
        delta: "+11",
        note: "Joined in the last 30 days.",
        tone: "success",
      },
      {
        label: "Dormant accounts",
        value: "18",
        delta: "-4",
        note: "Scheduled for clean-up.",
        tone: "warning",
      },
      {
        label: "Privileged users",
        value: "37",
        delta: "Stable",
        note: "Matches current policy threshold.",
        tone: "info",
      },
      {
        label: "Pending invites",
        value: "9",
        delta: "3 expiring",
        note: "Re-send before end of day.",
        tone: "neutral",
      },
    ],
    table: {
      title: "Staff directory",
      description:
        "Active, pending, and suspended identities across the hospital.",
      searchPlaceholder: "Search name, role, or department",
      filterOptions: ["All", "Doctor", "Admin", "Nurse", "Pharmacy"],
      detailCta: "Open profile",
      columns: ["subject", "owner", "category", "status", "date"],
      rows: [
        {
          id: "USR-001",
          subject: "Dr. Sarah Jenkins",
          owner: "Cardiology",
          category: "Doctor",
          status: "Active",
          date: "Last seen 09:12",
          detail:
            "Consultant cardiologist with elevated chart sign and billing approval permissions.",
        },
        {
          id: "USR-014",
          subject: "James Wilson",
          owner: "IT Governance",
          category: "Admin",
          status: "Active",
          date: "Last seen 08:57",
          detail:
            "Runs directory policy, system integrations, and platform access reviews.",
        },
        {
          id: "USR-032",
          subject: "Emily Chen",
          owner: "Pediatrics",
          category: "Nurse",
          status: "Pending MFA",
          date: "Invite sent yesterday",
          detail:
            "New nurse account created but multi-factor enrollment is not yet completed.",
        },
        {
          id: "USR-049",
          subject: "Michael Chang",
          owner: "Pharmacy",
          category: "Pharmacist",
          status: "On leave",
          date: "Back Apr 20",
          detail:
            "Leave flag applied. Controlled-substance permissions suspended until return.",
        },
      ],
    },
    spotlight: {
      title: "People actions",
      description:
        "Shortlist of role and access tasks that affect current operations.",
      items: [
        {
          title: "Approve ICU float nurses",
          description:
            "Temporary assignment package is ready for sign-off.",
          meta: "6 staff",
          status: "Roster",
          action: "Approve assignment",
        },
        {
          title: "Re-issue expiring admin invites",
          description:
            "Two provisioning links expire before evening shift.",
          meta: "2 invites",
          status: "Access",
          action: "Resend invites",
        },
        {
          title: "Review controlled access",
          description:
            "Monthly pharmacy permissions review is due today.",
          meta: "Monthly audit",
          status: "Security",
          action: "Start review",
        },
      ],
    },
  }),
  audit: operationsPage({
    title: "Audit",
    description: "Compliance log, policy exceptions, and traceable review actions.",
    hero: {
      eyebrow: "Traceability",
      headline: "Every critical change leaves a readable trail.",
      summary:
        "Follow identity, billing, and operational edits across teams without losing who approved what.",
      primaryAction: "Open compliance pack",
      secondaryAction: "Schedule audit review",
    },
    metrics: [
      {
        label: "Events today",
        value: "1,482",
        delta: "+8%",
        note: "Mostly shift-change access events.",
        tone: "info",
      },
      {
        label: "Exceptions",
        value: "12",
        delta: "-3",
        note: "Down after overnight cleanup.",
        tone: "warning",
      },
      {
        label: "Resolved",
        value: "44",
        delta: "24h",
        note: "Team closed 44 events in the last day.",
        tone: "success",
      },
      {
        label: "High-risk",
        value: "2",
        delta: "Immediate",
        note: "Both linked to export policy overrides.",
        tone: "danger",
      },
    ],
    table: {
      title: "Audit log",
      description:
        "Recent events affecting access, compliance, or regulated workflows.",
      searchPlaceholder: "Search actor, event, or source module",
      filterOptions: ["All", "Access", "Billing", "Security", "Export"],
      detailCta: "Review trail",
      columns: ["subject", "owner", "category", "status", "date"],
      rows: [
        {
          id: "AUD-773",
          subject: "Controlled export override",
          owner: "Finance System",
          category: "Export",
          status: "High risk",
          date: "Today, 07:58",
          detail:
            "Nightly revenue export was manually overridden during a reconciliation window.",
        },
        {
          id: "AUD-781",
          subject: "Badge mismatch at pharmacy vault",
          owner: "Door Security",
          category: "Security",
          status: "Open",
          date: "Today, 08:34",
          detail:
            "Credential and badge reader logs differ for one controlled-access entry event.",
        },
        {
          id: "AUD-793",
          subject: "Claims role expansion approved",
          owner: "Admin Team",
          category: "Access",
          status: "Closed",
          date: "Today, 09:44",
          detail:
            "Privilege bundle approved for two claims specialists after documented review.",
        },
      ],
    },
    spotlight: {
      title: "Required follow-up",
      description:
        "Audit tasks that still need owner confirmation or closure evidence.",
      items: [
        {
          title: "Collect CCTV confirmation",
          description:
            "Vault access review is waiting for supporting footage.",
          meta: "Security",
          status: "Blocking",
          action: "Request evidence",
        },
        {
          title: "Approve export rollback note",
          description:
            "Finance wants rollback notes attached before closure.",
          meta: "Revenue ops",
          status: "Pending",
          action: "Attach note",
        },
      ],
    },
  }),
  activity: activityPage({
    title: "Admin Activity",
    description: "Recent administrative events and role-based operations updates.",
    hero: {
      eyebrow: "Live feed",
      headline: "Monitor hospital operations as they change.",
      summary:
        "Keep leadership, finance, and governance aligned on the exact events affecting throughput and compliance.",
      primaryAction: "Broadcast operations note",
      secondaryAction: "Snapshot this feed",
    },
    metrics: [
      {
        label: "New events",
        value: "73",
        delta: "4 hrs",
        note: "Across all monitored systems.",
        tone: "info",
      },
      {
        label: "Escalations",
        value: "5",
        delta: "-2",
        note: "Two resolved by finance.",
        tone: "warning",
      },
      {
        label: "Shared updates",
        value: "11",
        delta: "Today",
        note: "Cross-functional notices published.",
        tone: "success",
      },
      {
        label: "Unread alerts",
        value: "9",
        delta: "Need owner",
        note: "Assigned but not acknowledged.",
        tone: "danger",
      },
    ],
    timeline: {
      title: "Operational timeline",
      description:
        "Tap filters to narrow the administrative event stream.",
      filters: ["All", "Finance", "Ops", "Compliance", "Security"],
      items: [
        {
          id: "ACT-1",
          title: "Claim escalation opened",
          description:
            "Orthopedic bundle claim routed to finance for contract review.",
          actor: "Revenue Office",
          time: "12 minutes ago",
          lane: "Finance",
          status: "Escalated",
        },
        {
          id: "ACT-2",
          title: "Night roster approved",
          description:
            "ER and cardiology coverage changes published for tonight.",
          actor: "People Ops",
          time: "28 minutes ago",
          lane: "Ops",
          status: "Published",
        },
        {
          id: "ACT-3",
          title: "Export override flagged",
          description:
            "Automated rule generated a high-risk notification for finance systems.",
          actor: "Security bot",
          time: "46 minutes ago",
          lane: "Compliance",
          status: "Investigating",
        },
      ],
    },
    spotlight: {
      title: "What to do next",
      description:
        "Follow-ups that keep the activity stream actionable instead of noisy.",
      items: [
        {
          title: "Summarize finance blockers",
          description:
            "Create a short note for the noon leadership handoff.",
          meta: "Leadership sync",
          status: "Due now",
          action: "Create summary",
        },
        {
          title: "Acknowledge unowned alerts",
          description: "Nine alerts still need accountable owners.",
          meta: "Assign owners",
          status: "Needs action",
          action: "Assign alerts",
        },
      ],
    },
  }),
  reviews: activityPage({
    title: "Reviews",
    description: "Quality notes, patient feedback, and service recovery actions.",
    hero: {
      eyebrow: "Feedback loop",
      headline: "Turn patient experience into operational fixes.",
      summary:
        "Collect service reviews, internal QA notes, and follow-up actions in one workflow that leadership can actually use.",
      primaryAction: "Open QA review board",
      secondaryAction: "Request service callback",
    },
    metrics: [
      {
        label: "New feedback",
        value: "26",
        delta: "+9",
        note: "Mostly outpatient visits.",
        tone: "info",
      },
      {
        label: "At-risk service notes",
        value: "4",
        delta: "Immediate",
        note: "Require front-desk follow-up.",
        tone: "warning",
      },
      {
        label: "Resolved this week",
        value: "31",
        delta: "+14%",
        note: "Above target service recovery pace.",
        tone: "success",
      },
      {
        label: "Open QA items",
        value: "7",
        delta: "-1",
        note: "One cath-lab note still pending closure.",
        tone: "danger",
      },
    ],
    timeline: {
      title: "Review stream",
      description: "Mix of patient sentiment, QA notes, and team responses.",
      filters: ["All", "Patient", "QA", "Service"],
      items: [
        {
          id: "REV-1",
          title: "Long wait complaint logged",
          description:
            "Cardiology patient reported a 38-minute desk delay.",
          actor: "Patient Experience",
          time: "19 minutes ago",
          lane: "Patient",
          status: "Open",
        },
        {
          id: "REV-2",
          title: "Medication counseling praised",
          description:
            "Pharmacy handoff received a five-star note from discharge patient.",
          actor: "Feedback portal",
          time: "44 minutes ago",
          lane: "Patient",
          status: "Positive",
        },
      ],
    },
    spotlight: {
      title: "Recovery queue",
      description:
        "Actions that improve the next patient touchpoint immediately.",
      items: [
        {
          title: "Assign front-desk callback",
          description: "One complaint still has no owner assigned.",
          meta: "Desk team",
          status: "Urgent",
          action: "Assign callback",
        },
        {
          title: "Publish signage update",
          description: "QA note is approved and ready for rollout.",
          meta: "Facilities",
          status: "Ready",
          action: "Publish update",
        },
      ],
    },
  }),
  settings: settingsPage({
    title: "Settings",
    description:
      "Global preferences for admin workflow, notifications, and export timing.",
    hero: {
      eyebrow: "Preferences",
      headline: "Tune the control room without losing operational guardrails.",
      summary:
        "Adjust notifications, export windows, and escalation behavior while keeping safe defaults visible.",
      primaryAction: "Review pending changes",
      secondaryAction: "Restore baseline",
    },
    metrics: [
      {
        label: "Linked integrations",
        value: "8",
        delta: "2 paused",
        note: "Two outbound jobs still manual.",
        tone: "warning",
      },
      {
        label: "Escalation rules",
        value: "14",
        delta: "Healthy",
        note: "No invalid destinations detected.",
        tone: "success",
      },
      {
        label: "Active admins",
        value: "9",
        delta: "Concurrent",
        note: "Within expected daytime load.",
        tone: "info",
      },
      {
        label: "Unsaved changes",
        value: "3",
        delta: "Local session",
        note: "Nothing published yet.",
        tone: "neutral",
      },
    ],
    settings: {
      title: "Admin preferences",
      description:
        "Update behavior for governance, billing, and operational alerts.",
      groups: [
        {
          title: "Operations",
          items: [
            {
              key: "digest",
              label: "Send 6 PM operations digest",
              description:
                "Push a daily executive summary to role owners.",
              kind: "switch",
              initial: true,
            },
            {
              key: "escalation",
              label: "Escalation mode",
              description: "Choose how unowned alerts are escalated.",
              kind: "select",
              initial: "Progressive",
              options: ["Progressive", "Immediate", "Manual"],
            },
          ],
        },
      ],
    },
    spotlight: {
      title: "Change review",
      description: "Settings with the highest operational impact.",
      items: [
        {
          title: "Pause nightly finance export",
          description:
            "Requested for reconciliation after payer dispute review.",
          meta: "Finance request",
          status: "Pending",
          action: "Evaluate request",
        },
      ],
    },
  }),
  help: helpPage({
    title: "Help",
    description: "Guides, playbooks, and support actions for administrators.",
    hero: {
      eyebrow: "Support",
      headline: "The fastest path to the right operating playbook.",
      summary:
        "Use quick answers for routine questions and open guided support requests when a live decision is needed.",
      primaryAction: "Contact admin support",
      secondaryAction: "Download playbooks",
    },
    metrics: [
      {
        label: "Guides available",
        value: "18",
        delta: "Updated weekly",
        note: "Includes billing, security, and staffing playbooks.",
        tone: "info",
      },
      {
        label: "Open support tickets",
        value: "2",
        delta: "Both acknowledged",
        note: "No admin blockers are overdue.",
        tone: "success",
      },
      {
        label: "Pending policy questions",
        value: "3",
        delta: "Legal review",
        note: "Waiting for external clarification.",
        tone: "warning",
      },
      {
        label: "Response SLA",
        value: "14m",
        delta: "-6m",
        note: "Support is answering faster than target.",
        tone: "success",
      },
    ],
    faq: {
      title: "Frequently asked questions",
      description: "Operational answers used most often by admin teams.",
      items: [...commonHelpFaq.admin],
    },
    spotlight: {
      title: "Useful resources",
      description: "High-signal shortcuts for leadership and operational teams.",
      items: [
        {
          title: "Finance close checklist",
          description: "Use before pausing or restarting export pipelines.",
          meta: "Checklist",
          status: "Recommended",
          action: "Open checklist",
        },
      ],
    },
  }),
  "financial-report": operationsPage({
    title: "Financial Report",
    description: "Revenue, collections, payer pressure, and balance visibility.",
    hero: {
      eyebrow: "Revenue view",
      headline: "See cash, claims, and payer risk in one financial board.",
      summary:
        "Track what is collected, what is stuck, and what needs intervention before the next export window.",
      primaryAction: "Prepare board report",
      secondaryAction: "Open claim forecast",
    },
    metrics: [
      {
        label: "Net collections",
        value: "$1.84M",
        delta: "+9.1%",
        note: "Month-to-date net receipts versus prior cycle.",
        tone: "success",
      },
      {
        label: "Outstanding claims",
        value: "$412k",
        delta: "-6.8%",
        note: "Claim queue is shrinking after coding cleanup.",
        tone: "warning",
      },
      {
        label: "Denial rate",
        value: "3.7%",
        delta: "-0.5%",
        note: "Below the internal threshold this week.",
        tone: "success",
      },
      {
        label: "Payer disputes",
        value: "11",
        delta: "2 urgent",
        note: "Contract variance requires legal review.",
        tone: "danger",
      },
    ],
    chart: {
      title: "Collections versus outstanding",
      description:
        "A rolling view of received revenue and unresolved balance.",
      primaryLabel: "Collected",
      secondaryLabel: "Outstanding",
      data: monthTrend(
        [210, 224, 236, 245, 262, 278, 291, 305],
        [168, 174, 169, 164, 151, 147, 139, 132]
      ),
    },
    table: {
      title: "Financial attention list",
      description:
        "Claims, contracts, and invoice items with the most immediate impact.",
      searchPlaceholder: "Search payer, claim, or contract item",
      filterOptions: ["All", "Payer", "Claim", "Invoice", "Escalated"],
      detailCta: "Open finance detail",
      columns: ["subject", "owner", "category", "status", "date", "amount"],
      rows: [
        {
          id: "FIN-221",
          subject: "Apex Health dispute packet",
          owner: "Contract team",
          category: "Payer",
          status: "Escalated",
          date: "Today, 08:45",
          amount: "$38,200",
          detail:
            "Bundle reimbursement is under contracted rate for two cardiac device cases.",
        },
        {
          id: "FIN-229",
          subject: "Delayed implant invoice posting",
          owner: "Supply chain",
          category: "Invoice",
          status: "Open",
          date: "Today, 10:05",
          amount: "$22,860",
          detail:
            "Live posting lag is preventing downstream revenue recognition for one procedure batch.",
        },
      ],
    },
    spotlight: {
      title: "Finance actions",
      description:
        "Items worth leadership attention before the next reporting cut.",
      items: [
        {
          title: "Approve payer appeal",
          description:
            "Revenue team drafted an appeal and needs executive approval.",
          meta: "$38.2k at risk",
          status: "Needs sign-off",
          action: "Approve appeal",
        },
      ],
    },
  }),
  "hospital-profile": profilePage({
    title: "Hospital Profile",
    description:
      "Public and operational profile data for the facility, departments, and services.",
    hero: {
      eyebrow: "Institution profile",
      headline:
        "Keep core hospital identity data accurate across every workflow.",
      summary:
        "Update official facility details, operating hours, accreditation markers, and high-visibility service information.",
      primaryAction: "Review profile changes",
      secondaryAction: "Publish profile refresh",
    },
    metrics: [
      {
        label: "Departments listed",
        value: "24",
        delta: "+1",
        note: "New sleep lab unit added.",
        tone: "success",
      },
      {
        label: "Accreditations",
        value: "7",
        delta: "All current",
        note: "No renewal dates missed this quarter.",
        tone: "success",
      },
      {
        label: "Patient-facing fields",
        value: "41",
        delta: "3 changed",
        note: "Website-facing copy needs review.",
        tone: "warning",
      },
      {
        label: "Contacts verified",
        value: "89%",
        delta: "+4%",
        note: "Two desks still unverified.",
        tone: "info",
      },
    ],
    form: {
      title: "Profile editor",
      description:
        "Change the fields that appear in operations tools and patient-facing directories.",
      previewTitle: "Live profile preview",
      checklist: [
        "Verify emergency contact and admissions line.",
        "Confirm OPD timing and holiday availability.",
        "Review specialty center listing before publishing.",
      ],
      fields: [
        {
          key: "name",
          label: "Hospital name",
          type: "text",
          initial: "General Regional Hospital",
        },
        {
          key: "tagline",
          label: "Tagline",
          type: "text",
          initial: "Integrated care for acute and planned treatment.",
        },
        {
          key: "location",
          label: "Location",
          type: "text",
          initial: "Sector 18, Noida",
        },
        {
          key: "capacity",
          label: "Licensed bed capacity",
          type: "number",
          initial: "350",
        },
      ],
    },
    spotlight: {
      title: "Profile watchlist",
      description: "Fields with downstream impact if they change.",
      items: [
        {
          title: "Emergency desk number",
          description:
            "Visible on patient portal, printed forms, and reception screens.",
          meta: "High visibility",
          status: "Verify",
          action: "Confirm contact",
        },
      ],
    },
  }),
  config: settingsPage({
    title: "Config",
    description:
      "Runtime controls for queue behavior, approvals, and integration-safe defaults.",
    hero: {
      eyebrow: "System config",
      headline: "Adjust system behavior without making the platform fragile.",
      summary:
        "Use controlled configuration to change queue routing, export modes, and approval thresholds safely.",
      primaryAction: "Review config diff",
      secondaryAction: "Export current config",
    },
    metrics: [
      {
        label: "Runtime flags",
        value: "22",
        delta: "5 critical",
        note: "Five flags directly affect core workflow routing.",
        tone: "warning",
      },
      {
        label: "Approval thresholds",
        value: "7",
        delta: "Healthy",
        note: "No out-of-policy values detected.",
        tone: "success",
      },
      {
        label: "Active connectors",
        value: "8",
        delta: "1 degraded",
        note: "One finance connector is in retry mode.",
        tone: "warning",
      },
      {
        label: "Config drift",
        value: "1",
        delta: "Minor",
        note: "Nightly reconciliation override differs from baseline.",
        tone: "danger",
      },
    ],
    settings: {
      title: "System behavior",
      description: "Flags that drive queue routing and approval logic.",
      groups: [
        {
          title: "Workflow routing",
          items: [
            {
              key: "manual-queue",
              label: "Manual queue override",
              description:
                "Allow supervisors to re-route blocked cases manually.",
              kind: "switch",
              initial: true,
            },
            {
              key: "admission-threshold",
              label: "Admission escalation threshold",
              description:
                "Set the occupancy point that triggers a leadership alert.",
              kind: "select",
              initial: "85%",
              options: ["80%", "85%", "90%"],
            },
          ],
        },
      ],
    },
    spotlight: {
      title: "Config advisories",
      description:
        "Potentially risky changes worth a second look.",
      items: [
        {
          title: "Reconciliation override still active",
          description:
            "Baseline and live export behavior differ for finance.",
          meta: "Detected this morning",
          status: "Investigate",
          action: "Compare configs",
        },
      ],
    },
  }),
}
