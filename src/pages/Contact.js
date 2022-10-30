import React from 'react';
import NavBar from "../components/NavBar/NavBar";
import HeroImage from "../components/HeroImage/HeroImage";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";

const Contact = () => {
    return (
        <div>
            <NavBar/>
            <HeroImage heading = 'CONTACT.' text='Contact GALAXY TRAVEL' />
            <Form/>
            <Footer/>
        </div>
    );
};

export default Contact;