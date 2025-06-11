// src/components/Intro.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/intro.css";

gsap.registerPlugin(ScrollTrigger);

const Intro = ({onMostrarEducacion}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        imgRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef); 

    return () => ctx.revert(); 
  }, []);

  return (
    <section ref={containerRef} className="intro-section">
      <div className="intro-text" ref={textRef}>
        <h3>Front-end Developer &  Data analyst</h3>
        <h1>Hola, soy Daniel Morales</h1>
        <p>
          Estudiante de último semestre en Ingeniería de Software, especializándome en análisis de datos y Big Data. <br></br>
          Tengo experiencia en desarrollo web,
          bases de datos y análisis de datos, busco una oportunidad para seguir aprendiendo y crecer profesionalmente.<br></br> 
          Soy una persona dedicada, responsable y 
          con gran pasión por la tecnología.
        </p>
           <button className="btn-educacion" onClick={onMostrarEducacion}>
          Ver Educación
        </button>
      </div>
      <div className="imagen-container" ref={imgRef}>
        <img src="/Projects/Profile2.PNG" alt="Perfil" className="fused-image" />
      </div>
    </section>
  );
};

export default Intro;
