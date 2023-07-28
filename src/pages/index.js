import { Inter } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ productsRes }) {
  const products = productsRes?.data
    ?.sort(() => 0.5 - Math.random())
    .slice(0, 12);

  return (
    <main className={`  ${inter.className}`}>
      <HeroSection />
      <FeaturedProducts products={products} />
    </main>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_APP_URL}/api/products`
    );
    if (!res.ok) {
      throw new Error("Fetch failed");
    }
    const productsRes = await res.json();

    return {
      props: {
        productsRes,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true, // Or handle the error gracefully based on your use case
    };
  }
}
