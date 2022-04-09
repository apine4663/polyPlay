import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import { IconButton } from "@material-ui/core";
import logo from "./img/PolyPlayLogo.png";

function Header() {
  return (
    //BEM
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>

      <img className="header__logo" src={logo} alt="PolyPlay Logo" />
      <IconButton>
        <ForumIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
