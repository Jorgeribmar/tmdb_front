import { useStyletron } from "baseui";
import { Input, InputProps, SIZE } from "baseui/input";
import * as React from "react";

const SearchInput: React.FC<InputProps> = (props) => {
  return (
    <Input
      size={SIZE.default}
      clearable
      placeholder="Search for you film"
      type="search"
      id="query"
      name="query"
      overrides={{
        Input: {
          style: ({}) => ({
            width: "50%",
            margin: "auto",
            background: "white",
          }),
        },
      }}
      {...props}
    />
  );
};

export default SearchInput;
