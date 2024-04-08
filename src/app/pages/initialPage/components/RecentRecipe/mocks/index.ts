import donut from "@/assets/CardImgs/recentRecipes/Donut.jpeg";
import cereal from "@/assets/CardImgs/recentRecipes/Cereal.jpeg";
import cookies from "@/assets/CardImgs/recentRecipes/Cookies.jpeg";
import { StaticImageData } from "next/image";
import {
  cerealIngredients,
  cookiesIngredients,
  donutIngredients,
} from "@/app/pages/recipePageInformation/components/Ingredients/mocks";
import {
  cerealInstructions,
  cookiesInstructions,
  donutInstructions,
} from "@/app/pages/recipePageInformation/components/Instructions/mocks";
import {
  cerealPreparationMode,
  cookiesPreparationMode,
  donutPreparationMode,
} from "@/app/pages/recipePageInformation/components/PreparationMode/mocks";

export interface RecipeProps {
  id: number;
  name: string;
  description: string;
  img: StaticImageData;
  ingredients?: [...any];
  instructions?: [...any];
}

const recentRecipes: RecipeProps[] = [
  {
    id: 1,
    name: "Donut",
    description: "Irresistible donuts with soft dough and delicious topping",
    img: donut,
    ingredients: donutIngredients.ingredients,
    instructions: donutInstructions.instructions,
  },
  {
    id: 2,
    name: "Cereal",
    description:
      "Irresistible crunchy cereal, perfect for breakfast. A delicious and nutritious option to start the day with energy with soft dough and delicious topping",
    img: cereal,
    ingredients: cerealIngredients.ingredients,
    instructions: cerealInstructions.instructions,
  },
  {
    id: 3,
    name: "Cookies",
    description:
      "Irresistible homemade cookies with soft dough and delicious chocolate pieces",
    img: cookies,
    ingredients: cookiesIngredients.ingredients,
    instructions: cookiesInstructions.instructions,
  },
];

export default recentRecipes;
