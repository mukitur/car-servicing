import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, Name, Price, Description, Image} =service;
    return (
        <div className="my-5">
            <Col>
                <Card>
                    <Card.Img variant="top" src={Image} />
                    <Card.Body>
                    <Card.Title>Name: {Name}</Card.Title>
                    <Card.Title>Price: {Price}</Card.Title>
                    <Card.Text>
                    {Description}
                    </Card.Text>
                    <Link to = {`/booking/${_id}`}><button>Book {Name}</button></Link>
                    </Card.Body>
                </Card>
                </Col>
        </div>
    );
};

export default Service;