import React from "react";
import "./Contact.css";


class Contact extends React.Component {
	render() {
    	return (
			<div className="contact">
				<div className="contact-text">
					<h1>Contact</h1>
				</div>
				<div class="form"> 
	  					<form id="contact" action="mailto: litrico.chloe@gmail.com" method="post">
							<input placeholder="Your name" type="text" required autofocus></input>
							<input placeholder="Your Email Address" type="email" required></input>
							<textarea placeholder="Type your Message Here...." required></textarea>
							<button name="submit" type="submit" id="contact-submit">Submit</button>
	  					</form>
					</div>
			</div>
		);
	}
}

export default Contact;