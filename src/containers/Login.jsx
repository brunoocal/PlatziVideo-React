import React, { useState } from "react";
import { connect } from "react-redux";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";
import { Link } from "react-router-dom";
import { loginRequest } from "../actions";
import Header from "../components/Header"

import "../assets/styles/components/Login.scss";

const Login = (props) => {
  const [form, setValues] = useState({
    email: "",
  });

  const handleInput = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.loginRequest(form);
    props.history.push("/");
  };

  return (
    <>
      <Header isLogin/>
      <section className="login">
        <section className="login__container">
          <h2>Inicia sesión</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
            <input
              className="inputLogin"
              type="text"
              placeholder="Correo"
              name="email"
              onChange={handleInput}
            />
            <input
              name="password"
              className="inputLogin"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput}
            />
            <button className="button">Iniciar sesión</button>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" id="cbox1" value="first_checkbox" />
                Recuérdame
              </label>
              <Link to="/">Olvidé mi contraseña</Link>
            </div>
          </form>
          <section className="login__container--social-media">
            <div>
              <img src={googleIcon} /> Inicia sesión con Google
            </div>
            <div>
              <img src={twitterIcon} /> Inicia sesión con Twitter
            </div>
          </section>
          <p className="login__container--register">
            No tienes ninguna cuenta <Link to="/register">Regístrate</Link>
          </p>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
