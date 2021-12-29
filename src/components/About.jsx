import React from 'react';

import { HiOutlineDocumentDownload } from 'react-icons/hi';

const About = () => {
    return (
        <section id="about-me" data-spy="true">
            <div className='contenedor'>
                <h3 className="title-1">Sobre Mí</h3>
                <div className="divisor"></div>
                <div className="about-inner ">
                    <div className="profile">
                        <img className="profile-photo" src="img/Jesus Hernandez.png" alt="Jesus Hernández" />
                        <div>
                            <p className="font-medium"><b>Perfil:</b> Desarrollador de Software</p>
                            <p><b>Idiomas:</b> Español (Nativo), Inglés (Basico)</p>
                        </div>
                    </div>
                    <div className='text'>
                        <p>
                            ¡Hola! Soy Jesús Hernández, desarrollador de software, y amante de la tecnologia con muchas ganas de seguir aprendiendo sobre ella.
                        </p>
                        <p>
                            Actualmente me encuentro estudiando el quinto año de Ingeniería en Computación, con conocimiento en inglés, desarrollador de aplicaciones móviles, de escritorio y web. Me considero una persona responsable, con iniciativa, puntualidad, compromiso y de rápido aprendizaje.
                        </p>

                        <a href="docs/CV - Jesús Hernández.docx" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <HiOutlineDocumentDownload
                                className='mr-2 -ml-1 w-5 h-5'
                            />
                            Descargar CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;