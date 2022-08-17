import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Details = () => {
  const { name } = useParams();

  // const { state } = useLocation();

  const { isLoading, data } = useQuery(
    ["pokemon", name],
    async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

      // await new Promise((resolve) => setTimeout(resolve, 5000));

      const results = await response.json();
      return results;
    }
    // {
    //   enabled: !!name,
    //   placeholderData: {
    //     name: state?.name,
    //   },
    // }
  );

  return (
    <>
      <Navbar logo="Details" />
      <div className="h-full bg-red-900 flex flex-col justify-betwene items-center text-white">
        <div>
          <div>
            <h1 className="text-2xl capitalize">{data?.name}</h1>
          </div>
          {isLoading ? (
            <p>Esta cargando...</p>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Details;
