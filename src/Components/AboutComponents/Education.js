import React from "react";
import "./Education.css";
import EducationData from "../Data.json";
import School from './School.js';

class Education extends React.Component {
	render() {
    	return (
			<div className="education">
				<h2>Education</h2>
				<hr/>
				<div className="main-timeline">

					<School name={EducationData.education.oc.name} 
								degree={EducationData.education.oc.degree}
								location={EducationData.education.oc.location}
								startDate={EducationData.education.oc.startDate}
								endDate={EducationData.education.oc.endDate}/>

				    <School name={EducationData.education.mcgill.name} 
								degree={EducationData.education.mcgill.degree}
								location={EducationData.education.mcgill.location}
								startDate={EducationData.education.mcgill.startDate}
								endDate={EducationData.education.mcgill.endDate}
								position="right"/>

					<School name={EducationData.education.isg.name} 
								degree={EducationData.education.isg.degree}
								location={EducationData.education.isg.location}
								startDate={EducationData.education.isg.startDate}
								endDate={EducationData.education.isg.endDate}/>
				</div>
				       
			</div>
		);
	}
}

export default Education;