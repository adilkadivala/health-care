import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10" />
      <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
          Ready to upgrade your healthcare facility?
        </h2>
        <p className="mb-10 text-xl text-muted-foreground">
          Join the thousands of hospitals migrating to modern, beautiful
          software.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="h-12 w-full rounded-full px-8 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
          >
            Book a Live Demo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 w-full rounded-full bg-background px-8 sm:w-auto"
          >
            Documentation
          </Button>
        </div>
      </div>
    </section>
  )
}