import React, { useEffect, useCallback } from 'react';
import { Fade as Hamburger } from 'hamburger-react'

import useBoolean from '../../services/hooks/useBoolean';

const Header = () => {
    const [isOpen, open] = useBoolean();
    const [isScrolled, actions] = useBoolean();

    useEffect(() => {
        let sections = document.querySelectorAll('[data-spy="true"]');

        window.onscroll = () => {
            if (sections.length <= 1) {
                sections = document.querySelectorAll('[data-spy="true"]');
            }

            //sticky effect
            const scrolled = document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20;
            actions.set(scrolled)

            //scrollspy 
            const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

            for (let s in sections) {
                if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos + 200) {
                    const id = sections[s].id;
                    document.querySelector('.active').classList.remove('active');
                    document.querySelector(`li[data-goto="#${id}"]`).classList.add('active');
                }
            }
        }
    }, [])

    //smooth scroll
    const handleClick = useCallback((e) => {
        e.preventDefault();
        open.off();
        document.querySelector(e.target.getAttribute('data-goto')).scrollIntoView({
            behavior: 'smooth'
        });
    }, []);

    return (
        <>
            <div id="navbar" className={`fixed ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'scrolled checked' : ''}`}>
                <nav id="navcontain" className={`contenedor ${isOpen}`}>
                    <h1 className="logo">Je-HG</h1>

                    <Hamburger
                        size={18}
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
            </div >
        </>
    );
}


export default Header;