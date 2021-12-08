import React from 'react';

import styled from 'styled-components'

const SkillBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 13px 8px -10px rgb(0 0 0 / 10%);
    background-color: var(--color-white);
    padding: 2.5rem 1.3rem;
    border-radius: 1rem;
`

const Skill = ({ titulo, subtitulo, imagen }) => {

    return (
        <SkillBox classname="margin-mini">
            <svg className="able-icons">
                <use xlinkHref={`./img/svg-symbols.svg#${imagen}`} />
            </svg>
            <a target="_blank" href="{data.url}"><h2 className="title-3">{titulo}</h2></a>
            <p className="s-description">{subtitulo}</p>
        </SkillBox>
    );
}

export default Skill;