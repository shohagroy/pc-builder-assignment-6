import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`h-screen  ${inter.className}`}>
      <h3>hello world</h3>
    </main>
  );
}
