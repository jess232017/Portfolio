import React from 'react';

const Loader = () => {
    return (
        <>
            <div className="spinner">
                <div className="double-bounce1" />
                <div className="double-bounce2" />
            </div>
            <p className="text-base dark:text-white text-center">Cargando recursos...</p>
        </>
    );
}

export default Loader;