import "./sidebarMenu.sass";
import { NavLink } from "react-router-dom";
import useSidebarMenu from "./useSidebarMenu";
import SVGicon from "../_Misc/SVGicon/SVGicon.js";
import classNames from "classnames";

const SidebarMenu = () => {
  const { navList } = useSidebarMenu();
  const iconClassList = [
    "sidebar-menu__icon"
  ];

  return (
    <ul className="sidebar-menu">
      {navList.map((entry, idx) => {
        return (
          <li key={idx} className="sidebar-menu__item">
            <NavLink className={(navData) => (navData.isActive ? "sidebar-menu__link active" : "sidebar-menu__link")} to={entry.link}>
              <SVGicon classes={iconClassList} id={entry.icon} />
              <p>{entry.anchor}</p>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarMenu;
