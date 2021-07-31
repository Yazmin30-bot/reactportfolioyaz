import React from "react";
function Footer(props) {
    return (

 <div className="fixed-bottom">  
    <footer>
		 <div className="wrap"> 
			<div className="container ">
					<div className="col d-flex justify-content-center">
						<div className="social-media">
							<p className="mb-0 d-flex">

								<a href="https://github.com/Yazmin30-bot" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center"><span
										className="fab fa-github fa-2x"><i className="sr-only">Github</i></span></a> 
                                       
								<a href="https://www.linkedin.com/in/ytp30/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center"><span
										className="fab fa-linkedin fa-2x"><i className="sr-only">Linkedin</i></span></a> 
       
								<a href="https://www.linkedin.com/in/ytp30/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center"><span
										className="fab fa-instagram fa-2x"><i className="sr-only">Instagram</i></span></a>
                                     
								<a href="https://www.linkedin.com/in/ytp30/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center"><span
										className="fab fa-dribbble fa-2x"><i className="sr-only">Dribbble</i></span></a> 
                                    
							</p>
						</div>
					</div>
			
			</div>
		 </div> 
         <div className="col-12 ">
            <hr className="light" color="gray"/>
                <h3 className="align-items-center justify-content-center" id="CopyR">&copy; Yazmin Tinoco Perez</h3>
        </div>
	</footer>
    </div> 
    
    )
}

export default Footer;