import Image from "next/image";
import { get } from "lodash";
import withApollo from "../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import Link from "next/link";
import { GetMoviesQuery, useGetMoviesQuery } from "../generated/movies";

function Movies() {
  const { data } = useGetMoviesQuery();

  const movies = get(data, "getMovies", []) as GetMoviesQuery["getMovies"];

  const myLoader = ({ src }) => {
    return `https://image.tmdb.org/t/p/w500${src}`;
  };

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Image
            loader={myLoader}
            src={movie.poster_path}
            alt={movie.original_title}
            width="200px"
            height="200px"
          />
          <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
            {movie.original_title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default withApollo(Movies, { getDataFromTree });
