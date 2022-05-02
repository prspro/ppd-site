import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../../store/slices/ppdSlice";

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

  const dispatch = useDispatch();

  const handleValueChange = (inputText) => {
    setValue(inputText);
    dispatch(updateFilter(
      inputText
    ));
  }

  return {
    isFocused,
    handleFocus,
    handleBlur,
    handleValueChange,
  };
};

export default useSearchBar;
