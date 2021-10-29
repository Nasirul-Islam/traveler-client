import React from 'react';
import { Button, Container } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { user, errorMessage, handlegooglelogin } = useFirebase();
    console.log(user);
    console.log(errorMessage);
    return (
        <Container className="py-5">
            <h2> please login</h2>
            <h1>Name: {user?.displayName}</h1>
            <h1>Email: {user?.email}</h1>
            <Button onClick={handlegooglelogin}>Login</Button>
        </Container>
    );
};

export default Login;