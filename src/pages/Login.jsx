import { useState } from 'react';
import { usuarios as usuariosDB } from '../services/database.js'; // renombrado
import './Login.css';
import { alertaError, alertaRedireccion, generarToken } from '../helpers/funciones.js';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [getRol, setRol] = useState("estudiante");
  const [getUser, setUser] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getName, setName] = useState("");
  const [getEmail, setEmail] = useState("");

  let redireccion = useNavigate();

  function buscarUsuario() {
    return usuariosDB.find(
      (item) => getUser === item.usuario && getPassword === item.contrasena
    );
  }

  function iniciarSesion() {
    const usuario = buscarUsuario();
    if (usuario) {
      const token = generarToken();
      localStorage.setItem("token", token);
      localStorage.setItem("usuario", JSON.stringify(usuario));

      if (usuario.rol === "profesor") {
        alertaRedireccion(redireccion, "Bienvenido, profesor", "/teacher");
      } else if (usuario.rol === "estudiante") {
        alertaRedireccion(redireccion, "Bienvenido, estudiante", "/student");
      } else {
        alertaRedireccion(redireccion, "Bienvenido al sistema", "/home");
      }
    } else {
      alertaError();
    }
  }

  function registrarUsuario() {
    let auth = usuariosDB.some(
      (item) => item.correo === getEmail || item.usuario === getUser
    );
    if (auth) {
      alertaError();
    } else {
      let nuevoUsuario = {
        nombre: getName,
        correo: getEmail,
        usuario: getUser,
        contrasena: getPassword,
        rol: getRol,
      };
      console.log("Usuario registrado:", nuevoUsuario);
      
    }
  }



  
  return (
    <div className="container">
      <input id="signup_toggle" type="checkbox" />
      <form className="form">
        <div className="form_front">
          <div className="form_details">Login</div>
          <input onChange={(e)=>setUser(e.target.value)} type="text" className="input" placeholder="Username" />
          <input onChange={(e)=> setPassword(e.target.value)}  type="text" className="input" placeholder="Password" />
          <button type='button' onClick={iniciarSesion} className="btn">Login</button>
          <span className="switch">Don't have an account?
            <label for="signup_toggle" className="signup_tog">
              Sign Up
            </label>
          </span>
        </div>
        <div className="form_back">
          <div className="form_details">SignUp</div>
          <input onChange={(e)=>setName(e.target.value)} type="text" className="input" placeholder="Firstname" />
          <input onChange={(e)=>setUser(e.target.value)} type="text" className="input" placeholder="Username" />
          <input onChange={(e)=>setPassword(e.target.value)} type="text" className="input" placeholder="Password" />
          <input onChange={(e)=>setEmail(e.target.value)} type="text" className="input" placeholder="Email" />
          <select className="input" onChange={(e) => setRol(e.target.value)}>
          <option value="estudiante">Estudiante</option>
          <option value="profesor">Profesor</option>
          </select>

          <button type="button" onClick={registrarUsuario} className="btn">Signup</button>
          <span className="switch">Already have an account?
            <label for="signup_toggle" className="signup_tog">
              Sign In
            </label>
          </span>
        </div>
      </form>
    </div>
  )

}
export default Login;