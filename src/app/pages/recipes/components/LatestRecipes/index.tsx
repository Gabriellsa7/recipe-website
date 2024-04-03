import React from "react";
import { Bottom, Container, Top } from "@/components/Card";
import Image from "next/image";
import latestRecipes from "./mocks";
import Link from "next/link";

export default function LatestRecipes() {
  return (
    <div>
      <h1 className="text-center font-bold text-slate-900 text-4xl">
        Latest Recipes
      </h1>
      <div className="grid grid-cols-4 justify-center items-center gap-10 m-20">
        {latestRecipes.map((latestRecipes) => (
          <Link
            key={latestRecipes.id}
            href={`/pages/recipePageInformation?name=${latestRecipes.name}&description=${latestRecipes.description}&img=${latestRecipes.img}`}
          >
            <div key={latestRecipes.id}>
              <Container
                key={latestRecipes.id}
                className="max-w-[300px] max-h-[420px] bg-slate-200 rounded-2xl flex flex-col duration-500 hover:scale-110 cursor-pointer"
              >
                <Top>
                  <Image
                    className="w-[300px] h-[190px] rounded-t-2xl"
                    src={latestRecipes.img}
                    alt="image of recipe"
                  />
                </Top>
                <Bottom className="h-max-[212px] flex flex-col gap-5 items-start mx-6 my-4 pb-4 ">
                  <h1 className="text-2xl font-bold text-slate-800">
                    {latestRecipes.name}
                  </h1>
                  <p className="font-medium text-lg text-slate-900 line-clamp-3">
                    {latestRecipes.description}
                  </p>
                  <button className="bg-yellow-400 text-slate-900 px-6 py-1.5 rounded-full font-bold text-lg hover:bg-yellow-300 duration-500">
                    See Recipe
                  </button>
                </Bottom>
              </Container>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
