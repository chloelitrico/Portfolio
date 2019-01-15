import React from "react";
import { Row, Col } from 'react-bootstrap';
import "./Skills.css";

class Skills extends React.Component {
	render() {
    	return (
			<div className="skills" id="skills">
				<h2>Development Skills</h2>
				<hr/>
				
						<i className="fab fa-6x fa-html5"></i>
						<i className="fab fa-6x fa-css3-alt"></i>
						<i className="fab fa-6x fa-js-square"></i>
						<div className="display"><br/></div>
						<i className="fab fa-6x fa-react"></i>
						<i className="fab fa-6x fa-wordpress"></i>
						<i className="fab fa-6x fa-python"></i>
					
			</div>
		);
	}
}

export default Skills;