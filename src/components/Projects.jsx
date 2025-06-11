import React, { useEffect, useRef, useState } from "react";
import "../styles/projects.css";

const projects = [
  {
    title: "Gestor de inventarios",
    stack: "React, Node.js, MySQL",
    images: [
      "/Projects/Inventario1.png",
      "/Projects/Inventario2.png",
      "/Projects/Inventario3.png",
      "/Projects/Inventario5.png",
    ],

  },
  {
    title: "Api de clima",
    stack: "HTML,CSS, JS ",
    images: [
      "/Projects/Apiclima1.png",
      "/Projects/Apiclima2.png",
    ],
   
  },
  {
    title: "API Pokedex",
    stack: "HTML,CSS, JS",
    images: [
      "/Projects/Pokedex1.png",
      "/Projects/Pokedex2.png",
    ],
   
  },
  {
    title: "Página Apeperia",
    stack: "HTML, CSS,React ,JS",
    images: [
      "/Projects/Apeperia1.png",
      "/Projects/Apeperia2.png",
    ],
  
  },
  {
    title: "Formulario de registros",
    stack: "HTML,CSS,JS",
    images: [
      "/Projects/Registropets1.png",
      "/Projects/Registropets2.png",
    ],

  },
  {
    title: "Gestor de tareas",
    stack: "HTML, CSS,JS",
    images: [
      "/Projects/Tareas1.png",
      "/Projects/Tareas2.png",
    ],
   
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const intervalRef = useRef(null);

  const handleNext = () => {
    setImgIndex((prev) => (prev + 1) % project.images.length);
  };

  const handlePrev = () => {
    setImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  useEffect(() => {
    if (project.images.length > 1) {
    }
    return () => clearInterval(intervalRef);
  }, [project.images.length]);

  return (
    <>
      <div className="project-card">
        <div className="carousel">
          <img
            src={project.images[imgIndex]}
            alt={project.title}
            onClick={() => setModalOpen(true)}
            className="clickable-img"
          />
          {project.images.length > 1 && (
            <div className="carousel-buttons">
              <button onClick={handlePrev}>‹</button>
              <button onClick={handleNext}>›</button>
            </div>
          )}
        </div>
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.stack}</p>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={project.images[imgIndex]}
              alt={`Ampliación de ${project.title}`}
            />
            {project.images.length > 1 && (
              <div className="modal-buttons">
                <button onClick={handlePrev}>‹</button>
                <button onClick={handleNext}>›</button>
              </div>
            )}
            <button className="modal-close" onClick={() => setModalOpen(false)}>
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
