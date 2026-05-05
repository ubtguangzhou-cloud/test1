const stats = [
  {
    value: "95%",
    label: "of SilkDream customers sleep at their ideal temperature",
  },
  {
    value: "97%",
    label: "would recommend SilkDream to their family and friends",
  },
  {
    value: "99%",
    label: "of SilkDream customers have left 5 star reviews",
  },
];

export function SocialProof() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Trusted By Thousands Of Happy Sleepers
        </h2>
        <p className="text-center text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
          Real people are sleeping deeper, cooler, and more comfortably with
          SilkDream.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-3">{stat.value}</div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
