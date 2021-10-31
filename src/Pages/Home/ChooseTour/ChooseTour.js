import React from 'react';
import './ChooseTour.css';
import { Container, Row } from 'react-bootstrap';

const ChooseTour = () => {
    return (
        <div className="chooseTour">
            <Container>
                <div className="py-2">
                    <h2 className="fw-bolder mb-3">Choose Tour</h2>
                    <p className="px-2">Find your next travel adventure and make it memorable. Explore wildlife, enjoy seaside or book a cruise tour.
                        <br />Check out our popular destinations.</p>
                </div>
                <div className="d-flex flex-wrap justify-content-evenly tours">
                    <div className="">
                        <img className="img-fluid" src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-1-hover.png" alt="" />
                        <p>Self-Guided</p>
                    </div>
                    <div className="">
                        <img className="img-fluid" src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-2-hover.png" alt="" />
                        <p>Cruises</p>
                    </div>
                    <div className="">
                        <img className="img-fluid" src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-3-hover.png" alt="" />
                        <p>Adventure</p>
                    </div>
                    <div className="">
                        <img className="img-fluid" src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-4-hover.png" alt="" />
                        <p>Wildlife</p>
                    </div>
                    <div className="">
                        <img className="img-fluid" src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-5-hover.png" alt="" />
                        <p>Seaside</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ChooseTour;