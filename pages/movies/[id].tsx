import { MOVIE_QUERY } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Example from "../../components/moviePageGrid";

function Movie() {
  const router = useRouter();

  const query = router.query;
  const id = query.id;

  const { loading, error, data } = useQuery(MOVIE_QUERY, {
    variables: {
      id: id,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <h1>{data.movie.originalTitle}</h1>
      <Example
        posterPath={data.movie.posterPath}
        overview={data.movie.overview}
        releaseDate={data.movie.releaseDate}
        voteAverage={data.movie.voteAverage}
      ></Example>
    </div>
  );
}

export default Movie;
