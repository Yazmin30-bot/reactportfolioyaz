import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/Contact/ContactForm"; 

function Contact() {
    return (
        <div className="container-fluid">
        <Navbar
            about="/reactportfolioyaz/"/>
        <ContactForm/> 
        <Footer/>
        </div>
    )
}

export default Contact;