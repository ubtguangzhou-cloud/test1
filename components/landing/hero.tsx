import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm">
              <span className="text-muted-foreground">New:</span>
              <span className="font-medium">AI-Powered Workflows</span>
              <Link
                href="#"
                className="text-accent font-medium hover:underline"
              >
                Learn more
              </Link>
            </div>
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-balance">
            Build faster, ship smarter
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto text-balance">
            The modern platform that helps teams build and ship products faster
            than ever before. Streamline your workflow and focus on what matters
            most.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 text-base">
              Try Velocity for free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-base group"
            >
              See how it works
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-center text-sm text-muted-foreground mb-8">
            <span className="font-semibold text-foreground">
              Trusted by 10,000+ teams
            </span>{" "}
            building the future of the web.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["Acme Corp", "GlobalTech", "InnovateCo", "FutureLabs", "NextGen"].map(
              (company) => (
                <span
                  key={company}
                  className="text-xl font-semibold text-muted-foreground/60"
                >
                  {company}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
