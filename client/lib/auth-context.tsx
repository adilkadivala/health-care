"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { usePathname, useRouter } from "next/navigation"

import { api, setUnauthorizedHandler } from "@/lib/http"

export type AuthUser = {
  id: string
  email: string
  role: string
  firstName: string
  lastName: string
  phone?: string | null
  avatarUrl?: string | null
}

type AuthContextValue = {
  user: AuthUser | null
  loading: boolean
  logout: () => void
  refreshSession: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()
  const router = useRouter()

  const refreshSession = useCallback(async () => {
    if (typeof window === "undefined") return
    const token = localStorage.getItem("token")
    if (!token) {
      setUser(null)
      setLoading(false)
      return
    }
    try {
      const data = await api.get<{ user: AuthUser }>("/auth/profile")
      setUser(data.user)
      localStorage.setItem("user", JSON.stringify(data.user))
    } catch {
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      setUser(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void refreshSession()
  }, [refreshSession])

  useEffect(() => {
    setUnauthorizedHandler(() => {
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      setUser(null)
      const onAuthPage =
        pathname?.startsWith("/sign-in") ||
        pathname?.startsWith("/sign-up") ||
        pathname?.startsWith("/forgot-password") ||
        pathname?.startsWith("/reset-password") ||
        pathname?.startsWith("/verify")
      if (!onAuthPage) {
        router.replace("/sign-in")
      }
    })
    return () => setUnauthorizedHandler(null)
  }, [pathname, router])

  const logout = useCallback(() => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUser(null)
    router.replace("/sign-in")
  }, [router])

  const value = useMemo(
    () => ({ user, loading, logout, refreshSession }),
    [user, loading, logout, refreshSession],
  )

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return ctx
}