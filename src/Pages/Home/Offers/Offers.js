import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useData from '../../../hooks/useData';
import SingleOffer from '../SingleOffer/SingleOffer';

const Offers = () => {
    const { datas } = useData();
    // console.log(datas.offers);
    return (
        <Container className="py-5">
            <div className="py-3">
                <h2 className="fw-bolder mb-3">Special Offers & Discounts Weekly</h2>
            </div>
            <Row xs={1} md={3} className="g-4 py-3">
                {
                    datas?.offers?.map(data => <SingleOffer
                        key={data.id}
                        data={data}
                    ></SingleOffer>)
                }
            </Row>
        </Container>
    );
};

export default Offers;