import React from 'react';

import styled from 'styled-components';
import { Image, Transformation, Placeholder } from 'cloudinary-react';

const CardProject = styled.article`
    box-shadow: 0 13px 8px -10px rgb(0 0 0 / 10%);
    background-color: var(--color-white);
    border: 1px solid rgba(0, 0, 0, .125);
    padding: 0;
`;

const FigCaption = styled.figcaption`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Svg = styled.svg`
    width: 32px;
    height: 32px;
`;


const Project = ({ titulo, descripcion, hecho_con, imagen, url_github, url_web }) => {

    return (
        <CardProject>
            <figure className="overlay-hover rounded-lg p-4">
                <Image
                    secure={true}
                    loading="lazy"
                    cloudName="js-media"
                    publicId={`portfolio/${imagen}`}
                    alt={titulo}
                    height="160">
                    <Transformation width="auto" crop="thumb" height="160" gravity='face' quality="auto" fetchFormat="auto" />
                    <Placeholder type="pixelate" />
                </Image>
                <FigCaption>
                    <h3>hecho con</h3>
                    <a className="flex" href={url_github} target="_blank">
                        {hecho_con.map(element => (
                            <Svg key={element}>
                                <use xlinkHref={`./img/svg-symbols.svg#logo-${element}`} />
                            </Svg>
                        ))}
                    </a>
                </FigCaption>
            </figure>
            <div className="card-body">
                <div className='absolute top-0 left-0 flex justify-center w-full'>
                    <a href={url_web} target="_blank">VER PROYECTO</a>
                </div>

                <div className="mt-4">
                    <a target="_blank" href={url_github}>
                        <h2 className="font-medium text-base md:text-lg text-gray-800 line-clamp-1" title={titulo}>
                            {titulo}
                        </h2>
                    </a>
                    <p className="mt-2 text-sm text-gray-800 line-clamp-1" title={descripcion}>
                        {descripcion}
                    </p>
                </div>
            </div>

        </CardProject>


    );

    return (
        <div className="relative mx-auto w-full">
            <a href={url_web} target="_blank" className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                <div className="shadow p-4 rounded-lg bg-white">
                    <div className="flex justify-center relative rounded-lg overflow-hidden h-44">
                        <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                            <Image
                                alt={titulo}
                                secure={true}
                                loading="lazy"
                                cloudName="js-media"
                                publicId={`portfolio/${imagen}`}
                                className="h-44 object-cover" >
                                <Transformation width="auto" heigh="145" crop="thumb" gravity='face' quality="auto" fetchFormat="auto" />
                                <Placeholder type="pixelate" />
                            </Image>
                        </div>

                        <div className="absolute flex justify-center bottom-0 mb-3">
                            <div className="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
                                <a className="flex" href={url_github} target="_blank">
                                    {hecho_con.map(element => (
                                        <Svg key={element}>
                                            <use xlinkHref={`./img/svg-symbols.svg#logo-${element}`} />
                                        </Svg>
                                    ))}
                                </a>
                            </div>
                        </div>

                        <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
                            Ver Proyecto
                        </span>
                    </div>

                    <div className="mt-4">
                        <h2 className="font-medium text-base md:text-lg text-gray-800 line-clamp-1" title="New York">
                            {titulo}
                        </h2>
                        <p className="mt-2 text-sm text-gray-800 line-clamp-1" title={descripcion}>
                            {descripcion}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    )

}

export default Project;