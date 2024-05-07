import Image from "next/image";
import { Inter } from "next/font/google";
import Headline from "@/components/Headline";
import NavLinks from "@/components/NavLinks";
import Header from "@/components/Header";
import Living_Room from "@/components/Living_Room";
import Refreshing_Decor from "@/components/Refreshing_Decor";
import Dining_Essentials from "@/components/Dining_Essentials";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`min-h-screen ${inter.className}`}>
      <Headline />
      <NavLinks />
      <Header />
      <Refreshing_Decor />
      <Dining_Essentials />
      <Living_Room />
      <Contact />
      <Footer />
    </main>
  );
}
