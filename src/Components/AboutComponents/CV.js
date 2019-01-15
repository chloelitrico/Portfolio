import React from "react";
import './CV.css';
import cv from "../../Files/cv.pdf";

class CV extends React.Component {
	render() {
    	return (
			<div className="cv">
				<h2>CV</h2>
				<hr/>
				<a href={cv}> <span className="glyphicon glyphicon-download"></span> Download CV</a>
			</div>
		);
	}
}

export default CV;