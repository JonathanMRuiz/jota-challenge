import React, { useState } from "react";
import { Input } from "@mui/material";
import PropTypes from "prop-types";
const SearchFilter = ({ onSearchChange }) => {
  const [searchMovie, setSearchMovie] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchChange(searchMovie);
  };

  const handlerChange = (e) => {
    setSearchMovie(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        className="bg-white"
        placeholder="Search..."
        value={searchMovie}
        onChange={handlerChange}
      />
    </form>
  );
};

export default SearchFilter;

SearchFilter.propTypes = {};
