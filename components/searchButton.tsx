import { Button, ButtonProps } from "baseui/button";
import { SIZE } from "baseui/input";
import * as React from "react";

const SearchButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      size={SIZE.default}
      overrides={{
        BaseButton: {
          style: ({}) => ({
            width: "10%",
            margin: "1% 45% 0% 45%",
          }),
        },
      }}
    >
      SEARCH
    </Button>
  );
};

export default SearchButton;
