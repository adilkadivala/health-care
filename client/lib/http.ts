const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api"

let unauthorizedHandler: (() => void) | null = null

export const setUnauthorizedHandler = (handler: (() => void) | null) => {
  unauthorizedHandler = handler
}

export const http = async <T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options?.headers || {}),
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  })

  if (!response.ok) {
    if (response.status === 401 && unauthorizedHandler) {
      unauthorizedHandler()
    }
    const errorData = await response.json().catch(() => ({}))
    throw new Error(
      (errorData as { message?: string }).message ||
        "An error occurred during the request",
    )
  }

  // Some responses might be empty (e.g., 204 No Content)
  if (response.status === 204) return {} as T

  return response.json()
}

export const api = {
  get: <T>(url: string, options?: RequestInit) =>
    http<T>(url, { ...options, method: "GET" }),

  post: <T>(url: string, body: any, options?: RequestInit) =>
    http<T>(url, { ...options, method: "POST", body: JSON.stringify(body) }),

  put: <T>(url: string, body: any, options?: RequestInit) =>
    http<T>(url, { ...options, method: "PUT", body: JSON.stringify(body) }),

  patch: <T>(url: string, body: any, options?: RequestInit) =>
    http<T>(url, { ...options, method: "PATCH", body: JSON.stringify(body) }),

  delete: <T>(url: string, options?: RequestInit) =>
    http<T>(url, { ...options, method: "DELETE" }),
}
