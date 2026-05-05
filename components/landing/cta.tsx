import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Ready to accelerate your development?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/70">
            Join thousands of teams already shipping faster with Velocity. Start
            your free trial today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full px-8 text-base"
            >
              Start for free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Schedule a demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
