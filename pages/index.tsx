import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { MOVIES_QUERY } from "../graphql/queries";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { BlockProps } from "baseui/block";
import SearchButton from "../components/searchButton";
import SearchInput from "../components/searchInput";
import MoviesCard from "../components/moviesCard";
import { useStyletron } from "baseui";

const Movies = () => {
  const [css] = useStyletron();
  const [inputQuery, setNewInputQuery] = useState("");
  const [getMovies, { data, loading, error }] = useLazyQuery(MOVIES_QUERY);

  const itemProps: BlockProps = {
    display: "inline-flex",
    margin: "2%",
  };

  const getUI = () => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    if (data) {
      const elements = data.movies.map((movie) => {
        return (
          <FlexGrid key={movie.id} {...itemProps}>
            <FlexGridItem>
              <MoviesCard
                href={{ pathname: "/movies/[id]", query: { id: movie.id } }}
                headerImage={movie.posterPath}
                title={movie.originalTitle}
              ></MoviesCard>
            </FlexGridItem>
          </FlexGrid>
        );
      });
      return (
        <div
          className={css({
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          })}
        >
          {elements}
        </div>
      );
    }

    return (
      <div
        className={css({
          color: "black",
          display: "flex",
          justifyContent: "center",
          marginTop: "1%",
        })}
      >
        No results
      </div>
    );
  };

  const handleButtonClick = async () => {
    getMovies({ variables: { query: inputQuery } });
  };

  return (
    <div>
      <h1>TMDB Movies Search</h1>
      <SearchInput
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleButtonClick();
          }
        }}
        onChange={(e) => {
          setNewInputQuery(e.currentTarget.value);
        }}
      />
      <SearchButton onClick={handleButtonClick} />

      {getUI()}
    </div>
  );
};

export default Movies;
