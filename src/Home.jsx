import Navbar from "./components/Navbar";

export default function Home() {



  
  return (
    <div>
      <Navbar />
      <div style={{ marginLeft: '220px', padding: '1rem' }}>
        <h1>Bienvenido </h1>
        <p>Contenido privado.</p>
      </div>
    </div>
  );
}