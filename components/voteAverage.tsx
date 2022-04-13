import * as React from "react";
import { StarRating } from "baseui/rating";

const StarsRating = ({ voteAverage }) => {
  const [value, setValue] = React.useState(5);
  return (
    <StarRating
      numItems={10}
      onChange={(data) => setValue(data.value)}
      size={10}
      value={voteAverage}
      readOnly
    />
  );
};

export default StarsRating;
