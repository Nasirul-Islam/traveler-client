import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useOrder from '../../../hooks/useOrder';
import SingleOrder from '../SingleOrder/SingleOrder';

const MyOrder = () => {
    const { myorders } = useOrder();
    // console.log(myorders);
    return (
        <Container className="py-4">
            <h2>Total Purchase - {myorders.length}</h2>
            <Row xs={1} md={3} className="g-4 py-3">
                {
                    myorders?.map(data => <SingleOrder
                        key={data._id}
                        Id={data.purchaseId}
                    ></SingleOrder>)
                }
            </Row>
        </Container>
    );
};

export default MyOrder;