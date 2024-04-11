"use client";
import { StaticImageData } from "next/image";
import React, {
  createContext,
  useState,
  useContext,
  FC,
  ReactNode,
} from "react";

interface Recipe {
  id: number;
  name: string;
  description: string;
  img: StaticImageData;
}

interface RecipeContextType {
  recipes: Recipe[];
  addRecipe: (newRecipe: Recipe) => void;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const useRecipe = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipes must be used within a RecipesProvider");
  }
  return context;
};

export const RecipeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const addRecipe = (newRecipe: Recipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
