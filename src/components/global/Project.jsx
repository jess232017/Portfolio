import React from 'react';

import styled from 'styled-components';
import { Image, Transformation, Placeholder } from 'cloudinary-react';

const FigCaption = styled.figcaption`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const Project = ({ titulo, descripcion, hecho_con, imagen, url_github, url_web }) => {
    return (
        <div className="card-skills square">
            <figure className="overlay-hover">
                <Image
                    secure={true}
                    loading="lazy"
                    cloudName="js-media"
                    publicId={`portfolio/${imagen}`}
                    alt={titulo}
                    height="160" >
                    <Transformation width="auto" crop="thumb" height="160" gravity='face' quality="auto" fetchFormat="auto" />
                    <Placeholder type="pixelate" />
                </Image>
                <FigCaption>
                    <h3>hecho con</h3>
                    <a className="flex" href={url_github} target="_blank">
                        {hecho_con.map(element => (
                            <svg className="norm-icon" key={element}>
                                <use xlinkHref={`./img/svg-symbols.svg#logo-${element}`} />
                            </svg>
                        ))}
                    </a>
                </FigCaption>
            </figure>
            <div className="card-body">
                <div className="card-category">
                    <a href={url_web} target="_blank">VER PROYECTO</a>
                </div>
                <h2 className="title-3"><a target="_blank" href={url_github}>{titulo}</a></h2>
                <p className="description">{descripcion}</p>
            </div>

        </div >
    );
}

export default Project;