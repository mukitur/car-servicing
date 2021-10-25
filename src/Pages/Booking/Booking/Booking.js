import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const [service, setService] = useState({});
    const {serviceId}=useParams();
    useEffect( () =>{
        const url = `http://localhost:5000/services/${serviceId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=> setService(data))
    }, [])

    return (
        <div>
            <h2 className="mt-5">Details of : {service.Name}</h2>
            <p><small>Booking ID is: {serviceId}</small></p>
            <h5>Price: {service.Price}</h5>
            <p>Description: {service.Description}</p>
        </div>
    );
};

export default Booking;