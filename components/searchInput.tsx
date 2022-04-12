import { useStyletron } from "baseui";
import { Input, InputProps, SIZE } from "baseui/input";
import * as React from "react";

const SearchInput: React.FC<InputProps> = ({ onChange }) => {
  return (
    <Input
      size={SIZE.default}
      clearable
      onChange={onChange}
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
    />
  );
};

export default SearchInput;
