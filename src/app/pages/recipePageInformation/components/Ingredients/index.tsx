import recipes from "@/app/pages/initialPage/components/MostPopular/mocks";
import React from "react";

export default function Ingredients() {
  let i = 0;
  return (
    <div>
      <h1>Ingredients</h1>
      <div>
        {recipes.map((recipes) => (
          <ul key={recipes.id}>
            <li>{"\n" + recipes.ingredients?.at(0)}</li>
            <li>{"\n" + recipes.ingredients?.at(1)}</li>
            <li>{"\n" + recipes.ingredients?.at(2)}</li>
            <li>{"\n" + recipes.ingredients?.at(3)}</li>
            <li>{"\n" + recipes.ingredients?.at(4)}</li>
            <li>{"\n" + recipes.ingredients?.at(5)}</li>
            <li>{"\n" + recipes.ingredients?.at(6)}</li>
            <li>{"\n" + recipes.ingredients?.at(7)}</li>
            <li>{"\n" + recipes.ingredients?.at(8)}</li>
            <li>{"\n" + recipes.ingredients?.at(9)}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

{
  /* <li>2 ¼ cups all-purpose flour</li>
<li>1 tablespoon baking powder</li>
<li>3 tablespoons sugar</li>
<li>½ teaspoon salt</li>
<li>1 teaspoon cinnamon</li>
<li>2 large eggs (separated)</li>
<li>½ cup vegetable oil</li>
<li>2 cups milk</li>
<li>1 teaspoon vanilla extract</li> */
}
