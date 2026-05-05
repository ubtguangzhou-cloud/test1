"use client";

import { Award, Star, Trophy, Medal } from "lucide-react";

const awards = [
  { icon: Trophy, text: "TOP COMFORT CHOICE" },
  { icon: Award, text: "BEST BEDDING BRAND" },
  { icon: Star, text: "INNOVATION SLEEP AWARD" },
  { icon: Medal, text: "BEST PILLOW 2026" },
];

export function AwardsMarquee() {
  return (
    <div className="bg-secondary py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, setIndex) => (
          <div key={setIndex} className="flex">
            {awards.map((award, index) => (
              <div
                key={`${setIndex}-${index}`}
                className="flex items-center gap-3 mx-12"
              >
                <award.icon className="h-6 w-6 text-accent" />
                <span className="text-sm font-semibold tracking-wide text-foreground">
                  {award.text}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
