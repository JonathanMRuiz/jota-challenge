import { useEffect } from "react";
import { useInfiniteQuery } from "react-query";

const fetchRepositories = async (page = 1) => {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=topic:react&per_page=30&${page}`
  );
  return response.json();
};

const FetchData = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    "repositories",
    ({ pageParam = 1 }) => fetchRepositories(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPages = lastPage.total_count / 30;
        const nextPage = allPages.length + 1;
        return nextPage <= maxPages ? nextPage : undefined;
      },
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
    <div>
      <h1>GET DATA</h1>
      {/* {data.pages.map((page) =>
        page.items.map((item) => (
          <li>
            <p>
              {item.name}
              <b></b>
            </p>
          </li>
        ))
      )} */}
    </div>
  );
};

export default FetchData;
