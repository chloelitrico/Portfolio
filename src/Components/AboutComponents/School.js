import React from "react";

class School extends React.Component {
	render() {
    	return (
			<div className="timeline">
                <div className="timeline-icon "></div>
                <div className={`timeline-content ${this.props.position}`}>
                	<span className="date">{this.props.startDate} - {this.props.endDate}</span>
                	<h3 className="title">{this.props.name}</h3>
                	<p className="description">
                	<span className="location"><span className="glyphicon glyphicon-map-marker"></span> {this.props.location} </span> <br/>
                    {this.props.degree}
                    </p>
                </div>
            </div>
		);
	}
}

export default School;