import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";
import './Home.css'; // reutilizamos estilos definidos

export default function Layout() {
  return (
    <div className="layout">
      <Menu />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}