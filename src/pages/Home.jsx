import React from "react";
import Menu from "../components/Menu";
import Contenido from "../components/Contenido";
import "./Home.css";
import Login from "./Login";

const Home = () => {
  return (
    <>
      <Menu />
      <Contenido />
      <Login />
    </>
  );
};

export default Home;
