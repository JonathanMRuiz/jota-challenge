import { useEffect } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { useParams } from "react-router-dom";

const LIMIT = 30;
const OFFSET = 0;

const BASE_URL = process.env.REACT_APP_BASE_URL;

const fetchPokemon = async ({
  pageParam = `${BASE_URL}/pokemon?offset=${OFFSET}&limit=${LIMIT}`,
}) => {
  const request = await fetch(pageParam);
  const { results, next } = await request.json();

  return {
    response: results,
    nextPage: next,
  };
};

const usePokemon = () => {
  const { name } = useParams();
  const { isLoading, data } = useQuery(["pokemon", name], async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    const results = await response.json();
    return results;
  });

  return { pokemon: data || [], isLoading };
};

const usePokemons = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    "pokemon",
    fetchPokemon,
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );

  useEffect(() => {
    let fetchingData = false;
    const onScroll = async (event) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;

      if (!fetchingData && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetchingData = true;
        if (hasNextPage) {
          await fetchNextPage();
        }
        fetchingData = false;
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  return { pokemons: data?.pages.flatMap((page) => page.response), isLoading };
};

export { usePokemons, usePokemon };
