import React from "react";

//Styles
import "../assets/styles/components/Header.scss";

//Static
import platzi_video from "../assets/static/logo-platzi-video-BW2.png";
import user_icon from "../assets/static/user-icon.png";

const Header = () => (
  <header className="header">
    <img className="header__img" src={platzi_video} alt="Platzi Video" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={user_icon} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href="/">Cuenta</a>
        </li>
        <li>
          <a href="/">Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
