import React, { useEffect, useCallback } from 'react';
import { Fade as Hamburger } from 'hamburger-react'

import { MdDarkMode, MdLightMode, MdMenu } from 'react-icons/md'

import useBoolean from '../../services/hooks/useBoolean';

const Header = () => {
    const [isOpen, open] = useBoolean();
    const [isScrolled, actions] = useBoolean();

    useEffect(() => {
        const sections = document.querySelectorAll('[data-spy="true"]');

        window.onscroll = () => {
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
/*
<header className="hidden bg-white border-b dark:bg-gray-900 dark:border-gray-700 lg:fixed lg:w-full lg:top-0 lg:left-0 lg:z-40">
                <div className="container px-4 py-5 mx-auto space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:space-x-10">
                    <div className="flex justify-between">
                        <a href="/" className="text-gray-800 dark:text-gray-200">
                            <div className="flex items-center">
                                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 27" className="h-7 w-7 -mt-2 flex-shrink-0">
                                    <path d="M22.487.658s5.03 13.072-1.822 22.171C16.476 28.39 9.84 27.26 5.484 25.68c1.513-3.391 3.441-6.067 5.784-8.03 1.176.623 3.186.792 6.03.51-2.535-.221-4.284-.654-5.246-1.3l.125.08c2.122-1.546 4.556-2.556 7.303-3.029-3.16-.285-6.026.315-8.598 1.804-.577-.742-1.157-1.748-1.74-3.018.07 1.534.339 2.734.809 3.6-2.64 1.797-4.953 4.58-6.94 8.351a7.583 7.583 0 01-.188-.088c-.802-.358-1.328-1.037-1.755-2.036C-1.9 13.366 4.645 8.273 11.123 7.989 23.046 7.465 22.487.658 22.487.658z" fill="#0ED3CF" />
                                </svg>
                                <p className="text-xl ml-2">tailwind<strong>components</strong></p>
                            </div>
                        </a>
                        <div className="flex items-center space-x-2 lg:hidden">
                            <button className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 focus:outline-none"><svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-700 dark:text-gray-300"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg></button></div></div> <div className="flex flex-col space-y-4 lg:hidden" style={{ display: 'none' }}><div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center"><a href="/" className="text-gray-500 dark:text-gray-200 hover:text-gray-800">Home</a> <a href="/components" className="text-gray-500 dark:text-gray-200 hover:text-gray-800 lg:hidden">Components</a> <div className="relative inline-block hidden lg:block"><div><button className="text-gray-500 dark:text-gray-200 hover:text-gray-800 flex items-center space-x-1 focus:outline-none"><span>Components</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </button>
                            </div>
                                <div className="absolute left-0 z-20 py-1 mt-2 bg-white border border-gray-100 rounded-md shadow-xl dark:border-gray-700 lg:left-auto lg:right-0 dark:bg-gray-800" style={{ display: 'none' }}>
                                    <div className="w-36">
                                        <a href="/components" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                            All Components
                                        </a>
                                        <a href="/components/alpinejs" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                            Alpinejs
                                        </a>
                                        <a href="/components/buttons" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                            Buttons
                                        </a>
                                        <a href="/components/cards" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                            Cards
                                        </a>
                                        <a href="/components/dropdowns" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                            Dropdowns
                                        </a>
                                        <a href="/components/forms" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                            Forms
                                        </a>
                                        <a href="/components/inputs" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                            Inputs
                                        </a>
                                        <a href="/components/logins" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                            Logins
                                        </a>
                                        <a href="/components/modals" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                            Modals
                                        </a>
                                        <a href="/components/navigations" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                            Navigations
                                        </a>
                                        <a href="/components/pages" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                            Pages
                                        </a>
                                        <a href="/components/selects" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                            Selects
                                        </a>
                                        <a href="/components/tabs" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                            Tabs
                                        </a>
                                        <a href="/components/tables" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                            Tables
                                        </a>
                                        <a href="/components/widget" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                            Widget
                                        </a>
                                    </div>
                                </div>
                            </div>
                                <a href="/awesome" className="text-gray-500 dark:text-gray-200 hover:text-gray-800">Awesome</a>
                                <a href="/premium" className="text-gray-500 dark:text-gray-200 hover:text-gray-800">Premium</a>
                                <a href="/cheatsheet" target="_blank" className="text-gray-500 dark:text-gray-200 hover:text-gray-800 lg:hidden">Cheatsheet</a>
                                <a href="/gradient-generator" target="_blank" className="text-gray-500 dark:text-gray-200 hover:text-gray-800 lg:hidden">Gradient Generator</a>
                                <div className="relative inline-block hidden lg:block"><div>
                                    <button className="text-gray-500 dark:text-gray-200 hover:text-gray-800 flex items-center space-x-1 focus:outline-none">
                                        <span>Tools</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div> 
                                <div className="absolute left-0 z-20 py-1 mt-2 bg-white border border-gray-100 rounded-md shadow-xl dark:border-gray-700 lg:left-auto lg:right-0 dark:bg-gray-800" style={{ display: 'none' }}>
                                <div className="w-40">
                                    <a target="_blank" href="/cheatsheet" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                        Cheatsheet
                                    </a> <a target="_blank" href="/gradient-generator" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                        Gradient Generator
                                    </a></div></div></div></div> <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4"><button type="button" aria-label="Color Mode" className="flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transform -rotate-90"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg></button> <form action="/search" className="flex flex-wrap justify-between md:flex-row">
                                        <input type="search" name="query" placeholder="Search" required="required" className="w-full h-12 px-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg lg:w-20 xl:transition-all xl:duration-300 xl:w-36 xl:focus:w-44 lg:h-10 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-40" /></form> <a href="/submit-component" className="flex items-center justify-center h-12 px-4 text-sm font-semibold text-center text-white rounded-md lg:h-10 bg-primary hover:bg-teal-300">
                        Submit <span className="lg:hidden 2xl:inline">&nbsp;new component</span></a> <a href="/login" className="flex items-center justify-center h-12 px-4 mt-2 text-sm text-center text-gray-600 transition-colors duration-200 transform border rounded-lg lg:h-10 dark:text-gray-300 dark:border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
                        Login
                    </a></div></div> <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:flex-1 lg:space-x-2">
                <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center">
                    <a href="/components" className="text-gray-500 dark:text-gray-200 hover:text-gray-800 lg:hidden">Components</a>
                    <div className="relative inline-block hidden lg:block"><div>
                        <button className="text-gray-500 dark:text-gray-200 hover:text-gray-800 flex items-center space-x-1 focus:outline-none">
                            <span>Components</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg></button></div> <div className="absolute left-0 z-20 py-1 mt-2 bg-white border border-gray-100 rounded-md shadow-xl dark:border-gray-700 lg:left-auto lg:right-0 dark:bg-gray-800" style={{ display: 'none' }}><div className="w-36"><a href="/components" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                    All Components
                                </a>
                                </div>
                        </div>
                    </div>
                </div></div></div></header>
*/

export default Header;