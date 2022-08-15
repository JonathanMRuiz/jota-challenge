import { Container } from "@mui/material";

const Details = () => {
  return (
    <Container fixed>
      <div className="h-screen flex flex-col justify-around items-center text-white">
        <div>
          <h1>Title section</h1>
        </div>
        <div>
          <p>Title image</p>
          <p>Image</p>
          <p>Description</p>
        </div>
      </div>
    </Container>
  );
};

export default Details;
