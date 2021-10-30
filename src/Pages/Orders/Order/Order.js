import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Order = ({ data }) => {
    const { img, title, id } = data;
    // console.log(data);
    const handleCancel = (id) => {
        fetch(`http://localhost:5000/cancelorder/${id}`, {
            method: "delete",
            headers: { "content-type": "application/json" },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('deleted')
                }
            })
    }
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
                    <Button variant="info"
                        onClick={() => handleCancel(id)}
                        className="PurchaseBtn">Cancel</Button>
                </Card>
            </Col>
        </div>
    );
};

export default Order;