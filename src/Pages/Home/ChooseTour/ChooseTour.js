import React from 'react';
import { Container } from 'react-bootstrap';

const ChooseTour = () => {
    return (
        <Container>
            <div className="py-5">
                <h2 className="fw-bolder mb-3">Choose Tour</h2>
                <p className="px-5">Find your next travel adventure and make it memorable. Explore wildlife, enjoy seaside or book a cruise tour.
                    <br />Check out our popular destinations.</p>
            </div>
            <div className="d-flex justify-content-evenly">
                <div className="">
                    <img className="img-fluid" src="https://png.pngitem.com/pimgs/s/184-1849803_transparent-airport-icon-png-plane-icon-black-and.png" alt="" />
                    <p>Self-Guided</p>
                </div>
                <div className="">
                    <img className="img-fluid" src="https://png.pngitem.com/pimgs/s/184-1849803_transparent-airport-icon-png-plane-icon-black-and.png" alt="" />
                    <p>Cruises</p>
                </div>
                <div className="">
                    <img className="img-fluid" src="https://png.pngitem.com/pimgs/s/184-1849803_transparent-airport-icon-png-plane-icon-black-and.png" alt="" />
                    <p>Adventure</p>
                </div>
                <div className="">
                    <img className="img-fluid" src="https://png.pngitem.com/pimgs/s/184-1849803_transparent-airport-icon-png-plane-icon-black-and.png" alt="" />
                    <p>Wildlife</p>
                </div>
                <div className="">
                    <img className="img-fluid" src="https://png.pngitem.com/pimgs/s/184-1849803_transparent-airport-icon-png-plane-icon-black-and.png" alt="" />
                    <p>Seaside</p>
                </div>
            </div>
        </Container>
    );
};

export default ChooseTour;