import { Suspense } from "react";
import DailyDeals from "@/components/DailyDeals/DailyDeals";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/Hero/Hero";
import ProductSection from "@/components/Product/Product";
import Features from "@/components/Features/Features";
import Promotional from "@/components/Promotional/Promotional";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <Promotional />
        <Features />
        <ProductSection />
        <DailyDeals />
      </Suspense>
    </main>
  );
}
