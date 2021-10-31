import React from 'react';
import './Purchase.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useData from '../../hooks/useData';
import { useParams } from 'react-router';
import Details from '../Details/Details';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import useNewservices from '../../hooks/useNewservices';

const Purchase = () => {
    const { user } = useAuth();
    const { datas } = useData();
    const { newservices } = useNewservices();
    const { purchaseid } = useParams();
    // filter out order from database
    const servicesresult = datas?.services?.filter(data => data.id == purchaseid);
    const offersresult = datas?.offers?.filter(data => data.id == purchaseid);
    const newservicesresult = newservices?.filter(data => data.id == purchaseid);
    // Form --------
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.email = user.email
        data.purchaseId = purchaseid
        data.status = "pending"
        // console.log(data)
        axios.post('https://serene-stream-43167.herokuapp.com/addorder', data)
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
                        <div>
                            {newservicesresult?.map(data => <Details
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
                        <input type="submit" value="Confirm" className="bg-info border-0" />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Purchase;