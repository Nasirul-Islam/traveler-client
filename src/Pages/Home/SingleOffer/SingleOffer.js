import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleOffer = ({ data }) => {
    const { name, email, website, phone } = data;
    return (
        <>
            <Col>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/3cVcSPK/chef-3.png" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {email}
                            {website}
                            {phone}
                        </Card.Text>
                    </Card.Body>
                    <Button variant="info" className="PurchaseBtn">
                        <Link to="/purchase">Purchase Now</Link>
                    </Button>
                </Card>
            </Col>
        </>
    );
};

export default SingleOffer;