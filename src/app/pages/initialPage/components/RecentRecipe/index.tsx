import React from "react";
import { Bottom, Container, Top } from "@/components/Card";

import Image from "next/image";
import recentRecipes from "./mocks";
import Link from "next/link";

export default function RecentRecipes() {
  return (
    <main className="w-screen my-12">
      <h1 className="text-center font-bold text-slate-900 text-4xl mb-9">
        Recent Recipes
      </h1>
      <div className="flex flex-col justify-center items-center gap-12">
        {recentRecipes.map((recentRecipes) => (
          <Link
            key={recentRecipes.id}
            // href={{
            //   pathname: "/pages/recipePageInformation",
            //   query: { img: img.toString(), id, name, description },
            // }}
            href={`/pages/recipePageInformation?name=${recentRecipes.name}&description=${recentRecipes.description}&img=${recentRecipes.img}`}
          >
            <Container
              key={recentRecipes.id}
              className=" bg-slate-200 rounded-2xl flex duration-500 hover:scale-110 cursor-pointer gap-5 min-w-[1000px] min-h-[300px] max-w-[1000px] max-h-[300px] flex-1"
            >
              <Top className="max-h-[300px] max-w-[400px] overflow-hidden">
                <Image
                  className="min-w-[400px] min-h-[300px] max-h-[300] rounded-s-2xl object-cover"
                  src={recentRecipes.img}
                  alt="Donut Image"
                />
              </Top>
              <Bottom className="flex flex-col gap-5 items-start mx-6 my-4 pb-4 justify-around">
                <h1 className="text-2xl font-bold text-slate-800">
                  {recentRecipes.name}
                </h1>
                <p className="font-medium text-lg text-slate-900">
                  {recentRecipes.description}
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
