import React from 'react';
import { Card } from 'react-bootstrap';

const Details = ({ data }) => {
    const { title, img, description } = data;
    return (
        <>
            <Card>
                <Card.Img variant="top" src={img} height="300px" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default Details;