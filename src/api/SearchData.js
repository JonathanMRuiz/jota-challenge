import { useQuery } from "react-query";

const searchPokemon = async (pokemon) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  const { results } = await response.json();

  return {
    response: results,
  };
};

const SearchData = (pokemon) => {
  const { data, isLoading } = useQuery(["search", pokemon], searchPokemon);
};
