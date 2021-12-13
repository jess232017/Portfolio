import React from 'react';

import styled from 'styled-components';
import { Image, Transformation, Placeholder } from 'cloudinary-react';

const CardSkill = styled.article`
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
        <CardSkill>
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
                            <Svg key={element}>
                                <use xlinkHref={`./img/svg-symbols.svg#logo-${element}`} />
                            </Svg>
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

        </CardSkill>
    );
}

export default Project;