"use client";
// import React, { useEffect, useState } from "react";
import { Bottom, Container, Top } from "../Card";
import Image from "next/image";
import recipes from "./mocks";
// import { useRouter } from "next/router";
import Link from "next/link";

export default function MostPopular() {
  //move to pages to use next router
  // const router = useRouter();
  // const { id } = router.query;
  // const [recipe, setRecipe] = useState(null);

  // useEffect(() => {
  //   const fetchRecipe = async () => {
  //     try {
  //       const response = await fetch(`/pages/recipePageInformation/${id}`); // Supondo que você tenha uma rota na sua API para buscar os detalhes da receita pelo ID
  //       if (!response.ok) {
  //         throw new Error("Erro ao buscar receita");
  //       }
  //       const data = await response.json();
  //       setRecipe(data); // Define os detalhes da receita no estado
  //     } catch (error) {
  //       console.error("Erro ao buscar receita:", error);
  //     }
  //   };

  //   if (id) {
  //     fetchRecipe();
  //   }
  // }, [id]);

  // if (!recipe) {
  //   return <div>Carregando...</div>;
  // }
  return (
    <main className="my-12 flex flex-col gap-14">
      <h1 className="text-center font-bold text-slate-900 text-4xl">
        Most Popular Recipes
      </h1>
      <div className="flex justify-center items-center gap-10">
        {recipes.map(({ img, name, description, id }) => (
          <Link key={id} href={`/pages/recipePageInformation/${id}`}>
            <Container
              key={id}
              className="max-w-[300px] max-h-[420px] bg-slate-200 rounded-2xl flex flex-col duration-500 hover:scale-110 cursor-pointer"
            >
              <Top>
                <Image
                  className="w-[300px] h-[190px] rounded-t-2xl"
                  src={img}
                  alt="image of recipe"
                />
              </Top>
              <Bottom className="flex flex-col gap-5 items-start mx-6 my-4 pb-4">
                <h1 className="text-2xl font-bold text-slate-800">{name}</h1>
                <p className="font-medium text-lg text-slate-900">
                  {description}
                </p>
                <button className="bg-yellow-400 text-slate-900 px-6 py-1.5 rounded-full font-bold text-lg hover:bg-yellow-300 duration-500">
                  See Recipe
                </button>
              </Bottom>
            </Container>
          </Link>
        ))}
      </div>
    </main>
  );
}
