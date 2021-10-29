import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Purchase = () => {
    return (
        <Container className="py-5">
            <Row>
                <Col md={6} className="">
                    <h2>Package Details</h2>
                </Col>
                <Col md={6} className="">
                    <h2>Give Your Information</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default Purchase;