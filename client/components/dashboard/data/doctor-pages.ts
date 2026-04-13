import type { DashboardPageDefinition } from "./dashboard-types"
import {
  activityPage,
  commonHelpFaq,
  formPage,
  helpPage,
  monthTrend,
  operationsPage,
  overviewPage,
  profilePage,
  settingsPage,
} from "./dashboard-helpers"

export const doctorPages: Record<string, DashboardPageDefinition> = {
  overview: overviewPage({
    title: "Doctor Overview",
    description:
      "Daily clinical workspace with appointments, labs, and pending sign-offs.",
    hero: {
      eyebrow: "Clinical board",
      headline: "Stay ahead of patients, labs, and claim-ready charting.",
      summary:
        "Track the full shift from patient flow to signed documentation without losing billing context.",
      primaryAction: "Start morning huddle",
      secondaryAction: "Open patient search",
    },
    metrics: [
      { label: "Appointments today", value: "18", delta: "+3", note: "Three new same-day add-ons.", tone: "info" },
      { label: "Consultations closed", value: "11", delta: "On pace", note: "You are on target for the noon block.", tone: "success" },
      { label: "Pending reports", value: "7", delta: "2 urgent", note: "Critical follow-up required before 2 PM.", tone: "warning" },
      { label: "Unsigned charts", value: "3", delta: "Billing blocked", note: "Claims team is waiting on final signatures.", tone: "danger" },
    ],
    chart: {
      title: "Clinic load versus completed consults",
      description: "Eight-month trend of patient volume and closed visits.",
      primaryLabel: "Visits booked",
      secondaryLabel: "Visits closed",
      data: monthTrend([72, 76, 79, 84, 88, 93, 97, 101], [61, 65, 67, 72, 74, 81, 84, 89]),
    },
    spotlight: {
      title: "Clinical priorities",
      description: "Tasks that keep the shift moving and documentation clean.",
      items: [
        {
          title: "Review thyroid panel",
          description: "One flagged lab result needs medication update before discharge.",
          meta: "Patient in observation",
          status: "Urgent",
          action: "Open lab",
        },
        {
          title: "Sign remaining morning charts",
          description: "Three encounters are complete but still awaiting approval.",
          meta: "Claim window open",
          status: "Billing",
          action: "Authorize charts",
        },
      ],
    },
    table: {
      title: "Today schedule",
      description: "Upcoming and in-progress visits for the current shift.",
      searchPlaceholder: "Search patient, visit type, or slot",
      filterOptions: ["All", "Scheduled", "Checked in", "In progress", "Follow-up"],
      detailCta: "Open chart",
      columns: ["subject", "owner", "category", "status", "date"],
      rows: [
        {
          id: "DOC-101",
          subject: "Aarav Sharma",
          owner: "Cardiology",
          category: "Follow-up",
          status: "Checked in",
          date: "09:30 AM",
          detail: "Follow-up for chest pain review, ECG uploaded, medications unchanged since last visit.",
        },
        {
          id: "DOC-108",
          subject: "Neha Verma",
          owner: "Endocrinology",
          category: "Lab review",
          status: "In progress",
          date: "10:15 AM",
          detail: "Thyroid profile flagged. Patient is in room 5 awaiting counseling and plan update.",
        },
        {
          id: "DOC-115",
          subject: "Kabir Khan",
          owner: "General medicine",
          category: "New patient",
          status: "Scheduled",
          date: "11:00 AM",
          detail: "New consultation with dizziness history and recent vitals from intake desk.",
        },
      ],
    },
  }),
  appointments: operationsPage({
    title: "Appointments",
    description: "Manage slot flow, patient status, and follow-up scheduling.",
    hero: {
      eyebrow: "Schedule control",
      headline: "Shift patients through the day without losing care context.",
      summary:
        "Search, filter, and act on visit slots while keeping patient state and visit purpose visible.",
      primaryAction: "Add appointment",
      secondaryAction: "Find open slot",
    },
    metrics: [
      { label: "Booked today", value: "18", delta: "+3", note: "Same-day visits added after 8 AM.", tone: "info" },
      { label: "Checked in", value: "7", delta: "Now", note: "Seven patients are ready or being roomed.", tone: "success" },
      { label: "Reschedules", value: "2", delta: "Pending call-back", note: "Reception is coordinating new times.", tone: "warning" },
      { label: "Late arrivals", value: "1", delta: "10 min", note: "May affect the noon block.", tone: "danger" },
    ],
    table: {
      title: "Appointment desk",
      description: "Click through to reassign, update, or review visit preparation.",
      searchPlaceholder: "Search patient, doctor note, or visit type",
      filterOptions: ["All", "Scheduled", "Checked in", "In progress", "Rescheduled"],
      detailCta: "Manage appointment",
      columns: ["subject", "owner", "category", "status", "date"],
      rows: [
        {
          id: "APT-1042",
          subject: "Sana Iqbal",
          owner: "Cardiology",
          category: "Follow-up",
          status: "Checked in",
          date: "09:30 AM",
          detail: "Vitals uploaded and questionnaire completed. Ready for room assignment.",
        },
        {
          id: "APT-1048",
          subject: "Aarav Sharma",
          owner: "General medicine",
          category: "Consultation",
          status: "In progress",
          date: "10:15 AM",
          detail: "Doctor requested prior imaging before closing the visit.",
        },
      ],
    },
    spotlight: {
      title: "Flow watch",
      description: "Operational notes that affect your remaining slots.",
      items: [
        {
          title: "Move noon consult",
          description: "One patient requested tele-follow-up instead of clinic visit.",
          meta: "Reception waiting",
          status: "Reschedule",
          action: "Move slot",
        },
      ],
    },
  }),
  "lab-reports": operationsPage({
    title: "Lab Reports",
    description: "Review pending and critical reports with clinical context.",
    hero: {
      eyebrow: "Diagnostic review",
      headline: "Treat the result and the workflow at the same time.",
      summary:
        "Clear urgent reports, request retests, and move findings into the patient record without losing queue visibility.",
      primaryAction: "Open priority queue",
      secondaryAction: "Compare latest reports",
    },
    metrics: [
      { label: "Ready for review", value: "12", delta: "+4", note: "Four new uploads since the last sync.", tone: "info" },
      { label: "Critical results", value: "2", delta: "Now", note: "Both need acknowledgement before noon.", tone: "danger" },
      { label: "Retests requested", value: "3", delta: "24h", note: "Samples waiting on scheduling.", tone: "warning" },
      { label: "Closed today", value: "9", delta: "+2", note: "Above your normal pace for the morning block.", tone: "success" },
    ],
    table: {
      title: "Report inbox",
      description: "Diagnostics waiting for interpretation, acknowledgment, or follow-up.",
      searchPlaceholder: "Search patient, report type, or accession id",
      filterOptions: ["All", "Critical", "Ready", "Retest", "Closed"],
      detailCta: "Inspect report",
      columns: ["subject", "owner", "category", "status", "date"],
      rows: [
        {
          id: "LAB-411",
          subject: "Neha Verma",
          owner: "Endocrinology",
          category: "Thyroid profile",
          status: "Critical",
          date: "Today, 08:18",
          detail: "TSH significantly elevated. Correlate with prior medication adherence before updating therapy.",
        },
        {
          id: "LAB-424",
          subject: "Aarav Sharma",
          owner: "Cardiology",
          category: "ECG + Trop",
          status: "Ready",
          date: "Today, 09:07",
          detail: "Comparative ECG uploaded alongside lab values and triage note.",
        },
      ],
    },
    spotlight: {
      title: "Diagnostic actions",
      description: "Fast follow-ups tied to result review.",
      items: [
        {
          title: "Acknowledge critical thyroid result",
          description: "This result must be acknowledged before lunch handoff.",
          meta: "Patient on site",
          status: "Urgent",
          action: "Acknowledge result",
        },
      ],
    },
  }),
  billing: operationsPage({
    title: "Billing",
    description: "Encounter billing, claim-ready charting, and revenue blockers.",
    hero: {
      eyebrow: "Revenue integrity",
      headline: "Finish clinical documentation in the format billing can use.",
      summary:
        "See unsigned encounters, coding gaps, and claim blockers before they slow collections.",
      primaryAction: "Review encounter billing",
      secondaryAction: "Download coding summary",
    },
    metrics: [
      { label: "Billable encounters", value: "14", delta: "+2", note: "Two additional visits cleared coding review.", tone: "success" },
      { label: "Coding gaps", value: "4", delta: "-1", note: "One gap fixed after morning rounds.", tone: "warning" },
      { label: "Claims blocked", value: "2", delta: "Signature", note: "Claims team needs final chart sign-off.", tone: "danger" },
      { label: "Avg. close time", value: "16m", delta: "-3m", note: "Faster than last week’s average.", tone: "info" },
    ],
    chart: {
      title: "Closed versus blocked encounters",
      description: "Billing readiness trend over the last eight months.",
      primaryLabel: "Claim-ready",
      secondaryLabel: "Blocked",
      data: monthTrend([42, 46, 49, 55, 58, 62, 67, 71], [9, 8, 8, 7, 6, 5, 5, 4]),
    },
    table: {
      title: "Encounter billing queue",
      description: "High-signal encounters that still need documentation or coding attention.",
      searchPlaceholder: "Search patient, encounter, or billing code",
      filterOptions: ["All", "Ready", "Coding gap", "Signature", "Appeal"],
      detailCta: "Open encounter",
      columns: ["subject", "owner", "category", "status", "date", "amount"],
      rows: [
        {
          id: "BIL-191",
          subject: "Aarav Sharma follow-up",
          owner: "Cardiology",
          category: "Consultation",
          status: "Ready",
          date: "Today, 09:55",
          amount: "$180",
          detail: "All diagnoses and modifiers verified. Encounter can be released to claims.",
        },
        {
          id: "BIL-206",
          subject: "Ishaan Reddy hypertension review",
          owner: "Cardiology",
          category: "Follow-up",
          status: "Awaiting signature",
          date: "Today, 12:04",
          amount: "$160",
          detail: "Chart is complete but billing release is blocked pending digital authorization.",
        },
      ],
    },
    spotlight: {
      title: "Revenue blockers",
      description: "Actions that move today’s claims from stuck to ready.",
      items: [
        {
          title: "Sign hypertension review",
          description: "Encounter is otherwise claim-ready and waiting on your approval.",
          meta: "$160",
          status: "Signature",
          action: "Authorize encounter",
        },
      ],
    },
  }),
  "authorize-signature": formPage({
    title: "Authorize Signature",
    description: "Prepare, verify, and approve signed clinical packets.",
    hero: {
      eyebrow: "Signature workflow",
      headline: "Approve documentation with the exact checks billing expects.",
      summary:
        "Complete signature-ready metadata, confirm encounter integrity, and publish the signed packet to downstream teams.",
      primaryAction: "Prepare signature packet",
      secondaryAction: "Review approval policy",
    },
    metrics: [
      { label: "Ready to sign", value: "6", delta: "Current queue", note: "Six encounters have all required fields populated.", tone: "info" },
      { label: "Blocked by coding", value: "2", delta: "-1", note: "One record was fixed this morning.", tone: "warning" },
      { label: "Signed today", value: "11", delta: "+4", note: "Ahead of your normal noon pace.", tone: "success" },
      { label: "Awaiting witness", value: "1", delta: "Special case", note: "Procedure note requires dual authorization.", tone: "danger" },
    ],
    form: {
      title: "Authorization packet",
      description: "Update signature metadata and preview the approval record as you type.",
      previewTitle: "Signature packet preview",
      checklist: [
        "Verify patient identifier and encounter date.",
        "Confirm diagnosis, coding, and billing note are final.",
        "Include witness or supervisor when the case requires it.",
      ],
      fields: [
        { key: "patient", label: "Patient name", type: "text", initial: "Ishaan Reddy" },
        { key: "encounter", label: "Encounter id", type: "text", initial: "ENC-33917" },
        {
          key: "document",
          label: "Document type",
          type: "select",
          initial: "Follow-up chart",
          options: ["Follow-up chart", "Procedure note", "Discharge summary"],
        },
        { key: "signedOn", label: "Signature date", type: "date", initial: "2026-04-13" },
      ],
    },
    spotlight: {
      title: "Approval guidance",
      description: "Checks that reduce rework after you sign.",
      items: [
        {
          title: "Confirm billing metadata",
          description: "The claims team is waiting on correct modifier support.",
          meta: "Required",
          status: "Review",
          action: "Review billing note",
        },
      ],
    },
  }),
  activity: activityPage({
    title: "Doctor Activity",
    description: "Recent clinical, scheduling, and communication events for the current shift.",
    hero: {
      eyebrow: "Shift feed",
      headline: "A readable record of what happened, not just a list of notifications.",
      summary:
        "Track patient flow, results, and messages in a timeline you can actually act on.",
      primaryAction: "Share handoff note",
      secondaryAction: "Filter clinical events",
    },
    metrics: [
      { label: "Events this shift", value: "29", delta: "Since 8 AM", note: "Includes consults, labs, and secure messages.", tone: "info" },
      { label: "Unread messages", value: "3", delta: "-2", note: "Two were handled after triage.", tone: "warning" },
      { label: "Completed consults", value: "11", delta: "Current", note: "Morning block is nearly complete.", tone: "success" },
      { label: "Pending follow-ups", value: "4", delta: "Needs plan", note: "Waiting on outreach or note finalization.", tone: "danger" },
    ],
    timeline: {
      title: "Clinical timeline",
      description: "Narrow the feed by visit type or workflow lane.",
      filters: ["All", "Consultation", "Lab", "Scheduling", "Messages"],
      items: [
        {
          id: "D-ACT-1",
          title: "Consult completed for Aarav Sharma",
          description: "Assessment closed and next-step counseling documented.",
          actor: "Clinic room 3",
          time: "8 minutes ago",
          lane: "Consultation",
          status: "Closed",
        },
        {
          id: "D-ACT-2",
          title: "Thyroid profile uploaded",
          description: "Critical flag added for review before patient discharge.",
          actor: "Lab system",
          time: "24 minutes ago",
          lane: "Lab",
          status: "Urgent",
        },
      ],
    },
    spotlight: {
      title: "Follow-up actions",
      description: "Keep the shift feed tied to real next steps.",
      items: [
        {
          title: "Reply to medication question",
          description: "Patient is waiting on dosage clarification.",
          meta: "Secure message",
          status: "Unread",
          action: "Send reply",
        },
      ],
    },
  }),
  profile: profilePage({
    title: "Profile",
    description: "Clinical profile, availability context, and patient-facing details.",
    hero: {
      eyebrow: "Professional profile",
      headline: "Maintain the details patients and teams rely on.",
      summary:
        "Update your specialty focus, on-duty availability, and care preferences without leaving the clinical workspace.",
      primaryAction: "Save profile draft",
      secondaryAction: "Share availability",
    },
    metrics: [
      { label: "Weekly clinic hours", value: "32h", delta: "+4h", note: "Additional cardiology OPD added this week.", tone: "info" },
      { label: "Patient satisfaction", value: "4.8/5", delta: "Stable", note: "No recent dips in consult feedback.", tone: "success" },
      { label: "Open follow-ups", value: "14", delta: "Team managed", note: "Shared with coordinator workflow.", tone: "warning" },
      { label: "Profile completion", value: "96%", delta: "+8%", note: "Only service summary needs a refresh.", tone: "success" },
    ],
    form: {
      title: "Doctor profile",
      description: "Edit the fields used by scheduling, patients, and billing teams.",
      previewTitle: "Profile summary",
      checklist: [
        "Keep specialty and consultation focus current.",
        "Review tele-consult and in-person availability weekly.",
        "Update patient-facing summary when services change.",
      ],
      fields: [
        { key: "name", label: "Display name", type: "text", initial: "Dr. Sarah Jenkins" },
        { key: "specialty", label: "Specialty", type: "text", initial: "Consultant Cardiologist" },
        { key: "availability", label: "Availability note", type: "text", initial: "Mon-Sat, 9 AM to 4 PM" },
        {
          key: "mode",
          label: "Consult mode",
          type: "select",
          initial: "Clinic + Tele-consult",
          options: ["Clinic only", "Clinic + Tele-consult", "Tele-consult only"],
        },
      ],
    },
    spotlight: {
      title: "Profile notes",
      description: "Context that affects patient routing and scheduling.",
      items: [
        {
          title: "Publish Thursday tele-clinic",
          description: "Scheduling team is waiting for this availability change.",
          meta: "Pending release",
          status: "Requested",
          action: "Publish slot",
        },
      ],
    },
  }),
  settings: settingsPage({
    title: "Settings",
    description: "Personal workflow preferences for notes, alerts, and clinic behavior.",
    hero: {
      eyebrow: "Personal workflow",
      headline: "Set up the clinical board to match how you practice.",
      summary:
        "Choose alert behavior, note defaults, and follow-up preferences without changing hospital-wide policy.",
      primaryAction: "Review my changes",
      secondaryAction: "Reset my defaults",
    },
    metrics: [
      { label: "Alert rules", value: "9", delta: "2 muted", note: "Two low-priority message alerts are muted.", tone: "info" },
      { label: "Note templates", value: "6", delta: "+1", note: "Added a cardiology follow-up template.", tone: "success" },
      { label: "Shared preferences", value: "3", delta: "Team sync", note: "Shared with coordinator and billing.", tone: "warning" },
      { label: "Unsaved adjustments", value: "2", delta: "Local", note: "Current changes are not yet applied.", tone: "neutral" },
    ],
    settings: {
      title: "Doctor preferences",
      description: "Adjust your view, notification noise, and note defaults.",
      groups: [
        {
          title: "Alerts and focus",
          items: [
            {
              key: "critical-alerts",
              label: "Critical result alerts",
              description: "Interrupt the board for urgent labs and care escalations.",
              kind: "switch",
              initial: true,
            },
            {
              key: "message-mode",
              label: "Secure message priority",
              description: "Choose how patient messages surface during clinic hours.",
              kind: "select",
              initial: "Only urgent first",
              options: ["All messages", "Only urgent first", "After clinic blocks"],
            },
          ],
        },
      ],
    },
    spotlight: {
      title: "Suggested adjustments",
      description: "Changes that may reduce interruptions during your shift.",
      items: [
        {
          title: "Mute low-priority messages",
          description: "Current message volume spikes during the clinic peak.",
          meta: "Patient portal",
          status: "Suggested",
          action: "Apply mute",
        },
      ],
    },
  }),
  help: helpPage({
    title: "Help",
    description: "Clinical workflow guides, quick answers, and support actions.",
    hero: {
      eyebrow: "Clinical support",
      headline: "Use help that respects the speed of a real clinic.",
      summary:
        "Jump into concise workflow guidance for schedules, lab review, charting, and signature steps.",
      primaryAction: "Contact support team",
      secondaryAction: "Open doctor guides",
    },
    metrics: [
      { label: "Workflow guides", value: "12", delta: "Updated this week", note: "Appointments, charting, billing, and labs are covered.", tone: "info" },
      { label: "Open support cases", value: "1", delta: "Acknowledged", note: "Your only ticket is already owned by platform support.", tone: "success" },
      { label: "Pinned answers", value: "5", delta: "Shared", note: "Common doctor questions saved for quick access.", tone: "success" },
      { label: "Escalations pending", value: "2", delta: "Policy review", note: "Both relate to signature edge cases.", tone: "warning" },
    ],
    faq: {
      title: "Doctor FAQs",
      description: "Answers for the questions that commonly block clinical flow.",
      items: [...commonHelpFaq.doctor],
    },
    spotlight: {
      title: "Useful guides",
      description: "Direct links to the workflows doctors use most often.",
      items: [
        {
          title: "Lab review guide",
          description: "Steps for acknowledging critical values and documenting follow-up.",
          meta: "Clinical guide",
          status: "Popular",
          action: "Open guide",
        },
      ],
    },
  }),
}
