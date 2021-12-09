import React from 'react';

import styled from 'styled-components'

const ServiceBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
    padding: 3rem;
    background-color: var(--color-white);
    border-radius: .3rem;
    box-shadow: 0 13px 8px -10px rgb(0 0 0 / 10%);
    box-shadow: 0 .125rem .25rem rgba(34,34,34,.075);
`

const Skill = ({ titulo, subtitulo, imagen }) => {

    return (
        <ServiceBox classname="margin-mini">
            <div>
                <div className="service-icon c-flex align-center">
                    <svg>
                        <use xlinkHref="./img/svg-symbols.svg#back-splash" />
                    </svg>
                    <svg>
                        <use xlinkHref={`./img/svg-symbols.svg#${imagen}`} />
                    </svg>
                </div>
                <h4><a href>{titulo}</a></h4>
                <p className="description">{subtitulo}</p>
            </div>
        </ServiceBox>
    );
}

export default Skill;