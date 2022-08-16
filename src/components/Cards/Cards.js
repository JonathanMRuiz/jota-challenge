import React from "react";

import { Grid } from "@mui/material";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Cards = ({ data, isLoading }) => {
  return (
    <Grid
      container
      spacing={{ xs: 4, md: 8 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {isLoading ? (
        <p>Esta cargando...</p>
      ) : (
        data?.pages?.map((page) =>
          page.response.map((response) => (
            <Grid item xs={2} sm={4} md={4} key={response.id}>
              <Item className="cursor-pointer">{response.name}</Item>
            </Grid>
          ))
        )
      )}
    </Grid>
  );
};

export default Cards;
