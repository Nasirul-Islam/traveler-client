import React from 'react';
import './Navigation.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="nav-top">
            <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
                <Container className="navigation">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav>
                                <Link to="/home">Home</Link>
                            </Nav>
                            <Nav>
                                <Link to="/login">Login</Link>
                            </Nav>
                            <Nav>
                                <Link to="/MyOrder">My Order</Link>
                            </Nav>
                            <Nav>
                                <Link to="/ManageOrder">Manage Order</Link>
                            </Nav>
                            <Nav>
                                <Link to="/AddOrder">Add Order</Link>
                            </Nav>
                            <Button
                                // onClick={handlelogOut} 
                                className="logOutBtn"
                            >Log Out</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;