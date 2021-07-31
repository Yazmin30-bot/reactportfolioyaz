import React from "react";
import { Link } from "react-router-dom";
/*  import "../Navbar/Navbar.css";  */

function Navbar(props) {

    return(
        <div className="ftco-section">
		<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light fixed-top" id="ftco-navbar">
			<div className="container">
				{/* <a className="navbar-brand" href="#about-me">Yazmin <span>Tinoco</span></a> */}
                <Link className="navbar-brand" to="/reactportfolioyaz/">Yazmin <span>Tinoco</span></Link>
				<button className="navbar-toggler sticky-top" type="button" data-toggle="collapse" data-target="#ftco-nav"
					aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="fa fa-bars"></span> Menu
				</button>
				<div className="collapse navbar-collapse" id="ftco-nav">
					<ul className="navbar-nav m-auto">
						<li className="nav-item active">
                            {/* <a href="#about-me" class="nav-link">About</a> */}
                            <Link className="nav-link" to="/reactportfolioyaz/">About</Link>
                        </li>
						<li className="nav-item">
                           {/*  <a href="#portfolio" class="nav-link">Portfolio</a> */}
                            <Link className="nav-link" to="/reactportfolioyaz/portfolio">Portfolio</Link>
                        </li>
						<li className="nav-item">
                            {/* <a href="#contact" class="nav-link">Contact</a> */}
                            <Link className="nav-link" to="/reactportfolioyaz/contact">Contact</Link>
                        </li>
					     <li className="nav-item"><a href="../reactportfolioyaz/cv/Yazmin Tinoco CV.pdf" className="nav-link" target="blank">Resume</a></li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
    )
}

export default Navbar;