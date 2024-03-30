"use client";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import Ingredients from "./components/Ingredients";
import PreparationMode from "./components/PreparationMode";
import recipes from "../initialPage/components/MostPopular/mocks";
import Instructions from "./components/Instructions";
interface RecipePageProps {
  name: string;
  description: string;
  img: string;
}

export default function InformationRecipe() {
  const [recipe, setRecipe] = useState<RecipePageProps | null>(null);

  useEffect(() => {
    // Função para buscar os dados da receita
    const fetchRecipeData = async () => {
      // Simulação de uma chamada de API assíncrona
      try {
        // Obtenha os parâmetros da URL
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get("name") || "";
        const description = urlParams.get("description") || "";
        const img = urlParams.get("img") || "";

        // Encontre a receita com base no nome na lista de receitas
        const recipeData = recipes.find((recipe) => recipe.name === name);

        if (recipeData) {
          // Defina os dados da receita no estado
          setRecipe({ name, description, img });
        } else {
          console.error("Recipe not found");
        }
      } catch (error) {
        console.error("Error fetching recipe data:", error);
      }
    };

    // Chame a função de busca de dados quando o componente montar
    fetchRecipeData();
  }, []);

  if (!recipe?.name) {
    return <div>Loading...</div>;
  }
  return (
    <main>
      <Header />
      <div>
        <div className="bg-cover bg-center h-[263px] w-[100%] relative bg-[url('../assets/bgFeaturedSection.jpg')] bg-no-repeat">
          <div className="absolute inset-0 bg-slate-900 opacity-60"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            <h1 className="text-4xl font-bold">{recipe?.name}</h1>
          </div>
        </div>
      </div>
      <div>
        <Ingredients />
        <PreparationMode />
        <Instructions />
      </div>
    </main>
  );
}
