"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { BsCupHot } from "react-icons/bs";

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
      <div className={`flex items-center justify-between mt-2 pb-6`}>
        <div
          className={` ${
            isMenuOpen ? "hidden" : "block"
          } flex gap-4 items-center min-[768px]:hidden`}
        >
          <BsCupHot size={26} />
          <h1 className="font-semibold text-2xl text-gray-700 min-[320px]:text-lg min-[768px]:text-xl min-[1024]:text-2xl min-[1440]:text-4xl">
            Recipes Boruto
          </h1>
        </div>
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
        } min-[768px]:flex min-[768px]:items-center min-[768px]:justify-center gap-12 pb-4`}
      >
        <div
          className={`flex gap-4 items-center min-[320px]:hidden min-[768px]:flex`}
        >
          <BsCupHot size={26} />
          <h1 className="font-semibold text-2xl text-gray-700 ">
            Recipes Boruto
          </h1>
        </div>
        <div className="flex items-center justify-around gap-12  min-[320px]:pb-4 min-[320px]:flex-row min-[320px]:gap-4 min-[768px]:gap-12 min-[768px]:pb-0">
          <div className="flex items-center justify-center">
            <Link href="/">
              <h2 className="font-bold text-xl text-gray-700">Home</h2>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Link href="/pages/recipes">
              <h2 className="font-bold text-xl text-gray-700">Recipes</h2>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Link href="/pages/myRecipes">
              <h2 className="font-bold text-xl text-gray-700">My Recipes</h2>
            </Link>
          </div>
        </div>
        {/* <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } min-[768px]:flex min-[768px]:items-center min-[768px]:justify-center gap-12`}
        > */}
        <div className="flex items-center justify-center">
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
