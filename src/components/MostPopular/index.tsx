import React from "react";
import { Bottom, Container, Top } from "./components/Card";
import Image from "next/image";

export default function MostPopular() {
  return (
    <Container>
      <Top>
        <Image src="" alt="" />
      </Top>
      <Bottom>
        <h1>Waffles</h1>
        <p>Top Recipe</p>
        <button>See Recipe</button>
      </Bottom>
    </Container>
  );
}
