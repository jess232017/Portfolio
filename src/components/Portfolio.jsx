import React, { useState } from 'react';

import styled from 'styled-components';

import Project from './global/Project';
import { useRealTimeDatabase } from '../services/firebase';

const Section = styled.section`
    padding: 6rem 0;
`;

const Portfolio = () => {
    const [project, setProject] = useState([]);

    useRealTimeDatabase('portafolio', (snapshot) => {
        const data = snapshot.val();
        setProject(Object.keys(data).map(key => ({ key, item: data[key] })));
    })

    return (
        <Section id="portafolio">
            <div className="contenedor">
                <h3 className="title-1">Portafolio</h3>
                <div className="divisor"></div>
                <p className="subtitle-1">Mostrando algunos de mis mejores trabajos</p>

                <div className="margin"></div>

                <div id="portafolio-grid" className="grid-skills mega">
                    {project.map(({ key, item }) => (
                        <Project
                            key={key}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}

export default Portfolio;