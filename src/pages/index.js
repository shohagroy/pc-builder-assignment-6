import { Inter } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/shared/Navbar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  const today = new Date().toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <main className={`  ${inter.className}`}>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <HeroSection openMenu={openMenu} />
    </main>
  );
}
