import React from "react";
/* import "../AboutMe/AboutMe.css"; */
function AboutMe() {
    return (


    
<div className="container">
	<div className="section" id="about-me">
		<div>
			<img src="../reactportfolioyaz/Images/yop.jpg" alt="Yazmin Tinoco"/>
			<br></br>
			<br></br>
			<ul>
				<li>Full Stack Web Developer</li>
				<li>Mathematic Engineer</li>
			</ul>
		</div>
        <br></br>
		<div className="a-m">
			<p>
				I am a software engineer that has skills in both the back-end of web applications and
				the front-end. My previous career as a math engineer brought me close to my true
				passion: coding. I wasn’t satisfied with only being involved in automating and
				data analyzing , and wanted a deeper involvement in building out applications.
				In the next phase of my career, I not only want to work on the technically challenging
				facets of the application, but I also want to use my design skills to make
				the application look beautiful too. I seek a role as a web developer at a company
				where I follow best practices like Test Driven Development and pair programming
				to help me learn and grow as a developer, and continue to master the craft.
			</p>
			<ul>
				<li><i className="fab fa-react"></i>React</li>
				<li><i className='fab fa-node-js'></i> Nodejs</li>
				<li><i className="fa fa-gear"></i> RESTful API</li>
				<li><i className="fa fa-database"></i> MySQL / MongoDB</li>
				<li><i className="fab fa-js"></i> JavaScript</li>
				<li><i className="fa fa-server"></i> Express.js (Server)</li>		
			</ul>
		</div>
	</div>
</div>   

)
}

export default AboutMe;