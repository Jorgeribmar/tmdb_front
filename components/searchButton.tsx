import { Button, ButtonProps } from "baseui/button";
import { SIZE } from "baseui/input";
import * as React from "react";
import { Search } from "baseui/icon";

const SearchButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <Button
      endEnhancer={<Search size={20} />}
      onClick={onClick}
      overrides={{
        BaseButton: {
          style: ({}) => ({
            width: "10vw",
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
