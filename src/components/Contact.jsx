import React from 'react';

const Contact = () => {
    return (
        <div id="contacto" className="hero-3 flex justy-center align-center">
            <div className="contenedor">
                <div className="box-shadow">
                    <div className="about">
                        <div>
                            <h3 className="title-2 no-margin">Contáctame</h3>
                            <br /><br />
                            <p className="subtitle-1 no-margin">Siempre estoy interesado en nuevos proyectos y colaboraciones, si tienes alguno en mente o simplemente quieres hablar no dudes en escribirme o enviarme un email.</p>
                            <br /><br />
                            <ul className="list-ico">
                                <li>
                                    <svg className="tiny-icon">
                                        <use xlinkHref="./img/svg-symbols.svg#icon-phone" />
                                    </svg> (+505) 86793204
                                </li>
                                <li>
                                    <svg className="tiny-icon">
                                        <use xlinkHref="./img/svg-symbols.svg#icon-email" />
                                    </svg> jess232016@gmail.com
                                </li>
                            </ul>
                            <br />
                            <hr />
                            <div>
                                <ul className="flex">
                                    <li>
                                        <a href="https://www.linkedin.com/in/jes%C3%BAs-enmanuel-hern%C3%A1ndez-gonz%C3%A1lez-b02788196/" target="_blank">
                                            <svg className="able-icons mini">
                                                <use xlinkHref="./img/svg-symbols.svg#icon-linkedin" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/jess232017" target="_blank">
                                            <svg className="able-icons mini">
                                                <use xlinkHref="./img/svg-symbols.svg#icon-github" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://wa.me/+50586793204" target="_blank">
                                            <svg className="able-icons mini">
                                                <use xlinkHref="./img/svg-symbols.svg#icon-whatsapp" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p>2021 ® Todos los Derechos Reservados <span>Jesús Hernández</span></p>
            </footer>
        </div>

    );
}

export default Contact;