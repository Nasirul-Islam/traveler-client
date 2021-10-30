import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Order = ({ data }) => {
    const { img, title } = data;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} height="300px" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {/* {description.slice(0, 180)} */}
                        </Card.Text>
                    </Card.Body>
                    <Button variant="info" className="PurchaseBtn">Cancel</Button>
                </Card>
            </Col>
        </div>
    );
};

export default Order;