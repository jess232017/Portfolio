import React, { useState, useEffect } from 'react';

//icons
import { FaMobile, FaDesktop, FaServer, FaEye } from 'react-icons/fa'

//owned
import Project from './global/Project';
import { useProjectDatabase } from '../services/firebase';

const Button = ({ name, dataType, selectedType, onClick, children }) => {
    const active = "flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded active";
    const inactive = "flex items-center py-2 px-4 text-sm font-medium text-center text-gray-500 rounded hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white";
    return (
        <li className="m-2">
            <button
                type="button"
                onClick={onClick}
                aria-current="page"
                data-type={dataType}
                className={`${selectedType === dataType ? active : inactive}`}>
                <span className='mr-2'>
                    {children}
                </span>
                {name}
            </button>
        </li>
    )
}

const Portfolio = () => {
    const [type, setType] = useState("");
    const [count, setCount] = useState(6);
    const [project, setProject] = useState([]);
    const [selected, setSelected] = useState([]);

    useProjectDatabase('portafolio', (snapshot) => {
        const data = snapshot.val();
        setProject(Object.keys(data).map(key => ({ key, item: data[key] })));
    }, [type]);

    useEffect(() => {
        if (project.length > 5) {
            setSelected(project.slice(0, count));
            return;
        }
        setSelected(project);
    }, [project, count])

    const handleType = (e) => {
        const type = e.target.dataset.type;
        if (typeof type !== 'undefined') {
            setCount(6);
            setType(e.target.dataset.type);
        }
    }

    const handleMore = () => {
        setCount(count + 3);
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
                            onClick={handleType}>
                            <FaEye />
                        </Button>
                        <Button
                            name="Frontend"
                            dataType="front-end"
                            selectedType={type}
                            onClick={handleType}>
                            <FaDesktop />
                        </Button>
                        <Button
                            name="Backend"
                            dataType="back-end"
                            selectedType={type}
                            icon={FaServer}
                            onClick={handleType}>
                            <FaServer />
                        </Button>
                        <Button
                            name="Móvil"
                            dataType="mobile"
                            selectedType={type}
                            onClick={handleType}>
                            <FaMobile />
                        </Button>
                    </ul>
                </div>

                <div id="portafolio-grid" className="grid-skills mega">
                    {selected.map(({ key, item }) => (
                        <Project
                            key={key}
                            {...item}
                        />
                    ))}
                </div>

                <div className='text-center p-4'>
                    <button
                        type="button"
                        onClick={handleMore}
                        hidden={count >= project.length}
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700">
                        Ver más
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Portfolio;