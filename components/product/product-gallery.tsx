"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt="Product image"
          fill
          className="object-cover"
          priority
        />
        
        {/* Navigation Arrows */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full opacity-80 hover:opacity-100"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous image</span>
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full opacity-80 hover:opacity-100"
          onClick={goToNext}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next image</span>
        </Button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-foreground/80 text-background px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-colors",
              currentIndex === index
                ? "border-primary"
                : "border-transparent hover:border-muted-foreground/50"
            )}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
