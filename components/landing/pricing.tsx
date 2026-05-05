import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for side projects and small teams getting started.",
    features: [
      "Up to 3 team members",
      "5 projects",
      "Basic analytics",
      "Community support",
      "1GB storage",
    ],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For growing teams that need more power and flexibility.",
    features: [
      "Unlimited team members",
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "100GB storage",
      "Custom domains",
      "API access",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific requirements.",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "SLA guarantee",
      "Custom integrations",
      "Unlimited storage",
      "Advanced security",
      "Audit logs",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that works best for your team. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-primary text-primary-foreground ring-2 ring-primary"
                  : "bg-card border border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span
                      className={`ml-1 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
                <p
                  className={`mt-2 text-sm ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`h-5 w-5 flex-shrink-0 ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full ${
                  plan.popular
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : ""
                }`}
                variant={plan.popular ? "secondary" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
