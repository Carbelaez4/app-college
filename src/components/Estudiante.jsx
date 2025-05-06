function Estudiante() {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
  
    return (
      <div style={{ padding: "20px" }}>
        <h1>Bienvenido Estudiante</h1>
        <p>Nombre: {usuario?.nombre}</p>
        <p>Correo: {usuario?.correo}</p>
        <p>Aquí podrás ver tus materias, notas y horarios.</p>
      </div>
    );
  }
  export default Estudiante;