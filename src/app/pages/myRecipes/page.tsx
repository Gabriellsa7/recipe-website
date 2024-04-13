"use client";
import { Bottom, Container, Top } from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  RecipeProvider,
  useRecipe,
} from "@/components/RecipeContext/RecipeContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MyRecipes() {
  return (
    <RecipeProvider>
      {" "}
      {/* Wraps the "My Recipes" page with the RecipeProvider provider */}
      <MyRecipesContent />
    </RecipeProvider>
  );
}

function MyRecipesContent() {
  const { recipes } = useRecipe();
  return (
    <main>
      <Header />
      <section className="grid grid-cols-4 justify-center items-center gap-10 m-20">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            href={`/pages/recipePageInformation?name=${recipe.name}&description=${recipe.description}&img=${recipe.img}`}
          >
            <Container
              key={recipe.id}
              className="max-w-[300px] max-h-[420px] bg-slate-200 rounded-2xl flex flex-col duration-500 hover:scale-110 cursor-pointer"
            >
              <Top>
                {recipe.img && (
                  <Image
                    className="w-[300px] h-[190px] rounded-t-2xl"
                    src={recipe.img}
                    alt="image of recipe"
                  />
                )}
              </Top>
              <Bottom className="flex flex-col gap-5 items-start mx-6 my-4 pb-4">
                <h1 className="text-2xl font-bold text-slate-800">
                  {recipe.name}
                </h1>
                <p className="font-medium text-lg text-slate-900">
                  {recipe.description}
                </p>
                <div className="flex gap-20 w-full items-center">
                  <button className="bg-yellow-400 text-slate-900 px-6 py-1.5 rounded-full font-bold text-lg hover:bg-yellow-300 duration-500">
                    See Recipe
                  </button>
                </div>
              </Bottom>
            </Container>
          </Link>
        ))}
      </section>

      <Footer />
    </main>
  );
}
