import waffles from "@/assets/CardImgs/mostPopularImgs/Waffles.jpeg";
import hotChocolate from "@/assets/CardImgs/mostPopularImgs/HotChocolate.jpeg";
import donut from "@/assets/CardImgs/recentRecipes/Donut.jpeg";
import cookies from "@/assets/CardImgs/recentRecipes/Cookies.jpeg";
import beefChiliConCarne from "@/assets/CardImgs/allImages/BeefChiliConCarne.jpeg";
import beefStroganoff from "@/assets/CardImgs/allImages/BeefStroganoff.jpeg";
import capreseSalad from "@/assets/CardImgs/allImages/CapreseSalad.jpeg";
import chickenTikkaMasala from "@/assets/CardImgs/allImages/ChickenTikkaMasala.jpeg";
import lemonGarlicRoastChicken from "@/assets/CardImgs/allImages/Lemon_Garlic_Roast_Chicken.jpeg";

const allRecipes = [
  {
    id: 1,
    name: "Waffles",
    description: "Cool recipe to eat with friends in the morning",
    img: waffles,
  },
  {
    id: 2,
    name: "BeefChiliConCarne",
    description: "Cool recipe to eat with friends in the morning",
    img: beefChiliConCarne,
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
    name: "Beef Stroganoff",
    description:
      "Irresistible crunchy cereal, perfect for breakfast. A delicious and nutritious option to start the day with energy with soft dough and delicious topping",
    img: beefStroganoff,
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
    name: "Caprese Salad",
    description:
      "Simple and refreshing Italian salad made with fresh tomatoes, mozzarella cheese, basil leaves, olive oil, balsamic vinegar, salt, and pepper. A classic combination of flavors.",
    img: capreseSalad,
  },
  {
    id: 8,
    name: "Chicken Tikka Masala",
    description:
      "A popular Indian dish featuring grilled marinated chicken cooked in a rich, creamy tomato-based sauce with spices like garam masala, turmeric, and cumin. Served with rice or naan bread.",
    img: chickenTikkaMasala,
  },
  {
    id: 9,
    name: "Lemon Garlic Roast",
    description:
      "Juicy and flavorful whole roast chicken seasoned with garlic, lemon zest, herbs like thyme and rosemary, and olive oil. Roasted until golden brown and served with roasted vegetables.",
    img: lemonGarlicRoastChicken,
  },
];

export default allRecipes;
