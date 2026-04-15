import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Feature } from "@/components/feature"
import { Portfolio } from "@/components/portfolio"
import { CTA } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans selection:bg-primary/20">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Feature />
        <Portfolio />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}