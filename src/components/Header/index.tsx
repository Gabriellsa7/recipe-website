import React from "react";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <main className={`flex w-screen flex-col`}>
      <div className="bg-yellow-500 p-3 "></div>
      <div className={`flex w-screen items-center justify-around py-6`}>
        <div>
          <h1 className="font-semibold text-2xl text-gray-700">
            Recipes Boruto
          </h1>
        </div>
        <div className="flex items-center justify-center gap-12">
          <h2 className="font-bold text-2xl text-gray-700">Home</h2>
          <h2 className="font-bold text-2xl text-gray-700">Recipes</h2>
          <h2 className="font-bold text-2xl text-gray-700">About</h2>
        </div>
        <div className="flex items-center">
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
