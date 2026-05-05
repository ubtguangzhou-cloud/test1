import { Heart, Shield, Thermometer, Wind } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Naturally Hypoallergenic",
    description:
      "Silk quilt is an excellent option if you suffer from allergies or skin issues - it&apos;s very comforting and soothing on your skin.",
  },
  {
    icon: Shield,
    title: "Antibacterial & Antifungal",
    description:
      "Silk is a material that germs struggle to cling to or grow on, and is resistant to dust mites, mould and bacteria.",
  },
  {
    icon: Thermometer,
    title: "Temperature Regulating",
    description:
      "Silk keeps you comfortably cool in summer and warm in winter, making it possible to get a great night&apos;s rest all year round.",
  },
  {
    icon: Wind,
    title: "Lightweight & Breathable",
    description:
      "Silk is made from thin natural strands, allowing for better air circulation than cotton, wool, down and synthetic materials.",
  },
];

export function Benefits() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-foreground mb-12">
          Why Silk Quilts are Better
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-background mb-4">
                <benefit.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
