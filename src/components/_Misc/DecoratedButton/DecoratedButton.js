import useDecratedButton from "./useDecoratedButton";
import "./decoratedbutton.sass";
import classNames from "classnames";

const DecoratedButton = ({ children, className, onClick, type }) => {
  const { onClickHandler } = useDecratedButton();

  if (type === "submit") {
    return (
      <button
        type={type}
        className={classNames("btn btn--primary", className)}
        onClick={() => {
          onClickHandler(onClick);
        }}
      >
        {children}
      </button>
    );
  } else {
    return (
      <div
        className={classNames("btn btn--primary", className)}
        onClick={() => {
          onClickHandler(onClick);
        }}
      >
        {children}
      </div>
    );
  }
};

export default DecoratedButton;
