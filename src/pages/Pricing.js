import React from 'react';
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import HeroImage from "../components/HeroImage/HeroImage";
import PricingCards from "../components/Pricings/Pricings";

const Pricing = () => {
    return (
        <div>
            <NavBar/>
            <HeroImage heading = 'PRICING' text = 'Choose your trip.' />
            <PricingCards/>
            <Footer/>
        </div>
    );
};

export default Pricing;