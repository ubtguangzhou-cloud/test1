import { Zap, Shield, BarChart3, Users, Globe, Rocket } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience blazing-fast performance with our optimized infrastructure. Deploy in seconds, not minutes.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade security with end-to-end encryption, SSO support, and compliance with major standards.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Get instant insights into your performance with comprehensive dashboards and custom reports.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work seamlessly with your team. Share projects, leave comments, and track changes in real-time.",
  },
  {
    icon: Globe,
    title: "Global Edge Network",
    description:
      "Deploy to 100+ locations worldwide. Your users get the fastest experience, everywhere.",
  },
  {
    icon: Rocket,
    title: "One-Click Deploy",
    description:
      "Push to production with confidence. Automatic rollbacks and zero-downtime deployments included.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Everything you need to ship faster
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            Powerful features designed to streamline your workflow and boost
            productivity across your entire team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-8 border border-border hover:border-foreground/20 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground mb-6">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
