import React from "react";
import "../styles/educacion.css"

const estudios = [
  {
    titulo: "ESPECIALIZACIÓN EN ANALÍTICA Y BIG DATA",
    estado: "Cursando",
    institucion: "Corporación Universitaria Iberoamericana",
    habilidades: [
      "Análisis de datos con Python y R",
      "Visualización de datos con Power BI",
    ],
    aplicaciones: [
      "Análisis estadístico",
      "Minería de datos",
      "Limpieza de datos",
    ],
    tecnologias: ["Python", "R", "Power BI", "SQL"],
  },
  {
    titulo: "INGENIERÍA EN SOFTWARE",
    estado: "Cursando",
    institucion: "Corporación Universitaria Iberoamericana",
    habilidades: [
      "Desarrollo Frontend y Backend",
      "Desarrollo web",
      "GIT, UI, maquetación web",
      "Metodologías ágiles",
      "Seguridad web",
      "Bases de datos con MySQL y MongoDB",
    ],
    aplicaciones: [
      "Consumo de APIs",
      "Gestores de inventario",
      "Páginas web",
      "Formularios",
      "Aplicaciones de escritorio",
    ],
    tecnologias: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "Python",
      "NodeJS",
      "Git",
      "GitHub",
    ],
  },
  {
    titulo: "ESPECIALIZACIÓN EN DESARROLLO WEB FRONTEND",
    estado: "2023",
    institucion: "Alura Latam",
    habilidades: [
      "Desarrollo Web",
      "Maquetación web",
      "Buenas prácticas",
      "Responsive",
    ],
    aplicaciones: [
      "Desarrollo de páginas web con React",
      "Formularios CRUD",
    ],
    tecnologias: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "NodeJS",
      "Git",
      "GitHub",
    ],
  },
];

const certificados = [
  "Fundamentos del marketing digital",
  "Análisis de datos con Google",
  "Administración de MySQL: Seguridad y optimización",
  "De Excel hasta Power BI",
  "Ciberseguridad: Universidad Distrital FJC",
];

const Educacion = ({onCerrar}) => {
  return (
    <section className="educacion-section">
        <button className="btn-cerrar" onClick={onCerrar}>Cerrar</button>
      <h2 className="educacion-title">Educación</h2>
      <div className="educacion-grid">
        {estudios.map((item, index) => (
          <div className="educacion-card" key={index}>
            <h3>{item.titulo}</h3>
            <p className="estado">{item.estado} | {item.institucion}</p>
            <div>
              <strong className="habilidades">Habilidades:</strong>
              <ul>{item.habilidades.map((h, i) => <li key={i}>{h}</li>)}</ul>
            </div>
            <div>
              <strong className="aplicaciones">Aplicaciones:</strong>
              <ul>{item.aplicaciones.map((a, i) => <li key={i}>{a}</li>)}</ul>
            </div>
            <div>
              <strong>Tecnologías:</strong>
              <p className="tecnologias">{item.tecnologias.join(" · ")}</p>
            </div>
          </div>
        ))}
      </div>
    
    <div className="educacion-card">
      <h2 className="educacion-title">Certificados</h2>
      <ul className="certificados-list">
        {certificados.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
      </div>
    </section>
  );
};

export default Educacion;
