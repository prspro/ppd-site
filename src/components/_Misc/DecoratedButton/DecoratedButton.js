import useDecratedButton from "./useDecoratedButton";
import "./decoratedbutton.sass";
import classNames from "classnames";

const DecoratedButton = ({children, className, onClick}) => {
    return (
        <div className={classNames("btn btn--primary", className)} onClick={() => {onClick()}}>
            {children}
        </div>
    );
}

export default DecoratedButton;
