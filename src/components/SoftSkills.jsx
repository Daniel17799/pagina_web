import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/softskills.css"

gsap.registerPlugin(ScrollTrigger);

const softSkills = [
    "Comunicación efectiva",
    "Trabajo en equipo",
    "Resolución de problemas",
    "Adaptabilidad",
    "Pensamiento crítico",
    "Creatividad",
    "Gestión del tiempo",
    "Liderazgo",
];

const SoftSkills = () => {
    const sectionRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        itemsRef.current.forEach((el, index) => {
            gsap.fromTo(el,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: index * 0.1,
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
        <section className="softskills-section" ref={sectionRef}>
            <h2 className="softskills-title">Habilidades Blandas</h2>
            <div className="softskills-grid">
                {softSkills.map((skill, index) => (
                    <div
                        key={index}
                        className="softskill-card"
                        ref={(el) => (itemsRef.current[index] = el)}
                        onMouseEnter={(e) => {
                            gsap.to(e.currentTarget, {
                                scale: 1.05,
                                y: -5,
                                boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                                duration: 0.1

                            });
                        }}
                        onMouseLeave={(e) => {
                            gsap.to(e.currentTarget, {
                                scale: 1,
                                y: 0,
                                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                                duration: 0.3,
                                ease: "power2.inOut"
                                
                            });
                        }}
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SoftSkills;
