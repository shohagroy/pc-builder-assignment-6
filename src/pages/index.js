import { Inter } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/shared/Navbar";
import FeaturedProducts from "@/components/FeaturedProducts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const today = new Date().toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <main className={`  ${inter.className}`}>
      <HeroSection />
      <FeaturedProducts />
    </main>
  );
}
