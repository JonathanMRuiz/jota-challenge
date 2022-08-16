import { useState } from "react";
import { useQuery } from "react-query";
import SearchFilter from "../components/SearchFilter/SearchFilter";

function SearchData() {
  const [searchName, setSearchName] = useState("");
  useQuery(["pokemon", searchName], async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchName}`
    );
    console.log(response);
    return await response.json();
  });

  return (
    <>
      <SearchFilter onSearchChange={setSearchName} />
    </>
  );
}

export default SearchData;
