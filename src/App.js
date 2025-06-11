import React, { useState } from "react";
import Intro from "./components/Intro.jsx";
import Skills from "./components/Skills.jsx";
import SoftSkills from "./components/SoftSkills.jsx";
import Projects from "./components/Projects.jsx";
import Educacion from "./components/Educacion.jsx";

function App() {
  const [mostrarEducacion, setMostrarEducacion] = useState(false);
  
  return (
    
    <div className="App">
      {/* Sección Intro con botón que activa Educacion */}
      <Intro onMostrarEducacion={() => setMostrarEducacion(true)} />

      {/* Panel lateral de Educación, solo si está activo */}
      {mostrarEducacion && (
        <Educacion onCerrar={() => setMostrarEducacion(false)} />
      )}

      {/* Resto de secciones del portafolio */}
      <Projects />
      <Skills />
      <SoftSkills />
    </div>
  );
}

export default App;
