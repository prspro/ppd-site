import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../../store/slices/ppdSlice";

const useSearchBar = () => {
  const value = useSelector((state) => state.ppd.filterValue);

  const [isFocused, setIsFocused] = useState(false);
  const [isPrefocused, setIsPrefocused] = useState(false);

  useEffect(() => {
    if (value !== "") {
      setIsPrefocused(true);
      setIsFocused(true);
    }
  }, [value]);

  const handleFocus = () => {
    setIsPrefocused(false);
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsPrefocused(false);
    if (value === "") {
      setIsFocused(false);
    } else {
      setIsFocused(true);
    }
  }

  const dispatch = useDispatch();

  const handleValueChange = (inputText) => {
    dispatch(updateFilter(
      inputText
    ));
  }

  return {
    isFocused,
    isPrefocused,
    value,
    handleFocus,
    handleBlur,
    handleValueChange,
  };
};

export default useSearchBar;
