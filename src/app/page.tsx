"use client";
import { RecipeProvider } from "@/components/RecipeContext/RecipeContext";
import InitialPage from "./pages/initialPage/page";

export default function Home() {
  return (
    <RecipeProvider>
      <InitialPage />
    </RecipeProvider>
  );
}
