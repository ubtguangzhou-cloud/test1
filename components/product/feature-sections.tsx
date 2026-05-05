import Image from "next/image";

export function FeatureSections() {
  return (
    <>
      {/* Feature 1 */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-secondary">
              <Image
                src="/images/feature-certifications.jpg"
                alt="Certified safe silk comforter"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">
                Naturally Gentle, Breathable & Certified Safe
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Filled with 100% natural mulberry silk, our comforter is
                exceptionally gentle on the skin—ideal for sensitive sleepers.
                Certified to OEKO-TEX® Standard 100 (Class I), it meets the
                highest safety standards for purity and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2 */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-semibold text-foreground mb-6">
                Naturally Light. Effortlessly Comfortable.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Made with pure natural silk, this duvet offers breathable,
                temperature-regulating comfort that feels light yet warm. It
                adapts to your body, stays soft over time, and is perfectly
                suited for delicate, sensitive skin—bringing you a cleaner, more
                comfortable night&apos;s rest.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-background order-1 lg:order-2">
              <Image
                src="/images/feature-comfort.jpg"
                alt="Comfortable silk duvet"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
