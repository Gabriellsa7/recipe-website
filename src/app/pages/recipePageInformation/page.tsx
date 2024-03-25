import Header from "@/components/Header";
import React from "react";
import Ingredients from "./components/Ingredients";
import PreparationMode from "./components/PreparationMode";
import AdditionalInformation from "./components/AdditionalInformation";

export default function RecipePageInformation() {
  return (
    <main>
      <Header />
      <div>
        <div className="bg-cover bg-center h-[263px] w-[100%] relative bg-[url('../assets/bgFeaturedSection.jpg')] bg-no-repeat">
          <div className="absolute inset-0 bg-slate-900 opacity-60"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            <h1 className="text-4xl font-bold">Waffles</h1>
          </div>
        </div>
      </div>
      <div>
        <Ingredients />
        <PreparationMode />
        <AdditionalInformation />
      </div>
    </main>
  );
}
