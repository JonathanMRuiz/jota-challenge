import React from "react";

import { Grid } from "@mui/material";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Card = ({ pokemons, isLoading }) => {
  return (
    <Grid
      container
      spacing={{ xs: 4, md: 8 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {isLoading ? (
        <p>Esta cargando...</p>
      ) : (
        pokemons.map((pokemon) => (
          <Grid item xs={2} sm={4} md={4} key={pokemon.id}>
            <Link
              state={{ name: pokemon.name }}
              to={`/details/${pokemon.name}`}
            >
              <Item className="cursor-pointer">{pokemon.name}</Item>
            </Link>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Card;

Card.protoType = {
  pokemons: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    url: PropTypes.string,
  }),
  isLoading: PropTypes.bool,
};
