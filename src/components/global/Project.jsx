import React from 'react';

const Project = ({ titulo, descripcion, hecho_con, imagen, url_github, url_web }) => {
    return (
        <div className="card-skills square">
            <div>
                <figure className="overlay-hover">
                    <img height={160} width="auto" src={`img/portafolio/${imagen}`} />
                    <figcaption className="c-flex justy-center align-center">
                        <h3>hecho con</h3>
                        <a className="flex" href={url_github} target="_blank">
                            {hecho_con.map(element => (
                                <svg className="norm-icon" key={element}>
                                    <use xlinkHref={`./img/svg-symbols.svg#logo-${element}`} />
                                </svg>
                            ))}
                        </a>
                    </figcaption>
                </figure>
                <div className="card-body">
                    <div className="card-category">
                        <a href={url_web} target="_blank">VER PROYECTO</a>
                    </div>
                    <h2 className="title-3"><a target="_blank" href={url_github}>{titulo}</a></h2>
                    <p className="s-description">{descripcion}</p>
                </div>
            </div>

        </div>
    );
}

export default Project;