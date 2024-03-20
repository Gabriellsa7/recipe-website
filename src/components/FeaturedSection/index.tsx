import React from "react";

export default function FeaturedSection() {
  return (
    <div className="bg-cover bg-center h-[263px] w-[100%] relative bg-[url('../assets/bgFeaturedSection.jpg')] bg-no-repeat">
      <div className="absolute inset-0 bg-slate-900 opacity-60"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-center">
        <h1 className="text-4xl font-bold">
          Get inspired, cook with passion and enjoy unforgettable moments at the
          table
        </h1>
      </div>
    </div>
  );
}
