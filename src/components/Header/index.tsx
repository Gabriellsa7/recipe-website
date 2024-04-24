"use client";
import React, { ChangeEvent, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { BsCupHot } from "react-icons/bs";
import recipes from "@/app/pages/initialPage/components/MostPopular/mocks";
import { Bottom, Container, Top } from "../Card";
import Image from "next/image";
import recentRecipes from "@/app/pages/initialPage/components/RecentRecipe/mocks";
import allRecipes from "@/app/pages/recipes/components/AllRecipes/mocks";
import latestRecipes from "@/app/pages/recipes/components/LatestRecipes/mocks";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearch(query);
  };

  const generalRecipes = recipes
    .concat(recentRecipes)
    .concat(allRecipes)
    .concat(latestRecipes);

  const filteredRecipes =
    search != ""
      ? generalRecipes.filter((name) =>
          name.name.toLowerCase().includes(search.toLowerCase())
        )
      : generalRecipes;

  return (
    <main className={`flex flex-col mb-4 overflow-hidden`}>
      <div className="bg-yellow-400 p-2.5 w-screen mb-2"></div>
      <div className={`flex items-center justify-between pb-6`}>
        <div
          className={`flex items-center ${
            isMenuOpen ? "hidden" : "block"
          } min-[768px]:hidden gap-12 pb-4`}
        >
          <button
            onClick={toggleMenu}
            className="block text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.414 18.414L12 11.828l6.586 6.586-1.414 1.414L12 14.657l-5.172 5.172-1.414-1.414z"
                />
              </svg>
            ) : (
              <svg
                className="h-10 w-10 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        //${isMenuOpen ? "block" : "hidden"}
        className={`${
          isMenuOpen ? "block" : "hidden"
        } min-[768px]:flex min-[768px]:items-center min-[768px]:justify-center gap-12 pb-4`}
      >
        <div className="flex items-center justify-around gap-12 min-[320px]:pb-4 min-[320px]:flex-col min-[320px]:gap-4 min-[768px]:flex-row min-[768px]:gap-12 min-[768px]:pb-0">
          <div className="flex items-center justify-center">
            <Link href="/">
              <h2 className="font-bold text-2xl text-gray-700 min-[320px]:text-lg min-[768px]:text-2xl">
                Home
              </h2>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Link href="/pages/recipes">
              <h2 className="font-bold text-2xl text-gray-700 min-[320px]:text-lg min-[768px]:text-2xl">
                Recipes
              </h2>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Link href="/pages/myRecipes">
              <h2 className="font-bold text-2xl text-gray-700 min-[320px]:text-lg min-[768px]:text-2xl">
                My Recipes
              </h2>
            </Link>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className="px-2 relative">
              <CiSearch
                size="20px"
                color="gray"
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search Recipe"
                className="rounded-xl px-8 py-2 border-none focus:outline-none bg-slate-200"
                onChange={handleSearchInput}
              />
            </div>
          </div>
          {/* <div className="absolute top-[94.4px] w-[245px] h-auto bg-slate-200 rounded-xl z-10">
            <div className="flex flex-col gap-4 px-2 py-2">
              {filteredRecipes &&
                filteredRecipes.map((recipes) => (
                  <Link
                    key={recipes.id}
                    href={`/pages/recipePageInformation?name=${recipes.name}&description=${recipes.description}&img=${recipes.img}`}
                  >
                    <Container
                      key={recipes.id}
                      className="flex gap-4 items-center duration-500 hover:scale-105 cursor-pointer border-2 border-slate-300"
                    >
                      <Top>
                        <Image
                          className="w-20 rounded-lg"
                          src={recipes.img}
                          alt="image of recipe"
                        />
                      </Top>
                      <Bottom className="">
                        <h1 className="">{recipes.name}</h1>
                      </Bottom>
                    </Container>
                  </Link>
                ))}
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
}
