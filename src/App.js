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

      <Intro onMostrarEducacion={() => setMostrarEducacion(true)} />

    
      {mostrarEducacion && (
        <Educacion onCerrar={() => setMostrarEducacion(false)} />
      )}

    
      <Projects />
      <Skills />
      <SoftSkills />
    </div>
  );
}

export default App;
