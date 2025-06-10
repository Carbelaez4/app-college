import { useState,useEffect } from 'react';
import { usuarios as usuariosDB } from '../services/database.js'; 
import { consultarUsuarios, agregarUsuario } from '../services/serviciosUsuarios.js';

import './Login.css';
import { alertaError, alertaRedireccion, generarToken } from '../helpers/funciones.js';
import { useNavigate } from 'react-router-dom';

function Login() {



  const [datosAPI, setDatosApi]=useState(null)
  const [getRol, setRol] = useState("estudiante");
  const [getUser, setUser] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getName, setName] = useState("");
  const [getEmail, setEmail] = useState("");

  let redireccion = useNavigate();


  useEffect(function(){
    consultarUsuarios()
    .then(function(respuesta){
      console.log(respuesta)
      setDatosApi(respuesta)
    })
  },[])

  function buscarUsuario() {
    return datosAPI.find(
      (item) => getUser === item.name && getPassword === item.password
    );
  }

  function iniciarSesion() {
    const usuario = buscarUsuario();
    if (usuario) {
  const token = generarToken();
  localStorage.setItem("token", token);
  localStorage.setItem("usuario", JSON.stringify(usuario));

  // Redirigir basado en rol o simplemente a /home
  if (usuario.rol === "profesor") {
    alertaRedireccion(redireccion, "Bienvenido, profesor", "/home");
  } else if (usuario.rol === "estudiante") {
    alertaRedireccion(redireccion, "Bienvenido, estudiante", "/home");
  } else {
    alertaRedireccion(redireccion, "Bienvenido al sistema", "/home");
  }
} else {
      alertaError();
    }
  }

  function registrarUsuario() {
    let auth = datosAPI.some(
      (item) => item.email === getEmail || item.name === getUser
    );
    if (auth) {
      alertaError();
    } else {
      let nuevoUsuario = {
        name: getName,
        email: getEmail,
        password: getPassword,
        phone:"3225962363",
        userType:"TEACHER"
      };
      agregarUsuario(nuevoUsuario)
      .then(function(respuesta){
         console.log("Usuario registrado:", nuevoUsuario);

      })

     
      
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