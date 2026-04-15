"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { useAuth } from "@/lib/auth-context"
import { getDefaultDashboardPath } from "@/lib/auth-routes"

/** Sends authenticated users away from auth pages (sign-in, sign-up, etc.). */
export function AuthRedirectIfSession() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (loading || !user) return
    router.replace(getDefaultDashboardPath(user.role))
  }, [user, loading, router])

  return null
}