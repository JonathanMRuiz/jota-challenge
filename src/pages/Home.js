import React from "react";
import Container from "@mui/material/Container";
import { usePokemons } from "../hooks/usePokemons";
import Cards from "../components/Card/Card";
const Home = () => {
  const { pokemons, isLoading } = usePokemons();

  console.log(pokemons);
  return (
    <Container fixed>
      <Cards pokemons={pokemons} isLoading={isLoading} />
    </Container>
  );
};

export default Home;
