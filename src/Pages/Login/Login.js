import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { user, handlegooglelogin, setIsloding } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || "/home";
    // Google Login
    const googlelogin = () => {
        handlegooglelogin()
            .then(result => {
                history.push(redirect_uri);
            })
            .finally(() => setIsloding(false))
    }
    // hook form
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        alert('Oops! Something Wrong, Please Login With Google.')
        reset();
    };
    return (
        <Container className="py-5">
            <div>
                <h2 className="fs-2 fw-bolder"> Please Login</h2>
            </div>
            <div className="loginform">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email", { required: true })}
                        type="email" placeholder="Email" />
                    <br />
                    <input {...register("password", { required: true })}
                        type="password" placeholder="Password" />
                    <br />
                    <input type="submit" value="Login" className="bg-info border-0" />
                </form>
            </div>
            <br />
            <div className="">
                <Button onClick={googlelogin}>Login With Google</Button>
            </div>

        </Container>
    );
};

export default Login;