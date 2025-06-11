import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/skilss.css"

gsap.registerPlugin(ScrollTrigger); 

const skills = [
  { name: "HTML", img: "/html.png" },
  { name: "CSS", img: "/css-3.png" },
  { name: "JavaScript", img: "/JavaScript.png" },
  { name: "React", img: "/react.png" },
  { name: "Python", img: "/Python-logo-notext.svg.png" },
  { name: "R", img: "/R_logo.svg.png" },
  { name: "MySQL", img: "/MySQL.png" },
  { name: "Git", img: "/Git.png" },
  { name: "PowerBi", img: "/PowerBi.png" },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          delay: index * 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="skills-section" ref={sectionRef}>
      <h2 className="skills-title">Habilidades técnicas</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-item"
            ref={(el) => (itemsRef.current[index] = el)}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.05,
                y: -5,
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                duration: 0.1,
                ease: "power2.out",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1,
                y: 0,
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                duration: 0.3,
                ease: "power2.inOut",
              });
            }}
          >
            <img src={skill.img} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
