const stats = [
  { value: "99.9%", label: "Uptime guaranteed" },
  { value: "50ms", label: "Average response time" },
  { value: "10M+", label: "Deployments per month" },
  { value: "150+", label: "Countries served" },
];

export function Stats() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
