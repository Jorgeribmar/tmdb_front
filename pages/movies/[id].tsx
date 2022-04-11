import { MOVIE_QUERY } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { Card, StyledBody } from "baseui/card";
import { useRouter } from "next/router";

function Movie() {
  const router = useRouter();
  console.log("router", router);

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
    <Card
      overrides={{ Root: { style: { width: "300px" } } }}
      headerImage={`https://image.tmdb.org/t/p/w500${data.movie.posterPath}`}
      title={data.movie.originalTitle}
    >
      <StyledBody>
        <div>{data.movie.overview}</div>
        <br />
        <div>{data.movie.releaseDate}</div>
        <br />
        <div>{data.movie.voteAverage}</div>
      </StyledBody>
    </Card>
  );
}

export default Movie;
