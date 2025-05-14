import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate('/login');
  };

  const buttonStyle = {
    display: 'block',
    padding: '10px 15px',
    margin: '8px 0',
    background: '#555',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    cursor: 'pointer',
    textAlign: 'left'
  };

  return (
    <nav style={{
      width: '200px',
      height: '100vh',
      background: '#123F6E',
      color: 'white',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>
        Home
      </div>

      <Link  style={buttonStyle}>Horario</Link>
      <Link  style={buttonStyle}>Notas</Link>
      

      <button
        onClick={handleLogout}
        style={{ ...buttonStyle, background: '#d9534f' }}
      >
        Cerrar Sesión
      </button>
    </nav>
  );
}