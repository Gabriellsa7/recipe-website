import FeaturedSection from "@/components/FeaturedSection";
import Header from "@/components/Header";
import MostPopular from "./components/MostPopular";

import React from "react";
import RecentRecipes from "./components/RecentRecipe";
import Footer from "@/components/Footer";
import { RecipeProvider } from "@/components/RecipeContext/RecipeContext";

export default function InitialPage() {
  return (
    <main className={`w-full overflow-hidden`}>
      <Header />
      <FeaturedSection />
      <RecipeProvider>
        <MostPopular />
        <RecentRecipes />
      </RecipeProvider>
      <Footer />
    </main>
  );
}
