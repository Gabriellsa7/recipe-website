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
      <div className="flex flex-col justify-center items-center gap-12 ">
        {recentRecipes.map((recentRecipes) => (
          <Link
            key={recentRecipes.id}
            href={`/pages/recipePageInformation?name=${recentRecipes.name}&description=${recentRecipes.description}&img=${recentRecipes.img}`}
          >
            <Container
              key={recentRecipes.id}
              className=" bg-slate-200 rounded-2xl flex duration-500 hover:scale-110 cursor-pointer gap-5 min-w-[1000px] min-h-[300px] max-w-[800px] max-h-[300px] min-[320px]:min-w-[100px] min-[320px]:m-3 min-[320px]:flex-col min-[768px]:min-w-[300px] min-[768px]:min-h-[550px] min-[768px]:flex-col min-[1024px]:min-w-[1000px] min-[1024px]:min-h-[300px] min-[1024px]:flex-row"
            >
              <Top className="max-h-[300px] max-w-[400px] overflow-hidden min-[320px]:min-w-[100px] min-[320px]:min-h-[100px] min-[768px]:min-w-[200px] min-[768px]:min-h-[300px] min-[1024px]:min-w-[400px]">
                <Image
                  className="min-w-[400px] min-h-[300px] max-h-[300] rounded-s-2xl object-cover min-[320px]:w-full min-[320px]:min-w-[100px] min-[320px]:rounded-t-2xl min-[768px]:min-w-[300px] min-[768px]:rounded-t-2xl min-[768px]:rounded-bl-none min-[768px]:w-full min-[1024px]:min-w-[400px] min-[1024px]:rounded-tr-none "
                  src={recentRecipes.img}
                  alt="Donut Image"
                />
              </Top>
              <Bottom className="flex flex-col gap-5 items-start mx-6 my-4 pb-4 justify-around min-[768px]:min-h-[200px]">
                <h1 className="text-2xl font-bold text-slate-800 min-[320px]:text-lg min-[768px]:text-xl min-[1440px]:text-2xl">
                  {recentRecipes.name}
                </h1>
                <p className="font-medium text-lg text-slate-900 min-[320px]:max-w-[100px] min-[320px]:truncate min-[768px]:max-w-[200px] min-[768px]:truncate min-[768px]:overflow-hidden min-[1024px]:min-w-[500px] min-[320px]:text-sm min-[768px]:text-lg">
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
