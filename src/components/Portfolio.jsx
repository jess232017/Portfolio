import React, { useState } from 'react';

//icons
import { FaMobile, FaDesktop, FaServer, FaEye } from 'react-icons/fa'

//owned
import Project from './global/Project';
import { useProjectDatabase } from '../services/firebase';

const Button = ({ name, dataType, selectedType, handleSetType, icon }) => {
    const Icon = icon;
    const active = "flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded active";
    const inactive = "flex items-center py-2 px-4 text-sm font-medium text-center text-gray-500 rounded hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white";
    return (
        <li className="m-2">
            <button
                type="button"
                aria-current="page"
                onClick={handleSetType} data-type={dataType}
                className={`${selectedType === dataType ? active : inactive}`}>
                <Icon className="mr-2" />
                {name}
            </button>
        </li>
    )
}

const Portfolio = () => {
    const [type, setType] = useState("")
    const [project, setProject] = useState([]);

    useProjectDatabase('portafolio', (snapshot) => {
        const data = snapshot.val();
        setProject(Object.keys(data).map(key => ({ key, item: data[key] })));
    }, [type])

    const handleSetType = (e) => {
        const type = e.target.dataset.type;
        if (typeof type !== 'undefined') {
            setType(e.target.dataset.type);
        }
    }

    return (
        <section id="portafolio" className="py-24" data-spy="true">
            <div className="contenedor">
                <h3 className="title-1">Portafolio</h3>
                <div className="divisor"></div>
                <p className="subtitle-1">Mostrando algunos de mis mejores trabajos</p>

                <div className="flex justify-center my-8">
                    <ul className="flex justify-center  flex-wrap">
                        <Button
                            name="Todos"
                            dataType=""
                            selectedType={type}
                            icon={FaEye}
                            handleSetType={handleSetType}
                        />
                        <Button
                            name="Frontend"
                            dataType="front-end"
                            selectedType={type}
                            icon={FaDesktop}
                            handleSetType={handleSetType}
                        />
                        <Button
                            name="Backend"
                            dataType="back-end"
                            selectedType={type}
                            icon={FaServer}
                            handleSetType={handleSetType}
                        />
                        <Button
                            name="Móvil"
                            dataType="mobile"
                            selectedType={type}
                            icon={FaMobile}
                            handleSetType={handleSetType}
                        />
                    </ul>
                </div>

                <div id="portafolio-grid" className="grid-skills mega">
                    {project.map(({ key, item }) => (
                        <Project
                            key={key}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;