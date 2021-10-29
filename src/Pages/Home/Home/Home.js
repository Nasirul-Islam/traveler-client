import React from 'react';
import './Home.css';
// import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import ChooseTour from '../ChooseTour/ChooseTour';
import Offers from '../Offers/Offers';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className="home">
            <Banner></Banner>
            <Services></Services>
            <ChooseTour></ChooseTour>
            <Offers></Offers>
        </div>
    );
};

export default Home;