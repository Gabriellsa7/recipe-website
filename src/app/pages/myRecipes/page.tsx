"use client";
import { Bottom, Container, Top } from "@/components/Card";
import Footer from "@/components/Footer";
import { MdDeleteForever } from "react-icons/md";
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
  const { recipes, removeRecipe } = useRecipe();

  const handleDeleteRecipe = (recipeId: any) => {
    removeRecipe(recipeId);
  };
  return (
    <main className="flex flex-col justify-between h-full overflow-x-hidden">
      <Header />
      <div className="grid grid-cols-4 justify-center items-center gap-10 m-20 mt-14 min-[320px]:grid-cols-1 min-[768px]:grid min-[768px]:grid-cols-2 min-[1024px]:grid-cols-3 min-[1440px]:grid-cols-4">
        {recipes &&
          recipes.map(
            (recipe) =>
              recipe && (
                <Container
                  key={recipe && recipe.id}
                  className="max-w-[300px] max-h-[420px] bg-slate-200 rounded-2xl flex flex-col duration-500 hover:scale-110 cursor-pointer"
                >
                  <Top>
                    {recipe && recipe.img ? (
                      <Image
                        className="w-[300px] h-[190px] rounded-t-2xl"
                        src={recipe.img}
                        alt="image of recipe"
                      />
                    ) : (
                      ""
                    )}
                  </Top>
                  <Bottom className="flex flex-col gap-5 items-start mx-6 my-4 pb-4">
                    <h1 className="text-2xl font-bold text-slate-800 min-[320px]:text-lg min-[768px]:text-xl min-[1440px]:text-2xl">
                      {recipe ? recipe.name : ""}
                    </h1>
                    <p className="font-medium text-lg text-slate-900 min-[320px]:text-sm min-[768px]:text-lg">
                      {recipe ? recipe.description : ""}
                    </p>
                    <div className="flex gap-20 w-full items-center min-[320px]:gap-5 min-[768px]:gap-20">
                      <Link
                        key={recipe ? recipe.id : null}
                        href={
                          recipe
                            ? `/pages/recipePageInformation?name=${recipe.name}&description=${recipe.description}&img=${recipe.img}`
                            : ""
                        }
                      >
                        <button className="bg-yellow-400 text-slate-900 px-6 py-1.5 rounded-full font-bold text-lg hover:bg-yellow-300 duration-500 min-[320px]:text-sm min-[320px]:px-3 min-[320px]:py-1 min-[1440px]:text-lg min-[1440px]:px-6 min-[1440px]:py-1.5">
                          See Recipe
                        </button>
                      </Link>
                      <button onClick={() => handleDeleteRecipe(recipe.id)}>
                        <MdDeleteForever
                          className="text-[#3e404a] hover:text-slate-400 duration-500"
                          size={32}
                        />
                      </button>
                    </div>
                  </Bottom>
                </Container>
              )
          )}
      </div>

      <Footer />
    </main>
  );
}
