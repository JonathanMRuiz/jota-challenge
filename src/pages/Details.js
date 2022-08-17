import { Container } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const Details = () => {
  const [data, setData] = useState({});

  const { name } = useParams();

  useQuery(["pokemon", name], async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    const results = await response.json();

    setData(results);
  });

  return (
    <Container fixed>
      <div className="h-screen flex flex-col justify-around items-center text-white">
        <div>
          <h1 className="text-xl capitalize">{data?.name}</h1>
        </div>
        <div>
          <img src={data?.sprites?.front_default} alt={data?.name} />
        </div>

        <div>
          <h3>Moves</h3>

          {data?.moves?.map((m, i) => (
            <ul key={data?.id + i}>
              <li className="text-xl capitalize">{m.move.name}</li>
            </ul>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Details;
