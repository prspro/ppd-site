import { useState } from "react";

const useSearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (value === "") {
      setIsFocused(false);
    } else {
      setIsFocused(true);
    }
  }



  const handleValueChange = (inputText) => {
    setValue(inputText);
  }

  return {
    isFocused,
    handleFocus,
    handleBlur,
    handleValueChange
  };
};

export default useSearchBar;
