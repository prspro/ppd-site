import useConteiner from "./useContainer";
import "./container.sass";
import classNames from "classnames";

const Container = (props) => {
    return (
        <div className={classNames("container", props.className)}>
            {props.children}
        </div>
    );
}

export default Container;
