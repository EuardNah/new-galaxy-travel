import React from 'react';
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import HeroImage from "../components/HeroImage/HeroImage";
import TrainingSection from '../components/Training/Training'

const Training = () => {
    return (
        <div>
            <NavBar/>
            <HeroImage heading='TRAINING.' text = 'Pre-Flight & In-Flight Training.' />
            <TrainingSection/>
            <Footer/>
        </div>
    );
};

export default Training;