import React from 'react';
import { Button, Container } from 'react-bootstrap';
// import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { user, handlegooglelogin } = useAuth();
    console.log(user);
    // console.log(errorMessage);

    // const history = useHistory();
    // const location = useLocation();
    // const redirect_uri = location.state?.from || "/home";

    const googlelogin = () => {
        handlegooglelogin()
            .then(result => {
                // history.push(redirect_uri);
                // setUser(result.user);
            })
    }
    return (
        <Container className="py-5">
            <h2> please login</h2>
            <h1>Name: {user?.displayName}</h1>
            <h1>Email: {user?.email}</h1>
            <Button onClick={googlelogin}>Login</Button>
        </Container>
    );
};

export default Login;