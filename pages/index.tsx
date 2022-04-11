/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { MOVIES_QUERY } from "../graphql/queries";
import { Input } from "baseui/input";
import { Button, SIZE } from "baseui/button";
import { Card, StyledBody } from "baseui/card";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { BlockProps } from "baseui/block";

const Movies = () => {
  const [inputQuery, setNewInputQuery] = useState("");
  const [getMovies, { data, loading, error }] = useLazyQuery(MOVIES_QUERY);

  const itemProps: BlockProps = {
    display: "inline-flex",
    margin: "5px",
  };

  const getUI = () => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    if (data) {
      const elements = data.movies.map((movie) => {
        return (
          <FlexGrid key={movie.id} {...itemProps}>
            <FlexGridItem>
              <Link
                href={{ pathname: "/movies/[id]", query: { id: movie.id } }}
              >
                <Card
                  overrides={{ Root: { style: { width: "200px" } } }}
                  headerImage={
                    movie.posterPath
                      ? `https://image.tmdb.org/t/p/w500${movie.posterPath}`
                      : `https://thumbs.dreamstime.com/z/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg`
                  }
                  //title={movie.originalTitle}
                >
                  <StyledBody>{movie.originalTitle}</StyledBody>
                </Card>
              </Link>
            </FlexGridItem>
          </FlexGrid>
        );
      });
      return <div>{elements}</div>;
    }

    return <div>No results</div>;
  };

  const handleButtonClick = async () => {
    getMovies({ variables: { query: inputQuery } });
  };

  return (
    <div>
      <Input
        size={SIZE.default}
        clearable
        onChange={(e) => {
          setNewInputQuery(e.currentTarget.value);
        }}
        //onKeyDown={handleButtonClick}
        placeholder="Search for you film"
        type="search"
        id="query"
        name="query"
      />
      <Button onClick={handleButtonClick} size={SIZE.default}>
        SEARCH
      </Button>
      {getUI()}
    </div>
  );
};

export default Movies;
