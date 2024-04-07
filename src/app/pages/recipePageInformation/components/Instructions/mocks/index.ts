//trying to put the ingredients recipes in an array of string
const wafflesInstructions = {
  instructions: [
    "Preheat the waffle iron: Plug it in and wait for it to heat up, or turn it to a certain temperature, depending on the model you’re using. A small light will often come on when the waffle iron is ready. To test the temperature, let a drop or two of water fall on the plates of the waffle iron. The drops should sizzle and dance for 2-3 seconds before vanishing. If they sit there for much longer, the waffle iron isn’t warm enough yet. If they vanish in less than a couple of seconds, the waffle iron may be too hot.",
    "Mix the dry ingredients: Place the flour, salt, sugar, and baking powder into a medium-large bowl. For extremely fluffy waffles, sift the ingredients instead of simply mixing them.",
    "Separate the eggs: Use an egg separating tool to separate the yolks from the whites and place them in separate bowls. You can also crack the eggs in half and tip the yolk from shell half to shell half, letting the white drop to a bowl below. It’s essential to avoid getting any yolk in with the egg whites, as they won’t foam properly if there’s even a little yolk in them.",
    "Beat the egg whites: Use a whisk or a mixer to beat the egg whites until they foam and form soft peaks. They should be stiff but not dry.",
    "Beat the remaining wet ingredients: Beat the butter or oil and egg yolks in a separate bowl. Add the milk and vanilla, and continue beating until the ingredients are thoroughly combined.",
    "Combine the wet and dry ingredients: Make a well in the dry ingredients and pour the egg yolk mixture into the well. Stir everything together until everything is moist.",
    "Pour the batter: Pour the batter onto the hot, prepared waffle iron. The amount will depend on your waffle iron’s size and instructions. Close the lid.",
    "Cook until golden brown: Cook the waffles until they’re golden brown and crispy on the outside. Repeat with the remaining batter.",
  ],
};
const pancakesInstructions = {
  instructions: [
    "Sift the dry ingredients: In a large bowl, combine the plain flour and a pinch of salt.",
    "Add the wet ingredients: Make a well in the center of the dry ingredients and pour in the milk and lightly whisked eggs. Give the liquid mixture a quick whisk before incorporating the flour.",
    "Whisk until smooth: Continue to whisk until you have a smooth batter.",
    "Add melted butter: Now add the melted butter and whisk thoroughly.",
    "Let the batter rest: Ideally, let the batter rest for 15–30 minutes. This helps the gluten relax, resulting in tender and thinner pancakes.",
    "Prepare the pan: Heat a crêpe pan or large frying pan over medium heat for 1 minute. Dip a piece of kitchen paper in oil and carefully wipe the inside of the pan.",
    "Cook the pancakes: ",
    "Pour just under a ladleful of batter into the pan.",
    "Immediately start swirling the pan to get a nice even layer.",
    "Cook the pancake for 30–40 seconds until the underside is golden brown.",
    "Use a palette knife to lift the pancake and check the color.",
    "Flip the pancake and cook the other side for approximately 30–40 seconds.",
    "Transfer to a serving plate.",
    "Serve and enjoy: Top your pancakes with lemon and sugar, chocolate spread, or any toppings your heart desires.",
  ],
};
const hotChocolateInstructions = {
  instructions: [
    "Heat the milk in a saucepan over medium heat for 3 to 4 minutes.",
    "Add the brown sugar and stir until dissolved.",
    "Stir in the dark chocolate until it’s completely melted (about 2 to 3 minutes).",
    "Remove the saucepan from the heat and stir in the cream and cinnamon.",
    "Top with whipped cream, marshmallows, crushed peppermint, or any other topping of your choice.",
  ],
};

const donutInstructions = {
  instructions: [
    "Heat the oil in a deep frying pan.",
    "In a mixing bowl, combine flour, clarified butter, egg, milk, salt, baking powder, baking soda, powdered sugar, cinnamon powder, nutmeg powder, and vanilla essence.",
    "Mix well to form a smooth dough.",
    "Roll out the dough on a floured surface to a thickness of about 1/3 inch.",
    "Cut out donuts using a donut cutter.",
    "Fry the donuts in hot oil until golden brown and puffed.",
    "Drain excess oil on paper towels.",
    "Melt the dark chocolate chunks and dip the donuts into the melted chocolate.",
    "Decorate with colorful candies or sprinklers.",
    "Serve and enjoy your homemade donuts! 🍩",
  ],
};

