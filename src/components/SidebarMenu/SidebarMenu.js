import "./sidebarMenu.sass"; 
import useSidebarmenu from "./useSidebarMenu";

const SidebarMenu = () => {
  const { navList } = useSidebarmenu();
  return (
    <ul className="sidebar-menu">
      {navList.map((entry, idx) => {
        return (
          <li key={idx} className="sidebar-menu__item">
            <a className="sidebar-menu__link" href={entry.link}>
                <p>
                  {entry.anchor}
                </p>
              </a>
          </li>
        )
      })}
    </ul>
  );
};

export default SidebarMenu;
