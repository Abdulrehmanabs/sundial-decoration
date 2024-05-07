import { Inter } from "next/font/google";
import Headline from "@/components/Headline";
import NavLinks from "@/components/NavLinks";
import Header from "@/components/Header";
import Living_Room from "@/components/Living_Room";
import Refreshing_Decor from "@/components/Refreshing_Decor";
import Dining_Essentials from "@/components/Dining_Essentials";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";
import axios from "axios";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const getData = async () => {
    const options = {
      method: "GET",
      url: "https://real-time-amazon-data.p.rapidapi.com/search",
      params: {
        query: "Phone",
        page: "1",
        country: "US",
        category_id: "aps",
      },
      headers: {
        "X-RapidAPI-Key": "750dfe907emsh0b5e95edf631b59p1b1738jsncf9fb49fbc51",
        "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      // check console for response
      console.log(response.data);
    } catch (error) {
      console.error("error in catch", error);
    }
  };

  useEffect(() => {
    // getData();
  });

  return (
    <main className={`min-h-screen ${inter.className}`}>
      <Headline />
      <Navbar />
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
