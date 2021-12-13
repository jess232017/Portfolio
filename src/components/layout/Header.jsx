import React, { useEffect, useCallback } from 'react';
import { Fade as Hamburger } from 'hamburger-react'

import useBoolean from '../../services/hooks/useBoolean';

const Header = () => {
    const [isOpen, open] = useBoolean();
    const [isScrolled, actions] = useBoolean();

    useEffect(() => {
        window.onscroll = () => {
            const scrolled = document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20;
            actions.set(scrolled)
        };
    }, [])

    const handleClick = useCallback((e) => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('data-goto')).scrollIntoView({
            behavior: 'smooth'
        });
    }, []);

    return (
        <div id="navbar" className={`fixed ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'scrolled checked' : ''}`}>
            <nav id="navcontain" className={`contenedor ${isOpen}`}>
                <h1 className="logo">Je-HG</h1>

                <Hamburger
                    size={25}
                    label="Show menu"
                    easing="ease-in"
                    toggled={isOpen}
                    onToggle={open.toggle}
                />

                <ul>
                    <li className="active" data-goto="#inicio" onClick={handleClick}>Inicio</li>
                    <li data-goto="#about-me" onClick={handleClick}>Acerca de mí</li>
                    <li data-goto="#skill" onClick={handleClick}>Habilidades</li>
                    <li data-goto="#portafolio" onClick={handleClick}>Portafolio</li>
                    <li data-goto="#contacto" onClick={handleClick}>Contacto</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;