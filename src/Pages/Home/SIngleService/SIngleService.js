import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const SIngleService = ({ data }) => {
    const { name, email, website, phone } = data;
    return (
        <div>
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
                    <Button>Purchase Now</Button>
                </Card>
            </Col>
        </div>
    );
};

export default SIngleService;