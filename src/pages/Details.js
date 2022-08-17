import { useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Navbar from "../components/Navbar/Navbar";

const Details = () => {
  const [data, setData] = useState({});

  const { name } = useParams();

  const { isLoading } = useQuery(["pokemon", name], async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    const results = await response.json();

    setData(results);
  });

  return (
    <>
      <Navbar logo="Details" />
      <div className="h-full bg-red-900 flex flex-col justify-betwene items-center text-white">
        {isLoading ? (
          <p>Esta cargando...</p>
        ) : (
          <div>
            <div>
              <h1 className="text-2xl capitalize">{data?.name}</h1>
            </div>

            <div>
              <img src={data?.sprites?.front_default} alt={data?.name} />
            </div>

            <div>
              <h3 className="text-xl">Moves</h3>

              {data?.moves?.map((m, i) => (
                <ul key={data?.id + i}>
                  <li className="text-sm capitalize">{m.move.name}</li>
                </ul>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Details;
