import donut from "@/assets/CardImgs/recentRecipes/Donut.jpeg";
import cereal from "@/assets/CardImgs/recentRecipes/Cereal.jpeg";
import cookies from "@/assets/CardImgs/recentRecipes/Cookies.jpeg";
import { StaticImageData } from "next/image";
import {
  cerealIngredients,
  cookiesIngredients,
  donutIngredients,
} from "@/app/pages/recipePageInformation/components/Ingredients/mocks";

export interface RecipeProps {
  id: number;
  name: string;
  description: string;
  img: StaticImageData;
  ingredients?: [...any];
}

const recentRecipes: RecipeProps[] = [
  {
    id: 1,
    name: "Donut",
    description: "Irresistible donuts with soft dough and delicious topping",
    img: donut,
    ingredients: donutIngredients.ingredients,
  },
  {
    id: 2,
    name: "Cereal",
    description:
      "Irresistible crunchy cereal, perfect for breakfast. A delicious and nutritious option to start the day with energy with soft dough and delicious topping",
    img: cereal,
    ingredients: cerealIngredients.ingredients,
  },
  {
    id: 3,
    name: "Cookies",
    description:
      "Irresistible homemade cookies with soft dough and delicious chocolate pieces",
    img: cookies,
    ingredients: cookiesIngredients.ingredients,
  },
];

export default recentRecipes;
