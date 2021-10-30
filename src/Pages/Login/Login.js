import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { user, handlegooglelogin, setIsloding } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || "/home";

    const googlelogin = () => {
        handlegooglelogin()
            .then(result => {
                history.push(redirect_uri);
            })
            .finally(() => setIsloding(false))
    }
    return (
        <Container className="py-5">
            <h2> Please Login</h2>
            <h1>Name: {user?.displayName}</h1>
            <h1>Email: {user?.email}</h1>
            <Button onClick={googlelogin}>Login With Google</Button>
        </Container>
    );
};

export default Login;