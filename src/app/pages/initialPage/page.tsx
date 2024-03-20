import FeaturedSection from "@/components/FeaturedSection";
import Header from "@/components/Header";
import MostPopular from "@/components/MostPopular";
import React from "react";

export default function InitialPage() {
  return (
    <main className={`w-full overflow-hidden`}>
      <Header />
      <FeaturedSection />
      <MostPopular />
    </main>
  );
}
