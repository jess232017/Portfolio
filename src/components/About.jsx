import React from 'react';

import { MdOutlineContactPage } from 'react-icons/md';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

const About = () => {
    return (
        <section id="about-me" data-spy="true">
            <div className='contenedor'>
                <h2 className="title-1">Sobre Mí</h2>
                <div className="divisor"></div>
                <div className="about-inner ">
                    <div className="profile">
                        <img className="profile-photo" src="img/Jesus Hernandez.webp" alt="Jesus Hernández" />
                        <div>
                            <p className="font-medium"><b>Perfil:</b> Desarrollador de Software</p>
                            <p><b>Idiomas:</b> Español (Nativo), Inglés (Basico)</p>
                        </div>
                    </div>
                    <div className='text'>
                        <p className='m-0'>Hola, soy </p>
                        <h2>Jesús Hernández</h2>
                        <p> un apasionado de la programación y el desarrollo web, me gusta día a día aprender y mejorar mis habilidades, me especializo en tecnologías frontend, sin embargo siempre estoy dispuesto a adaptarme a nuevos lenguajes, librerías y frameworks. </p>
                        <p>
                            Actualmente me encuentro estudiando el quinto año de Ingeniería en computación. Me considero una persona responsable, con iniciativa, puntualidad, compromiso y de rápido aprendizaje.
                        </p>

                        <a href="docs/CV - Jesús Hernández.docx" className="text-center inline-flex items-center mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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