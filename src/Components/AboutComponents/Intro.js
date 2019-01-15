import React from "react";
import "./Intro.css";
import { Col } from 'react-bootstrap';

class Intro extends React.Component {
	render() {
    	return (
			<div className="intro">
				<div className="intro-text">
					<h2> Hello, I'm Chloe.
					<br/>A Full Stack Web Developer from Paris, France</h2>
					<h3>I create fast, responsive, and dynamic websites</h3>
				</div>
				<Col xs="12" className="arrow-down">
					<a className="arrow" href="#skills">
						<span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
					</a>
				</Col>
			</div>
		);
	}
}

export default Intro;