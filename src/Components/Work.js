import React from "react";
import WorkData from "./Data.json";
import Project from "./Project.js"
import "./Work.css";


class Work extends React.Component {
	render() {
    	return (
			<div className="work">
				<h1 className="work-title">MY WORK</h1>
				<div className="projects">
					
					{WorkData.projects.map((project, key) =>
    					<Project project={project} key={project.id} />
					)}

				</div>
			</div>
		);
	}
}

export default Work;