import { useSearchParams } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { alertaConfirmacion, alertaError } from "../Helper/funciones"; // esto es muy importante entenderlo

const Login = () => {
  const [getUsuario, setUsuario] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getHoraLogin, setHoraLogin] = useState(null);

  function inicioSesion() {
    if (getUsuario === "admin" && getPassword === "admin") {
      alertaConfirmacion();

      let horaInicio = new Date();
      console.log(horaInicio);
      //   setHoraLogin(new Date().toLocaleDateString);
      //   console.log(getHoraLogin);
    } else {
      alertaError();
    }
  }

  return (
    <div className="wrapper">
      <div className="card-switch">
        <label className="switch">
          <input type="checkbox" className="toggle" />
          <span className="slider" />
          <span className="card-side" />
          <div className="flip-card__inner">
            <div className="flip-card__front">
              <div className="title">Log in</div>
              <form className="flip-card__form">
                <input
                  onChange={(e) => setUsuario(e.target.value)}
                  className="flip-card__input"
                  name="email"
                  placeholder="Email"
                  type="text"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="flip-card__input"
                  name="password"
                  placeholder="Password"
                  type="text"
                />
                <button
                  type="button"
                  onClick={inicioSesion}
                  className="flip-card__btn"
                >
                  Let`s go!
                </button>
              </form>
            </div>
            <div className="flip-card__back">
              <div className="title">Sign up</div>
              <form className="flip-card__form">
                <input
                  className="flip-card__input"
                  placeholder="Name"
                  type="name"
                />
                <input
                  className="flip-card__input"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <input
                  className="flip-card__input"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <button className="flip-card__btn">Confirm!</button>
              </form>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Login;
