import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FetchData from "../api/FetchData";

const Home = () => {
  return (
    <Container fixed>
      <Grid spacing={6}>
        <Grid item xs={3}>
          <FetchData />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
