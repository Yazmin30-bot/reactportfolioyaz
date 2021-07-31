import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";


function Home() {
    return(
        <div className="container-fluid">
            <Navbar/>
            <AboutMe/>
            <Footer/> 
        </div>
    )
}

export default Home;