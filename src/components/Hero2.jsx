import React from 'react';

const Hero2 = () => {
    return (
        <div className="hero-2">
            <div className="contenedor">
                <h3 className="title-1 padding" style={{ color: 'white' }}>Destrezas</h3>
                <div className="grid-skills">
                    <div className="c-flex justy-center align-center margin-mini">
                        <svg className="able-icons">
                            <use xlinkHref="./img/svg-symbols.svg#icon-check" />
                        </svg>
                        <span>Proactivo</span>
                    </div>
                    <div className="c-flex justy-center align-center margin-mini">
                        <svg className="able-icons">
                            <use xlinkHref="./img/svg-symbols.svg#icon-calendar" />
                        </svg>
                        <span>Responsable</span>
                    </div>
                    <div className="c-flex justy-center align-center margin-mini">
                        <svg className="able-icons">
                            <use xlinkHref="./img/svg-symbols.svg#icon-group" />
                        </svg>
                        <span>Trabajo en equipo</span>
                    </div>
                    <div className="c-flex justy-center align-center margin-mini">
                        <svg className="able-icons">
                            <use xlinkHref="./img/svg-symbols.svg#icon-medal" />
                        </svg>
                        <span>Orientado a Objetivos</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Hero2;