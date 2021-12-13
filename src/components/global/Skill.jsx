import React from 'react';

import styled from 'styled-components'

const SkillBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 13px 8px -10px rgb(0 0 0 / 10%);
    //padding: 2.5rem 1.3rem;
    padding: 1.5rem 1.5rem;
    border-radius: .3rem;
    //background-color: white;
    border: 2px dashed #f3f4f6;
    background-color: white;
    border-bottom-width: 0.5px;
`

const Skill = ({ titulo, subtitulo, imagen, url = "#" }) => {

    return (
        <SkillBox>
            <svg className="able-icons">
                <use xlinkHref={`./img/svg-symbols.svg#${imagen}`} />
            </svg>
            <a target="_blank" href={url}>
                <h2 className="title-3">{titulo}</h2>
            </a>
            <p className="description">{subtitulo}</p>
        </SkillBox>
    );
}

export default Skill;