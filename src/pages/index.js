import Image from "next/image";
import { Inter } from "next/font/google";
import Headline from "@/components/Headline";
import NavLinks from "@/components/NavLinks";
import Header from "@/components/Header";
import Living_Room from "@/components/Living_Room";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`min-h-screen ${inter.className}`}>
      <Headline />
      <NavLinks />
      <Header />
      <Living_Room />
    </main>
  );
}
