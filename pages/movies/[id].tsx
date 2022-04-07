import withApollo from "../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { get } from "lodash";
import { useGetMovieQuery } from "../../generated/movies";

function Movie({ query }) {
  const id = get(query, "id");

  const { data } = useGetMovieQuery({
    variables: {
      id,
    },
  });
  return <div>{JSON.stringify(data)}</div>;
}

export default withApollo(Movie, { getDataFromTree });
