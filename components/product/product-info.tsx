"use client";

import { useState } from "react";
import { Minus, Plus, Truck, Shield, RotateCcw, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const colors = [
  { name: "White", value: "#FFFFFF", border: true },
  { name: "Pink", value: "#F5D6D6" },
  { name: "Sand", value: "#E8DCC8" },
];

const sizes = [
  { name: "King", available: true },
  { name: "Super King", available: true },
];

const warmthLevels = [
  { name: "Lightweight", description: "4.5 Tog - Summer", available: true },
  { name: "All Season", description: "9 Tog - Year Round", available: true },
  { name: "Winter Warm", description: "13.5 Tog - Extra Warmth", available: true },
];

const features = [
  "Ultra-Soft Class 1 Baby-Grade Fabric",
  "OEKO-TEX® Certified & Naia™ Sustainable Filling",
  "Heat Adaptive - Cozy In Winter, Cool In Summer",
  "Smooth, Draping Comfort",
  "Naturally Temperature Regulating",
];

export function ProductInfo() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedWarmth, setSelectedWarmth] = useState(warmthLevels[1]);
  const [quantity, setQuantity] = useState(1);

  const originalPrice = 149;
  const salePrice = 79;

  return (
    <div className="flex flex-col gap-6">
      {/* Title & Price */}
      <div>
        <h1 className="text-3xl font-semibold text-foreground mb-4">
          SilkDream Comforter
        </h1>
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-bold text-foreground">
            From £{salePrice}.00 GBP
          </span>
          <span className="text-lg text-muted-foreground line-through">
            £{originalPrice}.00 GBP
          </span>
          <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
            Save £{originalPrice - salePrice}.00 GBP
          </span>
        </div>
      </div>

      {/* Features List */}
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Color Selection */}
      <div>
        <label className="text-sm font-medium text-foreground mb-3 block">
          Color: {selectedColor.name}
        </label>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color)}
              className={cn(
                "w-10 h-10 rounded-full transition-all",
                selectedColor.name === color.name
                  ? "ring-2 ring-primary ring-offset-2"
                  : "",
                color.border ? "border border-border" : ""
              )}
              style={{ backgroundColor: color.value }}
              aria-label={color.name}
            />
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div>
        <label className="text-sm font-medium text-foreground mb-3 block">
          Size
        </label>
        <div className="flex gap-3">
          {sizes.map((size) => (
            <button
              key={size.name}
              onClick={() => setSelectedSize(size)}
              disabled={!size.available}
              className={cn(
                "px-6 py-3 rounded-md border text-sm font-medium transition-colors",
                selectedSize.name === size.name
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground hover:border-primary"
              )}
            >
              {size.name}
            </button>
          ))}
        </div>
      </div>

      {/* Warmth Selection */}
      <div>
        <label className="text-sm font-medium text-foreground mb-3 block">
          Warmth
        </label>
        <div className="flex flex-wrap gap-3">
          {warmthLevels.map((warmth) => (
            <button
              key={warmth.name}
              onClick={() => setSelectedWarmth(warmth)}
              disabled={!warmth.available}
              className={cn(
                "px-4 py-2 rounded-md border text-sm font-medium transition-colors",
                selectedWarmth.name === warmth.name
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground hover:border-primary"
              )}
            >
              {warmth.name}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <label className="text-sm font-medium text-foreground mb-3 block">
          Quantity
        </label>
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="h-10 w-10"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
              className="h-10 w-10"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Add to Cart */}
      <Button size="lg" className="w-full text-base py-6">
        Add to cart
      </Button>

      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center gap-6 pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Truck className="h-5 w-5" />
          <span>Free Delivery</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="h-5 w-5" />
          <span>Secure Payment</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <RotateCcw className="h-5 w-5" />
          <span>Easy Returns</span>
        </div>
      </div>
    </div>
  );
}