const cerealInstructions = {
  instructions: [
    "Heat the milk in a saucepan.",
    "Add the cinnamon stick and oats, and cook until creamy.",
    "Stir in the coconut oil, chopped pears, honey, brown sugar, raisins, and almonds.",
    "Serve warm and enjoy this wholesome oatmeal cereal! 🥣 ",
  ],
};

const cookiesInstructions = {
  instructions: [
    "Preheat your oven to 375°F (190°C).",
    "In a large bowl, beat together the granulated sugar, brown sugar, margarine (or butter), vanilla extract, and egg until creamy.",
    "Dissolve the baking soda in 1 teaspoon of hot water and add it to the mixture.",
    "Stir in the flour, chocolate chips, and nuts (if using).",
    "Drop spoonfuls of dough onto a prepared baking sheet.",
    "Bake for 10 to 12 minutes or until the edges are golden brown.",
    "Let them cool slightly on the baking sheet before transferring to a wire rack.",
    "Enjoy these nutty chocolate chip cookies! 🍪 ",
  ],
};

const mushroomRisottoInstructions = {
  instructions: [
    "Heat a large skillet or saucepan over medium heat. Add a drizzle of olive oil.",
    "Add the chopped onion and minced garlic. Sauté until the onion is translucent.",
    "Add the sliced mushrooms and cook until they release their moisture and become tender. Season with salt and pepper. Remove from the pan and set aside.",
    "In the same skillet, melt the butter over medium heat.",
    "Add the Arborio rice and stir to coat it with the butter. Cook for about 1-2 minutes until the rice is lightly toasted.",
    "Pour in the white wine and stir until it’s mostly absorbed by the rice.",
    "Begin adding the warm broth, one ladleful at a time, stirring constantly.",
    "Wait until each ladleful is mostly absorbed before adding the next. Continue this process until the rice is creamy and cooked (about 18-20 minutes).",
    "Stir in the sautéed mushrooms and any juices they released.",
    "Add the grated Parmesan cheese and season with additional salt and pepper if needed. Mix well.",
    "Remove from heat and let it rest for a minute.",
    "Garnish with chopped parsley and an extra sprinkle of Parmesan cheese.",
  ],
};

const shrimpPadThaiInstructions = {
  instructions: [
    "Soak the rice noodles in warm water until softened, then drain.",
    "Heat oil in a wok over medium-high heat. Add garlic and shrimp, stir-fry until shrimp turns pink.",
    "Push shrimp aside, add beaten eggs, scramble for a minute, then combine with shrimp.",
    "Add soaked noodles and dried tiny baby shrimp. Mix well and heat through.",
    "Top with bean sprouts, chopped peanuts, and lime wedges. Serve hot",
  ],
};

const spaghettiCarbonaraInstructions = {
  instructions: [
    "Boil water for the pasta and cook the spaghetti according to package instructions.",
    "Cut the guanciale into small pieces and cook it in a skillet until crispy. No need for oil; guanciale is already fatty and flavorful.",
    "Prepare the pecorino cream by mixing eggs, pecorino Romano cheese, and freshly ground black pepper.",
    "Combine the cooked spaghetti with the guanciale and then toss with the creamy egg and cheese sauce.",
    "Serve immediately with extra Pecorino Romano and a sprinkle of black pepper ",
  ],
};

const thaiGreenCurryInstructions = {
  instructions: [
    "Heat the vegetable oil in a large skillet or wok over medium heat.",
    "Add the green curry paste and cook for 1 minute to release its flavors.",
    "Add the sliced chicken and cook until browned.",
    "Pour in the coconut milk and stir well.",
    "Add the red bell pepper, zucchini, and snow peas. Simmer until the vegetables are tender.",
    "Season with fish sauce and brown sugar.",
    "Serve hot, garnished with fresh basil leaves ",
  ],
};

const vegetableStirFryInstructions = {
  instructions: [
    "Soak the rice noodles in warm water until softened, then drain.",
    "Heat oil in a wok or skillet over medium heat.",
    "Add the chopped vegetables in the order mentioned below (based on cooking time).",
    "Pour in the stir fry sauce (Charlie or homemade) and toss everything together.",
    "Serve hot over rice or noodles, and enjoy! 🥢🌿",
  ],
};

export {
  pancakesInstructions,
  wafflesInstructions,
  hotChocolateInstructions,
  donutInstructions,
  cerealInstructions,
  cookiesInstructions,
  mushroomRisottoInstructions,
  shrimpPadThaiInstructions,
  thaiGreenCurryInstructions,
  vegetableStirFryInstructions,
  spaghettiCarbonaraInstructions,
};
