const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api"

export const API_ORIGIN = API_BASE_URL.replace(/\/api\/?$/, "")

export function resolveApiAssetUrl(path: string | null | undefined) {
  if (!path) return null
  if (/^(https?:|data:|blob:)/i.test(path)) return path
  return `${API_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`
}

export { API_BASE_URL }
