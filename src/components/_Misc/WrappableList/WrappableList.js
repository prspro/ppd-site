import useWrappablelist from "./useWrappableList";
import "./wrappablelist";

const WrappableList = (props) => {
    return (
        <ul className="wrappable-list">
            {props.children}
        </ul>
    );
}

const WrappableItem = (props) => {
    return (
        <li className="wrappable-list__item">
            {props.children}
        </li>
    )
}

export default WrappableList;
