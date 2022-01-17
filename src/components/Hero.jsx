import React from 'react';
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Hero = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            //Texto a mostrar
            strings: ["Ingeniero en Computación.", "Desarrollador Web.", "Desarrollador de Software."],
            // configuraciones
            loop: true,
            typeSpeed: 80,
            backSpeed: 30,
            backDelay: 1500
        });

        // Destroying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <header id="inicio" className="hero" data-spy="true">
            <div className="content">
                <h1>Jesús Hernández</h1>
                <div className="flex">
                    <p ref={el} id="dev-text" className="subtitulo" />
                </div>
                <span className="scroll-btn">
                    <a href="#">
                        <span className="mouse">
                            <span>
                            </span>
                        </span>
                    </a>
                    <p>Desplazarse hacia abajo</p>
                </span>
            </div>
        </header>

    );
}

export default Hero;