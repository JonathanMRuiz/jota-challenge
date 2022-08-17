import React from "react";

import { Grid } from "@mui/material";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

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
        <Grid>
          <CircularProgress />
        </Grid>
      ) : (
        data?.pages?.map((page) =>
          page.response.map((response) => (
            <Grid item xs={2} sm={4} md={4} key={response.id}>
              <Link
                state={{ name: response.name }}
                to={`/details/${response.name}`}
              >
                <Item className="cursor-pointer">{response.name}</Item>
              </Link>
            </Grid>
          ))
        )
      )}
    </Grid>
  );
};

export default Cards;
