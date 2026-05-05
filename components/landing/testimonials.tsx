const testimonials = [
  {
    quote:
      "Velocity has completely transformed how our team ships products. We went from monthly releases to daily deployments.",
    author: "Sarah Chen",
    role: "CTO at TechStart",
    company: "TechStart",
  },
  {
    quote:
      "The developer experience is unmatched. Our team productivity increased by 40% in the first month alone.",
    author: "Marcus Johnson",
    role: "Engineering Lead",
    company: "ScaleUp Inc",
  },
  {
    quote:
      "Finally, a platform that just works. No more wrestling with infrastructure - we can focus on building great products.",
    author: "Emily Rodriguez",
    role: "Founder",
    company: "CreativeApps",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Loved by teams worldwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what our customers have to say about their experience with
            Velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <blockquote className="text-lg leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-lg font-semibold">
                    {testimonial.author[0]}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
