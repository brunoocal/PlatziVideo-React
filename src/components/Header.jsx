import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Gravatar from "../utils/Gravatar";
import { logoutRequest } from "../actions";
import classNames from "classnames";
//Styles
import "../assets/styles/components/Header.scss";

//Static
import platzi_video from "../assets/static/logo-platzi-video-BW2.png";
import user_icon from "../assets/static/user-icon.png";

const Header = ({ user, logoutRequest, isLogin, isRegister }) => {

  const handleLogout = () => {
    logoutRequest({});
  };

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  })

  return (
    <header className={headerClass}>
      <Link to="/">
        <img className="header__img" src={platzi_video} alt="Platzi Video" />
      </Link>

      <div className="header__menu">
        <div className="header__menu--profile">
          <img
            src={user.email === undefined ? user_icon : Gravatar(user.email)}
            alt={user.email === undefined ? "Perfil" : user.email}
          />
          <p>Perfil</p>
        </div>
        <ul>
          {user.email === undefined ? (
            <>
              <li>
                <Link to="/register">Registrarse</Link>
              </li>
              <li>
                <Link to="/login">Iniciar Sesión</Link>
              </li>
            </>
          ) : (
            <>
              <li>{user.name}</li>
              <li>
                <Link onClick={handleLogout} to="/">
                  Cerrar Sesión
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
