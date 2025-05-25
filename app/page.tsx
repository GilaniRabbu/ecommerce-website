import { Suspense } from "react";
import DailyDeals from "@/components/DailyDeals/DailyDeals";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/Hero/Hero";
import ProductSection from "@/components/Product/Product";
import Features from "@/components/Features/Features";
import PromotionalBanner from "@/components/PromotionalBanner/PromotionalBanner";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <PromotionalBanner />
        <Features />
        <ProductSection />
        <DailyDeals />
      </Suspense>
    </main>
  );
}
