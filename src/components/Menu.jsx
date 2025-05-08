import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <aside className="home-aside">
      <div>
        <img src="/College.png" alt="Logo" />
      </div>
      
      <nav>
          <ul className="nav-list">
            <li><Link to="/programas" className="nav-link">Programas</Link></li>
            <li><Link to="/informacion" className="nav-link">Información</Link></li>
            <li><Link to="/login" className="nav-link">Iniciar Sesión</Link></li>
          </ul>
      </nav>
      
    </aside>
  );
};

export default Menu;