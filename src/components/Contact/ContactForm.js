import React , { Component } from "react";
import "../Contact/ContactForm.css"; 

const validEmailRegex = RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
const validateForm = (errors) => {
  let valid = true;
  /* console.log("object",Object.values(errors)); */
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false) && (val.length !== '')
	
  );
  return valid;
}

class ContactForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  fullname: null,
		  email: null,
		  message: null,
		  errors: {
			fullname: '',
			email: '',
			message: '',
		  }
		};
	  }

	handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		let errors = this.state.errors;

		switch (name) {
		  case 'fullname': 
			errors.fullname = 
			  (value.length < 3 && value.length >= 0)
				? 'Name must be 3 characters long!'
				: '';
			break;
		  case 'email': 
			errors.email = 
			  validEmailRegex.test(value)
				? ''
				: 'Email is not valid!';
			break;
		  case 'message': 
			errors.message = 
			  value.length < 8 
				? 'Message must be 8 characters long!'
				: '';
			break;
		  default:
			break;
		}
	  
		this.setState({errors, [name]: value});
	  }
	
	handleSubmit = (event) => {
		event.preventDefault();
		/* console.log("INVALID FORM ERROR",this.state.errors); */
		const email = event
		console.log("email",email)
		console.log(this)
		if(validateForm(this.state.errors)) {
			console.log(validateForm(this.state.errors));
			
				console.info('Valid Form')
				alert("Your message was send"); 
		  
		}else{
		  console.error('Invalid Form')
		  alert("Invalid Form")
		  console.log("event error",event)
		}
	  }

	/*   $('#idButton').on('click', function() {
		// The button is disabled but this will be executed.
	}); */
	  

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
											<form className="contact100-form validate-form name" name="theform" onSubmit={this.handleSubmit} noValidate>
												<div className="wrap-input100 validate-input bg1 rs1-alert-validate" data-validate="Please Type Your Name">
													<label htmlFor="name"><span className="label-input100">Name *</span></label>
													<input className="input100" type="text" name="fullname" placeholder="Enter Your Name" onClick={this.handleChange} onChange={this.handleChange}  noValidate></input>
													{errors.fullname.length > 0 &&  <span className='error'>{errors.fullname}</span>}
												</div>

												<div className="wrap-input100 validate-input bg1 rs1-alert-validate email" data-validate = "Enter Your Email (e@a.x)">
													<label htmlFor="email"><span className="label-input100">Email *</span></label>
													<input className="input100" type="email" name="email" placeholder="Enter Your Email" onClick={this.handleChange} onChange={this.handleChange} noValidate></input>
													{errors.email.length > 0 && <span className='error'>{errors.email}</span>}
												</div>

												<div className="wrap-input100 validate-input bg0 rs1-alert-validate message" data-validate = "Please Type Your Message">
													<label htmlFor="message"><span className="label-input100">Message</span></label>
													<textarea className="input100" type="message" name="message" placeholder="Your message here..." onClick={this.handleChange} onChange={this.handleChange} noValidate></textarea>
													{errors.message.length > 0 && <span className='error'>{errors.message}</span>}
												</div>

												<div className="container-contact100-form-btn">
													<button className="contact100-form-btn submit" disabled={!this.state.email}>
														<span>Submit</span>
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