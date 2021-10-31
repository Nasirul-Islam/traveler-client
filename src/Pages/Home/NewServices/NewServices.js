import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useNewservices from '../../../hooks/useNewservices';
import NewSingleService from '../NewSingleService/NewSingleService';

const NewServices = () => {
    const { newservices } = useNewservices();
    // console.log(newservices);
    return (
        <Container className="py-3">
            <div className="">
                <h2>New Adventures We Have</h2>
            </div>
            <Row xs={1} md={3} className="g-4 py-3">
                {
                    newservices?.map(data => <NewSingleService
                        key={data._id}
                        data={data}
                    ></NewSingleService>)
                }
            </Row>
        </Container>
    );
};

export default NewServices;