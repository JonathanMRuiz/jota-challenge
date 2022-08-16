import { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import Cards from "../components/Cards/Cards";

const LIMIT = 25;
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
    <>
      <Cards data={data} isLoading={isLoading} />
    </>
  );
};

export default FetchData;
