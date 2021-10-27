import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services , setServices] = useState([]);
    useEffect( ()=>{
        fetch('https://gentle-basin-70264.herokuapp.com/services')
            .then(res=>res.json())
            .then(data=>setServices(data))
    } , [])
    return (
        <div id="services">
            <h2 className="mt-5"> Our Services</h2>
            <div>
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service=><Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;