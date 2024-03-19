import React from "react";

export default function FeaturedSection() {
  return (
    <div className="bg-cover bg-center h-64 w-screen relative bg-bgImg bg-no-repeat">
      <div className="absolute inset-0 bg-slate-700 opacity-20"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-center">
        <h1 className="text-4xl font-bold">
          Get inspired, cook with passion and enjoy unforgettable moments at the
          table
        </h1>
      </div>
    </div>
  );
}
