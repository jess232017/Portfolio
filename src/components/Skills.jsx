import React, { useState } from 'react';

import Skill from './global/Skill';
import { useRealTimeDatabase } from '../services/firebase';

const Skills = () => {
    const [frontend, setFrontend] = useState([]);
    const [backend, setBackend] = useState([]);

    useRealTimeDatabase('front-end', (snapshot) => {
        const data = snapshot.val();
        setFrontend(Object.keys(data).map(key => ({ key, item: data[key] })));
    })

    useRealTimeDatabase('back-end', (snapshot) => {
        const data = snapshot.val();
        setBackend(Object.keys(data).map(key => ({ key, item: data[key] })));
    })

    return (
        <div id="skill">
            <h3 className="title-1">Habilidades</h3>
            <div className="divisor" />
            <p className="subtitle-1">Conocimientos técnicos y habilidades</p>

            {/*FrontEnd*/}
            <h5 className="title-2 margin">Front-end</h5>
            <div id="front-end" className="grid-skills hiper">
                {frontend.map(({ key, item }) => (
                    <Skill
                        key={key}
                        {...item}
                    />
                ))}
            </div>

            {/* Backend*/}
            <h5 className="title-2 margin">Back-end</h5>
            <div id="back-end" className="grid-skills hiper">
                {backend.map(({ key, item }) => (
                    <Skill
                        key={key}
                        {...item}
                    />
                ))}
            </div>
            <div className="margin" />
        </div>
    );
}

export default Skills;