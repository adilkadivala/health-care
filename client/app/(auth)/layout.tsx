import Link from "next/link"
import Image from "next/image"
import { Hospital } from "lucide-react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-2 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex size-6 items-center justify-center rounded-md text-primary">
              <Hospital className="size-4" />
            </div>
            TaskFlow.
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full md:max-w-1/2">{children}</div>
        </div>
      </div>
      <div className="relative hidden h-full w-full items-center justify-center overflow-hidden bg-linear-to-tl from-accent to-accent-foreground/10 lg:flex">
        <div className="absolute top-15 left-15 h-full w-full">
        <Image
            width={1000}
            height={1000}
          src="/patient.png"
          alt="dashboard-img"
        />
        </div>
      </div>
    </div>
  )
}
