import React from "react";
import useHeader from "./useHeader";
import "./header.sass";
import { Link } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import { HeaderMenu, HeaderMenuItem } from "../HeaderMenu/HeaderMenu";

const Header = () => {
  return (
    <header className="header">
      <p className="header__user-id">USER ID : 06PPD125</p>
      <HeaderMenu>
        <HeaderMenuItem>
            <Link to={"/"} className="header__visit-invitation">Visit Website</Link>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <UserMenu classes="header__user" />
        </HeaderMenuItem>
      </HeaderMenu>
    </header>
  );
};

export default Header;
