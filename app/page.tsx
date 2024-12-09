import { Suspense } from "react";
import DailyDeals from "@/components/DailyDeals/DailyDeals";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/Hero/Hero";
import ProductSection from "@/components/Product/Product";
import Favorites from "@/pages/favorites";
import Cart from "@/pages/Cart";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <ProductSection />
        <DailyDeals />
        <Favorites />
        <Cart />
      </Suspense>
    </main>
  );
}
