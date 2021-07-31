import React from "react";
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";
import Info from "../components/info.json"; 
/* import "../pages/Portfolio.css"; */

function Portfolio() {
    return(
        <div>
            <Navbar
                about="/"/>
            <div className="section">
                <div className="album py-5 bg-light" id="portfolio">
                    <h1 className="display-4" id="disp4">Portfolio</h1>
                    <hr className="light" color="white"/>
                    <div className="row" id="linksPortfolio">
                        {Info.map(data => {
                            return <Card
                                    key={data.id}
                                    src={data.src}
                                    alt={data.alt}
                                    title={data.title}
                                    descr={data.descr}
                                    link={data.link}
                                    git={data.git}
                                    tools={data.tools}
                                    />
                        })}
                    </div>
                </div>
            </div>    
            <Footer/>

        </div>
    )
}

export default Portfolio