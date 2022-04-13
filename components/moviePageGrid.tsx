import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import Image from "next/image";
import StarsRating from "./voteAverage";

const myLoader = ({ src }) => {
  return `https://image.tmdb.org/t/p/w500${src}`;
};

const MoviePageGrid = ({ posterPath, overview, releaseDate, voteAverage }) => {
  return (
    <Outer>
      <Grid>
        <Cell span={3}>
          <Inner>
            <Image
              loader={myLoader}
              src={posterPath}
              alt={"movie image"}
              width={"400%"}
              height={"600%"}
            />
          </Inner>
        </Cell>
        <Cell span={6}>
          <Inner>{overview}</Inner>
        </Cell>
        <Cell span={3}>
          <h3>Release Date</h3>
          <Inner>{releaseDate}</Inner>
          <h3>Vote average</h3>
          <Inner>
            <StarsRating voteAverage={voteAverage}></StarsRating>
          </Inner>
        </Cell>
      </Grid>
    </Outer>
  );
};
const Outer: React.FunctionComponent<{}> = ({ children }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        padding: "1%",
        margin: "1% 15% 1% 15%",
        display: "flex",
        justifyContent: "center",
        border: "solid black",
        borderRadius: "50px",
      })}
    >
      {children}
    </div>
  );
};
const Inner: React.FunctionComponent<{}> = ({ children }) => {
  const [css, theme] = useStyletron();
  return <div className={css({})}>{children}</div>;
};

export default MoviePageGrid;
