import "./sidebarMenu.sass";
import { NavLink } from "react-router-dom";
import useSidebarMenu from "./useSidebarMenu";
import SVGicon from "../_Misc/SVGicon/SVGicon.js";

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
            <NavLink className="sidebar-menu__link" activeClassName="active" to={entry.link}>
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
