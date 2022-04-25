import useDecratedButton from "./useDecoratedButton";
import "./decoratedbutton.sass";
import classNames from "classnames";

const DecoratedButton = ({children, className}) => {
    return (
        <div className={classNames("btn btn--primary", className)}>
            {children}
        </div>
    );
}

export default DecoratedButton;
