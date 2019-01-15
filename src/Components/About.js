import React from "react";
import Intro from "./AboutComponents/Intro";
import Skills from "./AboutComponents/Skills";
import Education from "./AboutComponents/Education";
import CV from "./AboutComponents/CV";
import "./About.css";

class About extends React.Component {
	render() {
    	return (
			<div className="about">
				
				<Intro />
				<Skills />
				<Education />
				<CV />
			</div>
		);
	}
}

export default About;