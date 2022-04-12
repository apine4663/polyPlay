import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import { IconButton } from "@material-ui/core";
import logo from "./img/PolyPlayLogo.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useNavigate } from "react-router-dom";

function Header({ backButton }) {
  const navigate = useNavigate();
  return (
    //BEM
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => navigate("/chat")}>
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}
      <Link to="/">
        <img className="header__logo" src={logo} alt="PolyPlay Logo" />
      </Link>

      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
