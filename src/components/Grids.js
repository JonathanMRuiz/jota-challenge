import * as React from "react";

import Grid from "@mui/material/Grid";
import Cards from "./Cards";
import Container from "@mui/material/Container";
const Grids = () => {
  return (
    <Container fixed>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Cards />
        </Grid>
        <Grid item xs={3}>
          <Cards />
        </Grid>
        <Grid item xs={3}>
          <Cards />
        </Grid>
        <Grid item xs={3}>
          <Cards />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Grids;
