
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExpert] =useState([]);
    useEffect( () =>{
        fetch('./experts.json')
            .then(res=> res.json())
            .then(data=>setExpert(data))
    }, [])

    return (
        <div id="experts">
            <h2>Our Experts</h2>
            <div>
            <Row xs={1} md={4} className="g-4">
                {
                    experts.map(expert=> <Expert
                        key = {expert.name}
                        expert ={expert}
                    ></Expert>)
                }
            </Row>
            </div>
        </div>
    );
};

export default Experts;