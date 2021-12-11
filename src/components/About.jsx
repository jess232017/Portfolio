import React from 'react';

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
                        <a href="docs/CV - Jesús Hernández.docx" className="btn btn-primary ">
                            <div className="flex justy-center align-items">
                                <svg className="mini-icon">
                                    <use xlinkHref="./img/svg-symbols.svg#icon-download" />
                                </svg>
                                <span> Descargar CV</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;