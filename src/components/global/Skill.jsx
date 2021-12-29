import React from 'react';

import Clamp from 'react-multiline-clamp';
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
        <div className="flex items-center relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-gray-100">
                <svg className="w-12 h-12">
                    <use xlinkHref={`./img/svg-symbols.svg#${imagen}`} />
                </svg>
            </div>
            <div className="ml-3">
                <p className="font-medium text-gray-800 m-0">{titulo}</p>
                <Clamp
                    lines={2}
                    maxLines={6}
                    withTooltip
                    withToggle
                    showMoreElement={({ toggle }) => (
                        <span className='text-sm text-gray-600 font-medium cursor-pointer' type="button" onClick={toggle}>
                            Ver más
                        </span>
                    )}
                    showLessElement={({ toggle }) => (
                        <span className='text-sm text-gray-600 font-medium cursor-pointer' type="button" onClick={toggle}>
                            Ver menos
                        </span>
                    )}
                >
                    <p className="text-sm text-gray-600 m-0">{subtitulo}</p>
                </Clamp>
            </div>
        </div>
    )

    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

            <div className="flex flex-col items-center p-4">

                <svg className="mb-3 w-24 h-24">
                    <use xlinkHref={`./img/svg-symbols.svg#${imagen}`} />
                </svg>

                <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{titulo}</h3>
                <span className="hide text-sm text-gray-500 dark:text-gray-400">{subtitulo}</span>

            </div>
        </div >

    )

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