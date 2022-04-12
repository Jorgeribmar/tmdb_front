import { Card } from "baseui/card";
import Link from "next/link";
import * as React from "react";

const MoviesCard = ({ headerImage, title, href }) => {
  return (
    <Link href={href} passHref>
      <Card
        overrides={{
          Root: { style: { width: "250px", height: "100%" } },
        }}
        headerImage={
          headerImage
            ? `https://image.tmdb.org/t/p/w500${headerImage}`
            : `https://thumbs.dreamstime.com/z/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg`
        }
        title={title}
      ></Card>
    </Link>
  );
};

export default MoviesCard;
