import recipes, {
  RecipeProps,
} from "@/app/pages/initialPage/components/MostPopular/mocks";
import recentRecipes from "@/app/pages/initialPage/components/RecentRecipe/mocks";
import allRecipes from "@/app/pages/recipes/components/AllRecipes/mocks";
import latestRecipes from "@/app/pages/recipes/components/LatestRecipes/mocks";
import React, { useEffect, useState } from "react";

export default function Instructions() {
  const [recipe, setRecipe] = useState<RecipeProps | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name") || "";

    const generalRecipes = recipes
      .concat(recentRecipes)
      .concat(allRecipes)
      .concat(latestRecipes);

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
    <div>
      <h1 className="font-bold text-2xl">Instructions</h1>
      <div className="mx-8">
        <ul className="list-decimal font-medium">
          {recipe.instructions &&
            recipe.instructions.map((instruction, i) => (
              <li key={i}>
                <p className="text-lg">{instruction}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
