import { AnnouncementBar } from "@/components/product/announcement-bar";
import { Header } from "@/components/product/header";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductInfo } from "@/components/product/product-info";
import { AwardsMarquee } from "@/components/product/awards-marquee";
import { WarmthOptions } from "@/components/product/warmth-options";
import { Benefits } from "@/components/product/benefits";
import { FeatureSections } from "@/components/product/feature-sections";
import { FAQ } from "@/components/product/faq";
import { SocialProof } from "@/components/product/social-proof";
import { Footer } from "@/components/product/footer";

const productImages = [
  "/images/product-hero.jpg",
  "/images/product-main.jpg",
  "/images/product-bedroom.jpg",
  "/images/product-texture.jpg",
  "/images/product-lifestyle.jpg",
];

export default function ProductPage() {
  return (
    <main className="min-h-screen">
      <AnnouncementBar />
      <Header />
      
      {/* Product Section */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <ProductGallery images={productImages} />
            <ProductInfo />
          </div>
        </div>
      </section>

      <AwardsMarquee />
      <WarmthOptions />
      <Benefits />
      <FeatureSections />
      <FAQ />
      <SocialProof />
      <Footer />
    </main>
  );
}
