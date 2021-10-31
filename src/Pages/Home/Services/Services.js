import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useData from '../../../hooks/useData';
import SIngleService from '../SIngleService/SIngleService';

const Services = () => {
    const { datas } = useData();
    // console.log(datas.services);
    return (
        <Container className="py-5">
            <div className="py-3">
                <h2 className="fw-bolder mb-3">Most Popular Adventures We Have</h2>
                <p className="px-5">The term traveller refers to anyone who has a nomadic way of life. It can not only refer to Irish Travellers or Romany Gypsies, but also those who live on the road for economic reasons such as New Travellers or Showmen.</p>
            </div>
            <Row xs={1} md={3} className="g-4 py-3">
                {
                    datas?.services?.map(data => <SIngleService
                        key={data.id}
                        data={data}
                    ></SIngleService>)
                }
            </Row>
        </Container>
    );
};

export default Services;