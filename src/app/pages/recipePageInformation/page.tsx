"use client";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import Ingredients from "./components/Ingredients";
import PreparationMode from "./components/PreparationMode";
import recipes from "../initialPage/components/MostPopular/mocks";
import Instructions from "./components/Instructions";
import recentRecipes from "../initialPage/components/RecentRecipe/mocks";
import { StaticImageData } from "next/image";
interface RecipePageProps {
  name: string;
  description: string;
  img: string | StaticImageData;
}

export default function InformationRecipe() {
  const [recipe, setRecipe] = useState<RecipePageProps | null>(null);

  useEffect(() => {
    // Function to search recipe data
    const fetchRecipeData = async () => {
      try {
        // Get the URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get("name") || "";

        // Combine recipes and recentRecipes into one array
        const allRecipes = recipes.concat(recentRecipes);

        // Find the recipe based on the name in the combined list
        const recipeData = allRecipes.find((recipe) => recipe.name === name);

        if (recipeData) {
          // Define recipe data in the state
          setRecipe(recipeData);
        } else {
          console.error("Recipe not found");
        }
      } catch (error) {
        console.error("Error fetching recipe data:", error);
      }
    };

    // Call the data fetch function when the component mounts
    fetchRecipeData();
  }, []);

  if (!recipe?.name) {
    return <main>Loading...</main>;
  }
  return (
    <main>
      <Header />
      <div>
        <div className="bg-cover bg-center h-[263px] w-[100%] relative bg-[url('../assets/bgFeaturedSection.jpg')] bg-no-repeat">
          <div className="absolute inset-0 bg-slate-900 opacity-60"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            <h1 className="text-4xl font-bold">{recipe?.name}</h1>
          </div>
        </div>
      </div>
      <div>
        <Ingredients />
        <PreparationMode />
        <Instructions />
      </div>
    </main>
  );
}
