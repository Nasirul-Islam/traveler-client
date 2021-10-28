import React from 'react';
import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import { FaHome, FaFacebookF, FaGooglePlusG, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="footer">
            <Container className="">
                <Row className="py-5">
                    <Col md={6} className=" text-start">
                        <h2>Traveler</h2>
                        <p>The term traveller refers to anyone who has a nomadic way of life. It can not only refer to Irish Travellers or Romany Gypsies, but also those who live on the road for economic reasons such as New Travellers or Showmen.</p>
                    </Col>
                    <Col md={3} className="socialMedia">
                        <h2>Links</h2>
                        <div className="d-flex justify-content-center social-icon">
                            <div className="icon">
                                <p><FaFacebookF /></p>
                                <p><FaGooglePlusG /></p>
                                <p><FaTwitter /></p>
                                <p><FaLinkedinIn /></p>
                            </div>
                            <div className="icon-text">
                                <p>Facebook</p>
                                <p>Google+</p>
                                <p>Twitter</p>
                                <p>Linkedin</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} className="">
                        <h2>Connect</h2>
                        <div className="d-flex justify-content-evenly social-icon">
                            <div className="icon">
                                <p><FaHome /></p>
                                <br />
                                <br />
                                <p><BsFillEnvelopeFill /></p>
                                <p><BsFillTelephoneFill /></p>
                            </div>
                            <div className="icon-text">
                                <p>143 Gordon Terrace Embarrassing NG33 0ZT
                                    United State</p>
                                <p>info@traveler.com</p>
                                <p>++0888666</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="py-4 footer-bootom">
                    <p>© 2021 traveler.com, All Rights Reserved</p>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;