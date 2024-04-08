import recipes, {
  RecipeProps,
} from "@/app/pages/initialPage/components/MostPopular/mocks";
import recentRecipes from "@/app/pages/initialPage/components/RecentRecipe/mocks";
import allRecipes from "@/app/pages/recipes/components/AllRecipes/mocks";
import latestRecipes from "@/app/pages/recipes/components/LatestRecipes/mocks";
import React, { useEffect, useState } from "react";

interface RecipePageProps {
  name: string;
}

export default function Ingredients() {
  const [recipe, setRecipe] = useState<RecipeProps | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name") || "";

    // Combine recipes and recentRecipes into one array
    const generalRecipes = recipes
      .concat(recentRecipes)
      .concat(allRecipes)
      .concat(latestRecipes);

    // Find the recipe based on the name in the combined list
    const foundRecipe = generalRecipes.find((recipe) => recipe.name === name);

    if (foundRecipe) {
      setRecipe(foundRecipe);
    } else {
      console.error("Recipe not found");
    }
  }, []);

  if (!recipe?.name) {
    return <main>Loading...</main>;
  }

  return (
    <div className="bg-slate-200 rounded-xl p-5 flex flex-col justify-start h-[90%]">
      <h1 className="font-bold text-2xl">Ingredients</h1>
      <div className="py-3 w-[95%]">
        <ul className="list-disc ml-8 flex flex-col gap-2">
          {recipe.ingredients &&
            recipe.ingredients.map((ingredient, i) => (
              <li key={i}>
                <p className="text-lg font-medium max-w-[500px] break-words">
                  {ingredient}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
