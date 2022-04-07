// THIS IS A GENERATED FILE, use yarn codegen to regenerate
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Movie = {
  __typename?: 'Movie';
  id: Scalars['ID'];
  original_title?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  poster_path?: Maybe<Scalars['String']>;
  release_date?: Maybe<Scalars['String']>;
  vote_average?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getMovie?: Maybe<Movie>;
  getMovies?: Maybe<Array<Maybe<Movie>>>;
};


export type QueryGetMovieArgs = {
  id: Scalars['ID'];
};


export type QueryGetMoviesArgs = {
  query: Scalars['String'];
};

export type GetMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMoviesQuery = { __typename?: 'Query', getMovies?: Array<{ __typename?: 'Movie', id: string, original_title?: string | null, overview?: string | null, release_date?: string | null, vote_average?: string | null, poster_path?: string | null } | null> | null };

export type GetMovieQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetMovieQuery = { __typename?: 'Query', getMovie?: { __typename?: 'Movie', id: string, original_title?: string | null, overview?: string | null, release_date?: string | null, vote_average?: string | null, poster_path?: string | null } | null };


export const GetMoviesDocument = gql`
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

/**
 * __useGetMoviesQuery__
 *
 * To run a query within a React component, call `useGetMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMoviesQuery(baseOptions?: Apollo.QueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, options);
      }
export function useGetMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, options);
        }
export type GetMoviesQueryHookResult = ReturnType<typeof useGetMoviesQuery>;
export type GetMoviesLazyQueryHookResult = ReturnType<typeof useGetMoviesLazyQuery>;
export type GetMoviesQueryResult = Apollo.QueryResult<GetMoviesQuery, GetMoviesQueryVariables>;
export const GetMovieDocument = gql`
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

/**
 * __useGetMovieQuery__
 *
 * To run a query within a React component, call `useGetMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMovieQuery(baseOptions: Apollo.QueryHookOptions<GetMovieQuery, GetMovieQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, options);
      }
export function useGetMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieQuery, GetMovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, options);
        }
export type GetMovieQueryHookResult = ReturnType<typeof useGetMovieQuery>;
export type GetMovieLazyQueryHookResult = ReturnType<typeof useGetMovieLazyQuery>;
export type GetMovieQueryResult = Apollo.QueryResult<GetMovieQuery, GetMovieQueryVariables>;