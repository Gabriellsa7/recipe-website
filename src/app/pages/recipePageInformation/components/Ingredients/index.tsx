import recipes, {
  RecipeProps,
} from "@/app/pages/initialPage/components/MostPopular/mocks";
import recentRecipes from "@/app/pages/initialPage/components/RecentRecipe/mocks";
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
    const allRecipes = recipes.concat(recentRecipes);

    // Find the recipe based on the name in the combined list
    const foundRecipe = allRecipes.find((recipe) => recipe.name === name);

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
      <h1>Ingredients</h1>
      <div>
        <ul>
          {recipe.ingredients &&
            recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}
