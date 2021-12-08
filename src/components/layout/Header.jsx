import React, { useEffect, useState } from 'react';

import useBoolean from '../../services/hooks/useBoolean';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isScrolled, actions] = useBoolean();



    useEffect(() => {
        window.onscroll = () => {
            if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
                actions.on();
            } else {
                actions.off();
                /*if (!checked) {
                    navbar.classList.remove('scrolled');
                }*/
            }
        };
    }, [])

    return (
        <div id="navbar" className={`fixed ${isScrolled && "scrolled"}`}>
            <nav id="navcontain" className="contenedor">
                <div className="logo">DevFolio</div>
                <input type="checkbox" id="click" />
                <label id="btn-menu" htmlFor="click" className="menu-btn">
                    <span class="material-icons">
                        menu
                    </span>
                </label>
                <ul>
                    <li><a className="active" href="#inicio">Inicio</a></li>
                    <li><a href="#about-me">Acerca de mí</a></li>
                    <li><a href="#skill">Habilidades</a></li>
                    <li><a href="#portafolio">Portafolio</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </div>

    );
}

export default Header;