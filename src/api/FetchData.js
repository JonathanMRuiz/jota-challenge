import { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import Cards from "../components/Cards/Cards";

const LIMIT = 10;
const OFFSET = 0;

const fetchPokemon = async ({
  pageParam = `https://pokeapi.co/api/v2/pokemon?offset=${OFFSET}&limit=${LIMIT}`,
}) => {
  const request = await fetch(pageParam);
  const { results, next } = await request.json();

  return {
    response: results,
    nextPage: next,
  };
};

const FetchData = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    "pokemon",
    fetchPokemon,
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );

  console.log(data?.pages?.map((page) => page.response.map((res) => res.url)));
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

  return (
    <div>
      {isLoading ? (
        <p>Esta cargando</p>
      ) : (
        data?.pages?.map((group) =>
          group.response.map((pokemon) => <Cards title={pokemon.name} />)
        )
      )}
    </div>
  );
};

export default FetchData;
