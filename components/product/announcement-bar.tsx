"use client";

import { Truck } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-2 mx-8">
            <Truck className="h-4 w-4" />
            <span className="text-sm font-medium">Free Shipping on All Orders</span>
          </div>
        ))}
      </div>
    </div>
  );
}
