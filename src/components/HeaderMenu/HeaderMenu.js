import useHeaderMenu from "./useHeaderMenu";
import "./headermenu.sass";

const HeaderMenu = (props) => {
    return (
        <ul className="header-menu">
            {props.children}
        </ul>
    );
}

const HeaderMenuItem = (props) => {
    return (
        <li className="header-menu__item">
            {props.children}
        </li>
    )
}

export {HeaderMenu, HeaderMenuItem};
