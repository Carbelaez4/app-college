import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <aside className="home-aside">
      <div>
        <img src="/College.png" alt="Logo" />
      </div>
      
      <nav>
          <ul className="nav-list">
            <Link to="/programas" className="nav-link">Programas</Link>
            <Link to="/informacion" className="nav-link">Información</Link>
            <Link to="/login" className="nav-link">Iniciar Sesión</Link>
          </ul>
      </nav>
      
    </aside>
  );
};

export default Menu;