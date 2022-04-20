import useUserMenu from "./useUserMenu";
import "./usermenu.sass";
import SVGicon from "../_Misc/SVGicon/SVGicon";
import classNames from "classnames";

const iconClassList = [
    "user-menu__icon"
]

const UserMenu = ({classes}) => {
    return (
        <div className={classNames("user-menu", classes)}>
            <SVGicon classes={iconClassList} id={"person"}/>
            <p className="user-menu__name">
                Joe Melton
            </p>
            <div className="user-menu__arrow"></div>
        </div>
    );
}

export default UserMenu;
