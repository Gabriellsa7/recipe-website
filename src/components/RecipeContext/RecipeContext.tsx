"use client";
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

export const RecipeContext = createContext<RecipeContextData | undefined>(
  undefined
);

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
    if (typeof window !== "undefined") {
      const recipesLocalStorage = localStorage.getItem("recipes");
      return recipesLocalStorage ? JSON.parse(recipesLocalStorage) : [];
    } else {
      return [];
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("recipes", JSON.stringify(recipes));
    }
  }, [recipes]);

  const addRecipe = (newRecipe: Recipe) => {
    const isAlreadyAdded = recipes.some(
      (existingRecipe) => existingRecipe.id === newRecipe.id
    );
    if (!isAlreadyAdded) {
      setRecipes([...recipes, newRecipe]);
      updateLocalStorage([...recipes, newRecipe]);
    } else {
      console.log("Recipe already added!");
    }
  };

  const updateLocalStorage = (updatedRecipes: Recipe[]) => {
    console.log("Updating localStorage with recipes:", updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

  const removeRecipe = (id: number) => {
    setRecipes(recipes.filter((recipe) => recipe && recipe.id !== id));
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
