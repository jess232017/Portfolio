import React, { useState } from 'react';

import Service from './global/Service';
import { useRealTimeDatabase } from '../services/firebase';

const Services = () => {
    const [service, setService] = useState([]);

    useRealTimeDatabase('services', (snapshot) => {
        const data = snapshot.val();
        setService(Object.keys(data).map(key => ({ key, item: data[key] })));
    }, [])

    return (
        <section>
            <h3 className="title-1">Servicios</h3>
            <div className="divisor"></div>
            <div className="margin"></div>
            <div id="servicios" className="grid-skills mega">
                {service.map(({ key, item }) => (
                    <Service
                        key={key}
                        {...item}
                    />
                ))}
            </div>
            <div className="margin"></div>
        </section>
    );
}

export default Services;