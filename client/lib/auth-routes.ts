export type ApiRole =
  | "PATIENT"
  | "DOCTOR"
  | "ADMIN"
  | "RECEPTIONIST"
  | "PHARMACIST"

/** Whether this user may open `/dashboard/:segment` (and nested routes). */
export function userCanAccessDashboardSegment(
  userRole: string,
  segment: string | undefined,
): boolean {
  const normalized = userRole.toUpperCase()
  if (!segment) return true

  const expectedRole = dashboardSegmentToRole(segment)
  if (expectedRole === null) return false

  if (normalized === "ADMIN") return true
  return normalized === expectedRole
}

/** URL segment under `/dashboard/:segment` */
export function roleToDashboardSegment(role: string): string {
  const r = role.toUpperCase()
  if (r === "PHARMACIST") return "pharmacy"
  if (r === "RECEPTIONIST") return "reception"
  return r.toLowerCase()
}

export function dashboardSegmentToRole(segment: string): ApiRole | null {
  const s = segment.toLowerCase()
  if (s === "pharmacy") return "PHARMACIST"
  if (s === "reception") return "RECEPTIONIST"
  if (s === "admin" || s === "doctor" || s === "patient") {
    return s.toUpperCase() as ApiRole
  }
  return null
}

export function getDefaultDashboardPath(role: string): string {
  return `/dashboard/${roleToDashboardSegment(role)}`
}