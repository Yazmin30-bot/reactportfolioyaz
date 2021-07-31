import React , { Component } from "react";
/* import "../Contact/ContactForm.css"; */



class ContactForm extends Component {

	s

	render () {
		const {errors} = this.state;

    	return (
        	<div className="ftco-section section" id="contact">
				<div className="row justify-content-center">
					<div className="col-lg-10 col-md-12">
						
							<div className="row justify-content-center">
								<div className="col-lg-8 mb-5">
									<h3 className="mb-4 text-center">Get in touch with us</h3>
									<div className="row">
										
										<div className="col-md-6">
											<div className="dbox w-100 text-center">
												<div className="icon d-flex align-items-center justify-content-center">
													<span className="fa fa-map-marker"></span>
												</div>
												<div className="text">
													<p><span>Address:</span> Mexico City</p>
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="dbox w-100 text-center">
												<div className="icon d-flex align-items-center justify-content-center">
													<span className="fa fa-paper-plane"></span>
												</div>
												<div className="text">
													<p><span>Email:</span> <a
															href="mailto:ytip30@gmail.com">ytip30@gmail.com</a></p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-8 mb-5">
									<div >
										<div >
											<form className="contact100-form validate-form name" onSubmit={this.handleSubmit} noValidate>
												<div className="wrap-input100 validate-input bg1 rs1-alert-validate" data-validate="Please Type Your Name">
													<label htmlFor="name"><span className="label-input100">Name *</span></label>
													<input className="input100" type="text" name="fullname" placeholder="Enter Your Name" onChange={this.handleChange} noValidate></input>
													{errors.fullname.length > 0 &&  <span className='error'>{errors.fullname}</span>}
												</div>

												<div className="wrap-input100 validate-input bg1 rs1-alert-validate email" data-validate = "Enter Your Email (e@a.x)">
													<label htmlFor="email"><span className="label-input100">Email *</span></label>
													<input className="input100" type="email" name="email" placeholder="Enter Your Email" onChange={this.handleChange} noValidate></input>
													{errors.email.length > 0 && <span className='error'>{errors.email}</span>}
												</div>

												<div className="wrap-input100 validate-input bg0 rs1-alert-validate message" data-validate = "Please Type Your Message">
													<label htmlFor="message"><span className="label-input100">Message</span></label>
													<textarea className="input100" type="message" name="message" placeholder="Your message here..." onChange={this.handleChange} noValidate></textarea>
													{errors.message.length > 0 && <span className='error'>{errors.message}</span>}
												</div>

												<div className="container-contact100-form-btn">
													<button className="contact100-form-btn">
														<span>Submit<i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i></span>
													</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						
					</div>
				</div>
		</div>
    	)
	}
}

export default ContactForm;