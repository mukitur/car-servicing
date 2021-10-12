import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Expert = ({expert}) => {
    const {name, img, expertize} = expert;
    return (
        <div className="my-5">
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Title className="text-danger"> {expertize}</Card.Title>
                    
                    </Card.Body>
                </Card>
                </Col>
            
        </div>
    );
};

export default Expert;