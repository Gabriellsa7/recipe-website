import waffles from "../../../../../../assets/CardImgs/mostPopularImgs/Waffles.jpeg";
import pancakles from "../../../../../../assets/CardImgs/mostPopularImgs/Pancakles.jpeg";
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
      "\n1 tablespoon baking powder",
      "\n3 tablespoons sugar",
      "\n½ teaspoon salt",
      "\n1 teaspoon cinnamon",
      "\n2 large eggs (separated)",
      "\n½ cup vegetable oil",
      "\n2 cups milk",
      "\n1 teaspoon vanilla extract",
    ],
  },
  {
    id: 2,
    name: "Pancakes",
    description: "Cool recipe to eat with friends in the morning",
    img: pancakles,
  },
  {
    id: 3,
    name: "Hot Chocolate",
    description: "Cool recipe to eat with friends in the morning",
    img: hotChocolate,
  },
];

export default recipes;
