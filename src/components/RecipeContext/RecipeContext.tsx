import { StaticImageData } from "next/image";
import React, { createContext, useContext, useState, useEffect } from "react";

interface Recipe {
  id: number;
  name: string;
  description: string;
  img: StaticImageData;
}

interface RecipeContextData {
  recipes: Recipe[];
  addRecipe: (newRecipe: Recipe) => void;
  removeRecipe: (id: number) => void;
}

const RecipeContext = createContext<RecipeContextData | undefined>(undefined);

export const useRecipe = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipe must be used within a RecipeProvider");
  }
  return context;
};

export const RecipeProvider = (props: any) => {
  const { children } = props;

  const [recipes, setRecipes] = useState<Recipe[]>(() => {
    const recipesLocalStorage = localStorage.getItem("recipes");
    return recipesLocalStorage ? JSON.parse(recipesLocalStorage) : [];
  });

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (newRecipe: Recipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const removeRecipe = (id: number) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const value: RecipeContextData = {
    recipes,
    addRecipe,
    removeRecipe,
  };
  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};
