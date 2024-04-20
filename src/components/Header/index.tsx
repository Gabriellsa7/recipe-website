import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsCupHot } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    //make a burger menu for mobile
    <main className={`flex w-screen flex-col  mb-4 overflow-hidden`}>
      <div className="bg-yellow-400 p-2.5 w-screen "></div>
      <div className={`flex w-screen items-center mt-4 justify-around py-6`}>
        <div className={`flex gap-5 items-center`}>
          <BsCupHot size={26} />
          <h1 className="font-semibold text-2xl text-gray-700">
            Recipes Boruto
          </h1>
        </div>
        <div className="flex items-center justify-center gap-12 min-[320px]:hidden min-[1024px]:flex">
          <Link href="/">
            <h2 className="font-bold text-2xl text-gray-700">Home</h2>
          </Link>
          <Link href="/pages/recipes">
            <h2 className="font-bold text-2xl text-gray-700">Recipes</h2>
          </Link>
          <Link href="/pages/myRecipes">
            <h2 className="font-bold text-2xl text-gray-700">My Recipes</h2>
          </Link>
        </div>
        <div className="flex items-center min-[320px]:hidden min-[768px]:flex min-[1024px]:flex">
          <div className="absolute px-2">
            <CiSearch size="20px" color="gray" />
          </div>
          <input
            type="text"
            placeholder="Search Recipe"
            className="rounded-xl px-8 py-2 border-none focus:outline-none bg-slate-200"
          />
        </div>
      </div>
    </main>
  );
}
