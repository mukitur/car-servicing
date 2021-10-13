import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id, name, price, description, img} =service;
    return (
        <div className="my-5">
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Title>Price: {price}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Link to = {`/booking/${id}`}><button>Book {name}</button></Link>
                    </Card.Body>
                </Card>
                </Col>
        </div>
    );
};

export default Service;