import recipes from "@/app/pages/initialPage/components/MostPopular/mocks";
import React from "react";

export default function Ingredients() {
  let i = 0;
  return (
    <div>
      <h1>Ingredients</h1>
      <div>
        {recipes.map((recipe) => (
          <ul key={recipe.id}>
            {recipe.ingredients &&
              recipe.ingredients.map((ingredient, i) => (
                <li key={i}>{"\n" + ingredient}</li>
              ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
