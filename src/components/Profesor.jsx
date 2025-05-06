function Profesor() {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
  
    return (
      <div style={{ padding: "20px" }}>
        <h1>Bienvenido Profesor</h1>
        <p>Nombre: {usuario?.nombre}</p>
        <p>Correo: {usuario?.correo}</p>
        <p>Aquí podrás gestionar tus clases, ver horarios y más.</p>
      </div>
    );
  }
  
  export default Profesor;