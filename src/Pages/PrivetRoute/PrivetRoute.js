import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const { user, isloding } = useAuth();
    if (isloding) {
        return <Spinner animation="border" variant="primary" />
    }
    // console.log(user);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? children
                    :
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
            }
        />
    );
};

export default PrivetRoute;