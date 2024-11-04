import DailyDeals from "@/components/DailyDeals/DailyDeals";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/Hero/Hero";
import ProductSection from "@/components/Product/Product";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroSection />
      <ProductSection />
      <DailyDeals />
    </main>
  );
}
