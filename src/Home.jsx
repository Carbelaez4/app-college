import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Contenido from './components/Contenido'; // Asegúrate de que Contenido exista
import Login from './pages/Login';
import Profesor from './components/Profesor';
import Estudiante from './components/Estudiante';
import Programas from './components/Programas';
import Informacion from './components/Informacion';
import './Home.css'; // Asegúrate de que este archivo exista y no cause problemas

function Home() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Menu /><Contenido /></>} />  {/* Página principal */}
        <Route path="/login" element={<Login />} />
        <Route path="/profesor" element={<Profesor />} />
        <Route path="/estudiante" element={<Estudiante />} />
        <Route path="/programas" element={<Programas />} />
        <Route path="/informacion" element={<Informacion />} />
      </Routes>
    </Router>
  );
}

export default Home;