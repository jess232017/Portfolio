import React from 'react';

//icons
import { FaLinkedin, FaGithub, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
    return (
        <div>
            <section id="contacto" className="hero-3">
                <div className="contenedor">
                    <h3 className="title-1">Contáctame</h3>
                    <div className="box-shadow">
                        <div className="about">
                            <p className="description">Siempre estoy interesado en nuevos proyectos y colaboraciones, si tienes alguno en mente o simplemente quieres hablar no dudes en escribirme o enviarme un email.</p>
                            <div>
                                <ul className="list-ico">
                                    <li>
                                        <FaPhone color='#05f' /> (+505) 86793204
                                    </li>
                                    <li>
                                        <FaEnvelope color='#05f' /> jess232016@gmail.com
                                    </li>
                                </ul>
                                <br />
                                <hr />
                                <div className="wrapper">
                                    <a href="https://www.linkedin.com/in/jes%C3%BAs-enmanuel-hern%C3%A1ndez-gonz%C3%A1lez-b02788196/" target="_blank">
                                        <div className="icon linkedin">
                                            <div className="tooltip">Linkedin</div>
                                            <FaLinkedin />
                                        </div>
                                    </a>

                                    <a href="https://github.com/jess232017" target="_blank">
                                        <div className="icon github">
                                            <div className="tooltip">Github</div>
                                            <FaGithub />
                                        </div>
                                    </a>

                                    <a href="https://wa.me/+50586793204" target="_blank">
                                        <div className="icon whatsapp">
                                            <div className="tooltip">Whatsapp</div>
                                            <FaWhatsapp />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="center">
                            <form id="contact-form" method="post">
                                <div className="input">
                                    <label>Nombre:</label>
                                    <input name="name" type="text" required placeholder="Ingrese su nombre aquí." />
                                </div>
                                <div className="input">
                                    <label>Correo:</label>
                                    <input name="email" type="email" required placeholder="Ingrese su correo aquí." />
                                </div>
                                <div className="input">
                                    <label>Mensaje:</label>
                                    <textarea name="message" required placeholder="Ingrese su mensaje aquí." />
                                </div>
                                <button className='btn btn-primary' type="submit">Enviar correo</button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
            <footer className='footer'>
                <p>2021 ® Todos los Derechos Reservados <span>Jesús Hernández</span></p>
            </footer>
        </div>
    );
}

export default Contact;