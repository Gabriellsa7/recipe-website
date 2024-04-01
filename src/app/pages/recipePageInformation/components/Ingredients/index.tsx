"use client";
import recipes, {
  RecipeProps,
} from "@/app/pages/initialPage/components/MostPopular/mocks";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface RecipePageProps {
  name: string;
}

export default function Ingredients() {
  const [recipe, setRecipe] = useState<RecipeProps | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name") || "";

    // Find the recipe based on the name in the recipe list
    const foundRecipe = recipes.find((recipe) => recipe.name === name);

    if (foundRecipe) {
      setRecipe(foundRecipe);
    } else {
      console.error("Recipe not found");
    }
  }, []);

  if (!recipe?.name) {
    return <div>Loading...</div>;
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
        {/* {recipes.map((recipe) => (
          <ul key={recipe.id}>
            {recipe.ingredients &&
              recipe.ingredients.map((ingredient, i) => (
                <li key={i}>{"\n" + ingredient}</li>
              ))}
          </ul>
        ))} */}
      </div>
    </div>
  );
}
