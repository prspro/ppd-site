import useSearchBar from "./useSearchBar";
import classNames from "classnames";
import "./searchbar.sass";
import SVGicon from "../SVGicon/SVGicon";

const SearchBar = ({ className, placeholder }) => {
  const { isFocused, isPrefocused, value, handleFocus, handleBlur, handleValueChange } =
    useSearchBar();

    

  return (
    <form
      method="POST"
      action="/"
      className={classNames("search", className, { focused: isFocused })}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="search__inner">
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          onInput={(e) => {
            handleValueChange(e.target.value);
          }}
          value={value}
          className="search__input"
          type="search"
          placeholder=""
        />
        <label className={classNames("search__label", { focused: isFocused, prefocused: isPrefocused })}>
          {placeholder}
        </label>
        <button className="search__submit">
          <SVGicon className="search__icon" id="magnifier" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
