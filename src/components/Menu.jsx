import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <aside className="home-aside">
      <div>
        <img src="/Public/College.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/programas">Programas</Link></li>
          <li><Link to="/informacion">Informacion</Link></li>
          <li><Link to="/login">Inicio Sesion</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;