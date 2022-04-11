import { gql } from "@apollo/client";

export const MOVIES_QUERY = gql`
  query movies($query: String!) {
    movies(query: $query) {
      id
      originalTitle
      overview
      releaseDate
      voteAverage
      posterPath
    }
  }
`;

export const MOVIE_QUERY = gql`
  query movie($id: ID!) {
    movie(id: $id) {
      id
      originalTitle
      overview
      releaseDate
      voteAverage
      posterPath
    }
  }
`;
