function Informacion() {
  return (
    <div>
      <div>
        <h2>Gráfico de análisis por genero</h2>
        <img src="../../src/assets/graficas/grafica1.png" alt="Gráfico generado por Python" />
        <p>La mayoría de estudiantes en la base de datos se identifican como femeninos (60%), seguidos por masculinos (40%). Hay muy pocos estudiantes registrados bajo otra identidad de género. Esto sugiere una brecha moderada en la representación de género, lo cual podría ser relevante para planes de inclusión y equidad.</p>
      </div>
      <div>
        <h2>Grafico de distribucion de edades</h2>
        <img src="../../src/assets/graficas/grafica2.png" alt="Gráfico generado por Python" />
        <p>La distribución de edades de los estudiantes tiene un pico pronunciado entre los 18 y 22 años, lo que sugiere que la mayoría están en edad universitaria tradicional. La curva KDE confirma una concentración fuerte en este grupo etario. Sin embargo, también se observan estudiantes mayores de 25 años, lo cual indica participación de adultos posiblemente en programas nocturnos o virtuales.</p>
      </div>
    </div>
  );
}

export default Informacion;