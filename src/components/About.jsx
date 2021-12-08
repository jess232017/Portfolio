import React from 'react';

const About = () => {
    return (
        <div id="about-me" className="box-shadow">
            <div className="about">
                <div className="profile align-center">
                    <img className="profile-photo" src="img/Jesus Hernandez.png" alt="Jesus Hernández" />
                    <div>
                        <p><strong>Perfil: </strong><span className="subtitle-1">Desarrollador de Software</span></p>
                        <p><strong>Email: </strong><span className="subtitle-1">jess232016 @gmail.com</span></p>
                        <p><strong>Telef: </strong><span className="subtitle-1">86793204</span></p>
                    </div>
                </div>
                <div className="c-flex justy-between">
                    <h3 className="title-2">Acerca de mí</h3>
                    <p className="lead">
                        ¡Hola! Mi nombre es Jesús Hernández desarrollador de software, apasionado por la tecnologia con muchas ganas de seguir aprendiendo.
                    </p>
                    <p className="lead">
                        Tengo como objetivo consolidar mi carrera profesional en un ambiente que me ofrezca nuevos retos constantemente, retos que podré superar aplicando mis aptitudes, responsabilidad, capacidad de adaptación y motivación por aprender.
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

    );
}

export default About;