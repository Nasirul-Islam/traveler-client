import React from 'react';
import './AddServices.css';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddServices = () => {
    // Form --------
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://serene-stream-43167.herokuapp.com/addservices', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert("Added Successfully")
                    reset();
                }
            })

    }
    return (
        <Container className="addServices py-4">
            <h2>Add Package</h2>
            {/* --------- Form ---------- */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="" {...register("title")} type="text" placeholder="title" />
                <br />
                <input {...register("description")} type="text" placeholder="description" />
                <br />
                <input {...register("img")} type="text" placeholder="image url" />
                <br />
                <input {...register("price")} type="number" placeholder="package price" />
                <br />
                <input type="submit" value="Confirm" className="bg-info border-0" />
            </form>
        </Container>
    );
};

export default AddServices;