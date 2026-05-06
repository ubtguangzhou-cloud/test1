"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images = [] }: ProductGalleryProps) {
  // 1. 设定主图路径
  const mainImage = "/images/product-main.jpg";

  // 2. 构造图片数组：
  // 先把主图放第一位，合并其余图片并去重
  const combinedImages = [
    mainImage,
    ...images.filter((img) => img !== mainImage),
  ];

  // 3. 过滤掉第二张图：只保留索引不等于 1 的图片
  const allImages = combinedImages.filter((_, index) => index !== 1);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden">
        {allImages.length > 0 ? (
          <Image
            src={allImages[currentIndex]}
            alt="Product image"
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            No Image Available
          </div>
        )}
        
        {/* Navigation Arrows */}
        {allImages.length > 1 && (
          <>
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full opacity-80 hover:opacity-100 z-10"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous image</span>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full opacity-80 hover:opacity-100 z-10"
              onClick={goToNext}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next image</span>
            </Button>
          </>
        )}

        {/* Image Counter */}
        {allImages.length > 0 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-foreground/80 text-background px-3 py-1 rounded-full text-sm z-10">
            {currentIndex + 1} / {allImages.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {allImages.map((image, index) => (
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
