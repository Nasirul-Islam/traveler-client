import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleOffer = ({ data }) => {
    const { title, description, img, id } = data;
    const url = `/purchase/${id}`
    return (
        <>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} height="300px" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 170)}
                        </Card.Text>
                    </Card.Body>
                    <Button variant="info" className="PurchaseBtn">
                        <Link to={url}>Purchase Now</Link>
                    </Button>
                </Card>
            </Col>
        </>
    );
};

export default SingleOffer;