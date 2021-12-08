import React, { useState } from 'react';

import Project from './global/Project';
import { useRealTimeDatabase } from '../services/firebase';

const Portfolio = () => {
    const [project, setProject] = useState([]);

    useRealTimeDatabase('portafolio', (snapshot) => {
        const data = snapshot.val();
        setProject([]);

        for (const key in data) {
            setProject(oldArray => [...oldArray, { key, item: data[key] }]);
        }
    })

    return (
        <div id="portafolio" className="contenedor">
            <div className="margin"></div>
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

            <div className="margin"></div>
        </div>
    );
}

export default Portfolio;