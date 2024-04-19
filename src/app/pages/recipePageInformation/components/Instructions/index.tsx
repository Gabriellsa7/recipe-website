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
      <h1 className="font-bold text-2xl min-[320px]:text-lg min-[1024px]:text-2xl">
        Instructions
      </h1>
      <div>
        <ul className="list-decimal ml-8 my-2 flex flex-col gap-2">
          {recipe.instructions &&
            recipe.instructions.map((instruction, i) => (
              <li key={i}>
                <p className="text-lg w-[1000px] break-words font-medium min-[320px]:text-sm min-[320px]:w-[200px] min-[320px]:break-words min-[768px]:text-base min-[768px]:w-[300px] min-[768px]:break-words min-[1024px]:text-lg min-[1024px]:w-[600px] min-[1024px]:break-words min-[1440px]:w-[1000px]">
                  {instruction}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
