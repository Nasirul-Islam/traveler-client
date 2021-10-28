import React from 'react';
import './Banner.css';
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <Row>
                    <Col md={6} className="">
                    </Col>
                    <Col md={6} className="banner-text">
                        <h1>Your Journey Begins</h1>
                        <h3>A journey of a thousand miles starts with a single step, start your journey with "Traveler" agency</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;