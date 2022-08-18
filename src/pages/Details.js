import Navbar from "../components/Navbar/Navbar";
import { usePokemon } from "../hooks/usePokemons";

const Details = () => {
  const { pokemon, isLoading } = usePokemon();

  return (
    <>
      <Navbar logo="Details" />
      <div className="h-full bg-red-900 flex flex-col justify-betwene items-center text-white">
        <div>
          <div>
            <h1 className="text-2xl capitalize">{pokemon?.name}</h1>
          </div>
          {isLoading ? (
            <p>Esta cargando...</p>
          ) : (
            <>
              <div>
                <img
                  src={pokemon?.sprites?.front_default}
                  alt={pokemon?.name}
                />
              </div>

              <div>
                <h3 className="text-xl">Moves</h3>

                {pokemon?.moves?.map((m, i) => (
                  <ul key={pokemon?.id + i}>
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
