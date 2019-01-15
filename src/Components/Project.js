import React from "react";
import "./Project.css";


class Project extends React.Component {
  render() {
    return (
    	<a href={this.props.project.url} >
	    	<div className="project" style={{ backgroundImage: `url(${require("../Images/" + this.props.project.image)})` }}>
  		    <div className="project-text">
            <h1> {this.props.project.title} </h1>
  		    	<h2> {this.props.project.languages} </h2>
          </div>
	    	</div>
    	</a>
    );
  }
}

export default Project;