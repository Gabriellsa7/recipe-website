import waffles from "../../../../../../assets/CardImgs/mostPopularImgs/Waffles.jpeg";
import pancakes from "../../../../../../assets/CardImgs/mostPopularImgs/Pancakes.jpeg";
import hotChocolate from "../../../../../../assets/CardImgs/mostPopularImgs/HotChocolate.jpeg";

import { StaticImageData } from "next/image";

interface RecipeProps {
  id: number;
  name: string;
  description: string;
  img: StaticImageData;
  ingredients?: [...any];
}

//trying to put the ingredients recipes in an array of string
const recipes: RecipeProps[] = [
  {
    id: 1,
    name: "Waffles",
    description: "Cool recipe to eat with friends in the morning",
    img: waffles,
    ingredients: [
      "2 ¼ cups all-purpose flour",
      "1 tablespoon baking powder",
      "3 tablespoons sugar",
      "½ teaspoon salt",
      "1 teaspoon cinnamon",
      "2 large eggs (separated)",
      "½ cup vegetable oil",
      "2 cups milk",
      "1 teaspoon vanilla extract",
    ],
  },
  {
    id: 2,
    name: "Pancakes",
    description: "Cool recipe to eat with friends in the morning",
    img: pancakes,
    ingredients: [
      "110 grams of plain flour (sifted)",
      "A pinch of salt",
      "2 eggs",
      "200 milliliters of milk (mixed with 75ml/3fl oz water)",
      "50 grams of butter",
      "Caster sugar (to taste)",
      "Lemon juice (for drizzling)",
      "Lemon wedges (optional)",
    ],
  },
  {
    id: 3,
    name: "Hot Chocolate",
    description: "Cool recipe to eat with friends in the morning",
    img: hotChocolate,
  },
];

export default recipes;
