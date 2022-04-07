import { gql } from "@apollo/client";

export const MOVIES_QUERY = gql`
  query getMovies {
    getMovies(query: "spider") {
      id
      original_title
      overview
      release_date
      vote_average
      poster_path
    }
  }
`;

export const MOVIE_QUERY = gql`
  query getMovie($id: ID!) {
    getMovie(id: $id) {
      id
      original_title
      overview
      release_date
      vote_average
      poster_path
    }
  }
`;
