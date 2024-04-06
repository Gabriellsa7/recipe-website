import waffles from "@/assets/CardImgs/mostPopularImgs/Waffles.jpeg";
import pancakes from "@/assets/CardImgs/mostPopularImgs/Pancakes.jpeg";
import hotChocolate from "@/assets/CardImgs/mostPopularImgs/HotChocolate.jpeg";
import donut from "@/assets/CardImgs/recentRecipes/Donut.jpeg";
import cereal from "@/assets/CardImgs/recentRecipes/Cereal.jpeg";
import cookies from "@/assets/CardImgs/recentRecipes/Cookies.jpeg";
import mushroomRisotto from "@/assets/CardImgs/allImages/MushroomRisotto.jpeg";
import shrimpPadThai from "@/assets/CardImgs/allImages/Shrimp_Pad_Thai.jpeg";
import spaghettiCarbonara from "@/assets/CardImgs/allImages/SpaghettiCarbonara.jpeg";
import thaiGreenCurry from "@/assets/CardImgs/allImages/ThaiGreenCurry.jpeg";
import vegetableStirFry from "@/assets/CardImgs/allImages/VegetableStir_Fry.jpeg";
import { StaticImageData } from "next/image";
import {
  mushroomRisottoIngredients,
  shrimpPadThaiIngredients,
  spaghettiCarbonaraIngredients,
  thaiGreenCurryIngredients,
  vegetableStirFryIngredients,
} from "@/app/pages/recipePageInformation/components/Ingredients/mocks";
import { mushroomRisottoInstructions } from "@/app/pages/recipePageInformation/components/Instructions/mocks";

interface RecipeProps {
  id: number;
  name: string;
  description: string;
  img: StaticImageData;
  ingredients?: [...any];
  instructions?: [...any];
}

const allRecipes: RecipeProps[] = [
  {
    id: 1,
    name: "Waffles",
    description: "Cool recipe to eat with friends in the morning",
    img: waffles,
  },
  {
    id: 2,
    name: "Pancakes",
    description: "Cool recipe to eat with friends in the morning",
    img: pancakes,
  },
  {
    id: 3,
    name: "Hot Chocolate",
    description: "Cool recipe to eat with friends in the morning",
    img: hotChocolate,
  },
  {
    id: 4,
    name: "Donut",
    description: "Irresistible donuts with soft dough and delicious topping",
    img: donut,
  },
  {
    id: 5,
    name: "Cereal",
    description:
      "Irresistible crunchy cereal, perfect for breakfast. A delicious and nutritious option to start the day with energy with soft dough and delicious topping",
    img: cereal,
  },
  {
    id: 6,
    name: "Cookies",
    description:
      "Irresistible homemade cookies with soft dough and delicious chocolate pieces",
    img: cookies,
  },
  {
    id: 7,
    name: "Mushroom Risotto",
    description:
      "Creamy Italian rice dish cooked with Arborio rice, mushrooms (such as porcini or cremini), onions, garlic, white wine, and Parmesan cheese. A comforting and indulgent dish.",
    img: mushroomRisotto,
    ingredients: mushroomRisottoIngredients.ingredients,
    instructions: mushroomRisottoInstructions.instructions,
  },
  {
    id: 8,
    name: "Shrimp Pad Thai",
    description:
      "Popular Thai street food dish made with stir-fried rice noodles, shrimp, tofu, bean sprouts, scrambled eggs, and a tangy sauce made from tamarind paste, fish sauce, lime juice, and palm sugar. Garnished with peanuts and cilantro.",
    img: shrimpPadThai,
    ingredients: shrimpPadThaiIngredients.Ingredients,
  },
  {
    id: 9,
    name: "Spaghetti Carbonara",
    description:
      "Classic Italian pasta dish made with spaghetti, eggs, pancetta or bacon, Parmesan cheese, and black pepper. Creamy and flavorful, it's a comfort food favorite.",
    img: spaghettiCarbonara,
    ingredients: spaghettiCarbonaraIngredients.Ingredients,
  },
  {
    id: 10,
    name: "Thai Green Curry",
    description:
      "Fragrant and spicy Thai curry made with green curry paste, coconut milk, chicken or tofu, and a variety of vegetables like bell peppers, bamboo shoots, and Thai eggplant. Served with jasmine rice.",
    img: thaiGreenCurry,
    ingredients: thaiGreenCurryIngredients.Ingredients,
  },
  {
    id: 11,
    name: "Vegetable Stir Fry",
    description:
      "Quick and nutritious dish made with an assortment of fresh vegetables such as bell peppers, broccoli, carrots, and snap peas, stir-fried with garlic, ginger, and soy sauce. Served over rice or noodles.",
    img: vegetableStirFry,
    ingredients: vegetableStirFryIngredients.Ingredients,
  },
];

export default allRecipes;
