<h1 align="left">App-college</h1>

###

<p align="left"></p>

###

<h2 align="left">Descripcion:<br><br>Esta app permite registrar, visualizar y actualizar la información de estudiantes, docentes y cursos, facilitando la gestión académica dentro del centro educativo. Ideal para instituciones que buscan centralizar sus datos y mejorar la comunicación entre áreas administrativas y académicas.</h2>

###

<h1 align="left">Tecnologias Utilizadas:<br>React<br>Biblioteca principal para construir interfaces de usuario a partir de componentes reutilizables (*.jsx).<br><br>React Router DOM<br>Para la navegación entre páginas y manejo de rutas, incluyendo rutas protegidas (RutaProtegida.jsx, react-router-dom).<br><br>Vite<br>Herramienta moderna para el empaquetado de proyectos frontend. Más rápida que Webpack y optimizada para desarrollo con React.<br><br>JSX<br>Sintaxis utilizada para escribir componentes de React mezclando HTML y JavaScript.<br><br>CSS<br>Uso de archivos *.css para el estilo de componentes y páginas (Login.css, Home.css, index.css).<br>SweetAlert2<br>Librería de modales y alertas visuales (sweetalert2/ está presente). Útil para mostrar mensajes interactivos al usuario.<br><br>JavaScript <br>Toda la lógica del proyecto está escrita en JS moderno: funciones flecha, import/export, async/await, etc.<br><br>Funciones Helper Personalizadas<br>Ubicadas en helpers/funciones.js, permiten encapsular lógica de apoyo.Carlos Arbelaez 1037584068  <br>Francis Leon   1210961   fleonh@cesde.net<br>carbelaez@cesde.net</h1>

###

<h1 align="left">Estructura del proyecto:<br>app-college/<br>│<br>├── public/                   # Archivos públicos accesibles sin procesamiento por React<br>│   ├── College.png<br>│   └── vite.svg<br>│<br>├── src/                      # Código fuente principal de la aplicación<br>│   ├── assets/              # Imágenes u otros recursos estáticos<br>│   │   └── react.svg<br>│   │<br>│   ├── components/          # Componentes reutilizables<br>│   │   ├── Contenido.jsx<br>│   │   ├── Estudiante.jsx<br>│   │   ├── Informacion.jsx<br>│   │   ├── Menu.jsx<br>│   │   ├── Navbar.jsx<br>│   │   ├── Profesor.jsx<br>│   │   ├── Programas.jsx<br>│   │   └── RutaProtegida.jsx<br>│   │<br>│   ├── helpers/             # Funciones auxiliares y utilidades<br>│   │   └── funciones.js<br>│   │<br>│   ├── pages/               # Páginas principales del sitio<br>│   │   ├── Login.jsx<br>│   │   └── Login.css<br>│   │<br>│   ├── router/              # Configuración de rutas<br>│   │   └── enrutador.jsx<br>│   │<br>│   ├── services/            # Acceso a datos o simulación de APIs<br>│   │   ├── database.js<br>│   │   └── fake-api.json<br>│   │<br>│   ├── Home.jsx             # Componente principal de la página de inicio<br>│   ├── Home.css<br>│   ├── Layout.jsx           # Contenedor estructural para la app<br>│   ├── main.jsx             # Punto de entrada de React<br>│   └── index.css            # Estilos globales<br>│<br>├── package.json             # Dependencias y scripts del proyecto<br>├── vite.config.js           # Configuración de Vite (si está presente)<br>└── README.md                # Documentación inicial del proyecto</h1>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="40" alt="python logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
</div>

###

<p align="left">Modelo de datos (NoSQL)<br>{<br>  id: Number,               // Identificador único del usuario<br>  nombre: String,           // Nombre completo<br>  correo: String,           // Correo electrónico<br>  telefono: String,         // Número de teléfono<br>  usuario: String,          // Nombre de usuario para login<br>  contrasena: String,       // Contraseña del usuario<br>  rol: String               // Rol del usuario: "estudiante" o "profesor"<br>}</p>

###

<p align="left">Carlos Arbelaez 1037584068  <br>Francis Leon   1210961 <br>  fleonh@cesde.net<br>carbelaez@cesde.net</p>

###