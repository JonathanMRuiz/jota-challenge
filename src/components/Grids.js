import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "./Card";
import Container from "@mui/material/Container";

const Grids = () => {
  return (
    <Container fixed>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Grids;
