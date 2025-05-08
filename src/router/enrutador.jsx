import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Contenido from "../components/Contenido";
import Programas from "../components/Programas";
import Informacion from "../components/Informacion";
import Login from "../pages/Login";

export default function Enrutador() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Contenido />} />
        <Route path="programas" element={<Programas />} />
        <Route path="informacion" element={<Informacion />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}