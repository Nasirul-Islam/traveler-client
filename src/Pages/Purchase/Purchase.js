import React from 'react';
import './Purchase.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useData from '../../hooks/useData';
import { useParams } from 'react-router';
import Details from '../Details/Details';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const Purchase = () => {
    const { user } = useAuth();
    const { datas } = useData();
    const { purchaseid } = useParams();
    const servicesresult = datas?.services?.filter(data => data.id == purchaseid);
    const offersresult = datas?.offers?.filter(data => data.id == purchaseid);
    console.log(user?.email);
    // Form --------
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.email = user.email
        data.purchaseId = purchaseid
        console.log(data)
        axios.post('http://localhost:5000/addorder', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert("Purchase Successfully")
                    reset();
                }
            })
    };
    return (
        <Container className="py-5">
            <Row>
                <Col md={6} className="">
                    <div className="">
                        <div className="py-3">
                            <h2>Package Details</h2>
                        </div>
                        <div>
                            {servicesresult?.map(data => <Details
                                key={data.id}
                                data={data}
                            ></Details>)}
                        </div>
                        <div>
                            {offersresult?.map(data => <Details
                                key={data.id}
                                data={data}
                            ></Details>)}
                        </div>
                    </div>
                </Col>
                {/* --------- Form ---------- */}
                <Col md={6} className="info">
                    <div className="py-3">
                        <h2>Give Your Information</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue="" {...register("name")} type="text" placeholder="Full Name" />
                        <br />
                        <input {...register("adddres", { required: true })} type="text" placeholder="Adddres" />
                        <br />
                        {errors.adddres && <span>This field is required</span>}
                        <br />
                        <input {...register("country")} type="text" placeholder="country" />
                        <br />
                        <input {...register("city")} type="text"
                            placeholder="city" />
                        <br />
                        <input {...register("zip")} type="number"
                            placeholder="ZIP Code" />
                        <br />
                        <input type="submit" value="Confirm" />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Purchase;