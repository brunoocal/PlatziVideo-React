import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerRequest } from "../actions";
import Header from "../components/Header";

import "../assets/styles/components/Register.scss";

const Register = (props) => {
  const [form, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.registerRequest(form);
    props.history.push("/");
  };

  return (
    <>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              className="inputRegister"
              name="name"
              type="text"
              placeholder="Nombre"
              onChange={handleInput}
            />
            <input
              className="inputRegister"
              name="email"
              type="text"
              placeholder="Correo"
              onChange={handleInput}
            />
            <input
              name="password"
              className="inputRegister"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput}
            />
            <button className="button">Registrarme</button>
          </form>
          <Link to="/login">Iniciar sesión</Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
