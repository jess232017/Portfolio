import React from 'react';
import styled from 'styled-components';
//lex justy-center align-items
const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        width: 24px;
        height: 24px;
        fill: #4e4e4e;
    }
`;

const About = () => {
    return (
        <section id="about-me">
            <div className='contenedor'>
                <h3 className="title-1">Sobre Mí</h3>
                <div className="divisor"></div>
                <div className="about-inner">
                    <div className="profile">
                        <img className="profile-photo" src="img/Jesus Hernandez.png" alt="Jesus Hernández" />
                        <div>
                            <p><b>Perfil:</b> Desarrollador de Software</p>
                            <p><b>Idiomas:</b> Español (Nativo), Ingles (Basico)</p>
                        </div>
                    </div>
                    <div className='text'>
                        <p>
                            ¡Hola! Soy Jesús Hernández, desarrollador de software, y amante de la tecnologia con muchas ganas de seguir aprendiendo sobre ella.
                        </p>
                        <p>
                            Actualmente me encuentro estudiando el quinto año de Ingeniería en Computación, con conocimiento en inglés, desarrollador de aplicaciones móviles, de escritorio y web. Me considero una persona responsable, con iniciativa, puntualidad, compromiso y de rápido aprendizaje.
                        </p>
                        <Button href="docs/CV - Jesús Hernández.docx" className="btn btn-primary " >
                            <svg>
                                <use xlinkHref="./img/svg-symbols.svg#icon-download" />
                            </svg>
                            <span> Descargar CV</span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;