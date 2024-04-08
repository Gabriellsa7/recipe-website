import React from "react";
import { Bottom, Container, Top } from "@/components/Card";
import Image from "next/image";
import recipes from "./mocks";
import Link from "next/link";
import { FaBookmark } from "react-icons/fa";

export default function MostPopular() {
  return (
    <main className="my-12 flex flex-col gap-14">
      <h1 className="text-center font-bold text-slate-900 text-4xl">
        Most Popular Recipes
      </h1>
      <div className="flex justify-center items-center gap-10">
        {recipes.map((recipes) => (
          <Link
            key={recipes.id}
            // href={{
            //   pathname: "/pages/recipePageInformation",
            //   query: { img: img.toString(), id, name, description },
            // }}
            href={`/pages/recipePageInformation?name=${recipes.name}&description=${recipes.description}&img=${recipes.img}`}
          >
            <Container
              key={recipes.id}
              className="max-w-[300px] max-h-[420px] bg-slate-200 rounded-2xl flex flex-col duration-500 hover:scale-110 cursor-pointer"
            >
              <Top>
                <Image
                  className="w-[300px] h-[190px] rounded-t-2xl"
                  src={recipes.img}
                  alt="image of recipe"
                />
              </Top>
              <Bottom className="flex flex-col gap-5 items-start mx-6 my-4 pb-4">
                <h1 className="text-2xl font-bold text-slate-800">
                  {recipes.name}
                </h1>
                <p className="font-medium text-lg text-slate-900">
                  {recipes.description}
                </p>
                <div className="flex gap-20 w-full items-center">
                  <button className="bg-yellow-400 text-slate-900 px-6 py-1.5 rounded-full font-bold text-lg hover:bg-yellow-300 duration-500">
                    See Recipe
                  </button>
                  <Link href="/pages/recipes">
                    <button>
                      <FaBookmark
                        className="text-[#3e404a] hover:text-slate-400 duration-500"
                        size={25}
                      />
                    </button>
                  </Link>
                </div>
              </Bottom>
            </Container>
          </Link>
        ))}
      </div>
    </main>
  );
}
