import React from "react";
import { Bottom, Container, Top } from "./components/Card";
import Image from "next/image";
import recipes from "./mocks";

export default function MostPopular() {
  return (
    <main className="my-12 flex flex-col gap-14">
      <h1 className="text-center font-bold text-slate-900 text-4xl">
        Most Popular Recipes
      </h1>
      <div className="flex justify-center items-center gap-3">
        {recipes.map(({ img, name, description, id }) => (
          <Container key={id} className="max-w-[300px]">
            <Top>
              <Image src={img} alt="image of recipe" />
            </Top>
            <Bottom>
              <h1>{name}</h1>
              <p>{description}</p>
              <button>See Recipe</button>
            </Bottom>
          </Container>
        ))}
      </div>
    </main>
  );
}
