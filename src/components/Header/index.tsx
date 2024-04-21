"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    //Add functionality to search input
    //Styling the burger menu
    <main className={`flex flex-col mb-4 overflow-hidden`}>
      <div className="bg-yellow-400 p-2.5 w-screen"></div>
      {/* <div className={`flex gap-5 items-center`}>
          <BsCupHot size={26} />
          <h1 className="font-semibold text-2xl text-gray-700">
            Recipes Boruto
          </h1>
        </div> */}
      <div className={`flex items-center justify-between mt-2 pb-6`}>
        <div className="flex items-center min-[768px]:hidden">
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
        className={`${
          isMenuOpen ? "block" : "hidden"
        } min-[768px]:flex min-[768px]:items-center min-[768px]:justify-center gap-12`}
      >
        <div className="flex items-center">
          <Link href="/">
            <h2 className="font-bold text-2xl text-gray-700 min-[320px]:text-lg min-[768px]:text-2xl">
              Home
            </h2>
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/pages/recipes">
            <h2 className="font-bold text-2xl text-gray-700 min-[320px]:text-lg min-[768px]:text-2xl">
              Recipes
            </h2>
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/pages/myRecipes">
            <h2 className="font-bold text-2xl text-gray-700 min-[320px]:text-lg min-[768px]:text-2xl">
              My Recipes
            </h2>
          </Link>
        </div>
        {/* <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } min-[768px]:flex min-[768px]:items-center min-[768px]:justify-center gap-12`}
        > */}
        <div className="flex items-center">
          <div className="px-2 relative">
            <CiSearch
              size="20px"
              color="gray"
              className="absolute top-1/2 left-5 transform -translate-y-1/2 text-gray-400"
            />
          </div>
          <input
            type="text"
            placeholder="Search Recipe"
            className="rounded-xl px-8 py-2 border-none focus:outline-none bg-slate-200"
          />
        </div>
      </div>
      {/* </div> */}
    </main>
  );
}
