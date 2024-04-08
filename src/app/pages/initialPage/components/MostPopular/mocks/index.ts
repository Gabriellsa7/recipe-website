import waffles from "../../../../../../assets/CardImgs/mostPopularImgs/Waffles.jpeg";
import pancakes from "../../../../../../assets/CardImgs/mostPopularImgs/Pancakes.jpeg";
import hotChocolate from "../../../../../../assets/CardImgs/mostPopularImgs/HotChocolate.jpeg";

import { StaticImageData } from "next/image";
import {
  hotChocolateIngredients,
  pancakesIngredients,
  wafflesIngredients,
} from "@/app/pages/recipePageInformation/components/Ingredients/mocks";

import {
  hotChocolateInstructions,
  pancakesInstructions,
  wafflesInstructions,
} from "@/app/pages/recipePageInformation/components/Instructions/mocks";
import {
  hotChocolatePreparationMode,
  pancakesPreparationMode,
  wafflesPreparationMode,
} from "@/app/pages/recipePageInformation/components/PreparationMode/mocks";

export interface RecipeProps {
  id: number;
  name: string;
  description: string;
  img: StaticImageData;
  ingredients?: [...any];
  instructions?: [...any];
  preparationMode?: [...any];
}

//trying to put the ingredients recipes in an array of string
const recipes: RecipeProps[] = [
  {
    id: 1,
    name: "Waffles",
    description: "Cool recipe to eat with friends in the morning",
    img: waffles,
    ingredients: wafflesIngredients.ingredients,
    instructions: wafflesInstructions.instructions,
    preparationMode: wafflesPreparationMode.preparationMode,
  },
  {
    id: 2,
    name: "Pancakes",
    description: "Cool recipe to eat with friends in the morning",
    img: pancakes,
    ingredients: pancakesIngredients.ingredients,
    instructions: pancakesInstructions.instructions,
    preparationMode: pancakesPreparationMode.preparationMode,
  },
  {
    id: 3,
    name: "Hot Chocolate",
    description: "Cool recipe to eat with friends in the morning",
    img: hotChocolate,
    ingredients: hotChocolateIngredients.ingredients,
    instructions: hotChocolateInstructions.instructions,
    preparationMode: hotChocolatePreparationMode.preparationMode,
  },
];

export default recipes;
