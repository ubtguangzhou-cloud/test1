import { Sun, Cloud, Snowflake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const warmthOptions = [
  {
    icon: Sun,
    title: "Lightweight – Summer - 4.5 Tog",
    description:
      "Perfect for warm nights or hot sleepers. Lightweight and breathable silk filling keeps you comfortable without overheating.",
  },
  {
    icon: Cloud,
    title: "All Season – Year Round Comfort - 9 Tog",
    description:
      "Balanced warmth designed for most of the year. Ideal for spring, autumn, and mild winters.",
  },
  {
    icon: Snowflake,
    title: "Winter Warm – Extra Warmth - 13.5 Tog",
    description:
      "Extra insulation for colder nights and winter months. Thicker silk fill provides cozy warmth while remaining breathable.",
  },
];

export function WarmthOptions() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {warmthOptions.map((option, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6">
                <option.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {option.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
