import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Contenido from "../components/Contenido";
import Programas from "../components/Programas";
import Informacion from "../components/Informacion";
import Login from "../pages/Login";
import RutaProtegida from "../components/RutaProtegida";
import Home from "../Home";
import Navbar from "../components/Navbar";

export default function Enrutador() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* rutas públicas */}
        <Route index element={<Contenido />} />
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/programas" element={<Programas />} />
        <Route path="/login" element={<Login />} />

        {/* rutas protegidas */}
        <Route element={<RutaProtegida />}>
          <Route path="home" element={<Home />} />
          <Route path="contenido" element={<Contenido />} />
        </Route>
      </Route>
    </Routes>
  );
}