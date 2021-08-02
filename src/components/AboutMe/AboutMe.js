import React from "react";
/* import "../AboutMe/AboutMe.css"; */
function AboutMe() {
    return (


    
<div className="container">
	<div className="section" id="about-me">
		<div>
			<img src="../reactportfolioyaz/images/yop.jpg" alt="Yazmin Tinoco"/>
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

			Full stack web developer with math engineer degree at National Polytechnic Institute. 
			Recently earned a certificate in full stack development from Tecnológico de Monterrey. 
			Fascinated by computer science fundamentals and breaking down a problem piece-by-piece 
			to find a solution. My technical aptitude in cutting-edge web technologies, combined with 
			adept problem solving abilities and determination, make me a strong addition to any
			engineering team. With each project, my aim is to best engage my audience for an impactful 
			user experience. I applied aspects of UX and agile development in a recent project. 
			I worked on a team of four to develop a single-page app that helps students and professors
			to control their assignments, time and take overall control of their tasks. I’m excited to 
			leverage my skills as part of a fast-paced, quality-driven team to build better experiences 
			on the web, follow best practices like Test Driven Development and pair programming to help 
			me learn and grow as a developer.


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