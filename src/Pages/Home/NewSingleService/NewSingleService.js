import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewSingleService = ({ data }) => {
    const { title, description, img, id } = data;
    // console.log(data);
    return (
        <>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} height="300px" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 200)}
                        </Card.Text>
                    </Card.Body>
                    <Button variant="info" className="PurchaseBtn">
                        <Link to={`/purchase/${id}`}>Purchase Now</Link>
                    </Button>
                </Card>
            </Col>
        </>
    );
};

export default NewSingleService;