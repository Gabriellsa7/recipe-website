"use client";
import React from "react";
import { Bottom, Container, Top } from "../Card";
import Image from "next/image";
import recipes from "./mocks";

export default function MostPopular() {
  return (
    <main className="my-12 flex flex-col gap-14">
      <h1 className="text-center font-bold text-slate-900 text-4xl">
        Most Popular Recipes
      </h1>
      <div className="flex justify-center items-center gap-10">
        {recipes.map(({ img, name, description, id }) => (
          <div key={id}>
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
          </div>
        ))}
      </div>
    </main>
  );
}
