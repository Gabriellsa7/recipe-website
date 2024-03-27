import Header from "@/components/Header";
import React from "react";
import AllRecipes from "./components/AllRecipes";
import LatestRecipes from "./components/LatestRecipes";

export default function Recipes() {
  return (
    <main className="overflow-hidden">
      <Header />
      <AllRecipes />
      <LatestRecipes />
    </main>
  );
}
