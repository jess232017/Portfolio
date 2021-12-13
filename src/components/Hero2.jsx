import React from 'react';
import styled from 'styled-components';

const SoftSkill = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const Hero2 = () => {
    return (
        <section className="soft-skill hero-2">
            <div className="contenedor">
                <h3 className="title-1 padding" style={{ color: 'white' }}>Destrezas</h3>
                <div className="grid-skills">
                    <SoftSkill>
                        <svg className="able-icons">
                            <use xlinkHref="./img/svg-symbols.svg#icon-check" />
                        </svg>
                        <span>Proactivo</span>
                    </SoftSkill>
                    <SoftSkill>
                        <svg className="able-icons">
                            <use xlinkHref="./img/svg-symbols.svg#icon-calendar" />
                        </svg>
                        <span>Responsable</span>
                    </SoftSkill>
                    <SoftSkill>
                        <svg className="able-icons">
                            <use xlinkHref="./img/svg-symbols.svg#icon-group" />
                        </svg>
                        <span>Trabajo en equipo</span>
                    </SoftSkill>
                    <SoftSkill>
                        <svg className="able-icons">
                            <use xlinkHref="./img/svg-symbols.svg#icon-medal" />
                        </svg>
                        <span>Orientado a Objetivos</span>
                    </SoftSkill>
                </div>
            </div>
        </section>

    );
}

export default Hero2;