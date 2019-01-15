import React from "react";
import './Home.css';


class Home extends React.Component {
	render() {
    	return (
			<div className="home-background" >
				<div className="home-text">
					<h1>Chloé Litrico</h1>
					<h2> I'm a Full Stack Web Developer </h2>
				</div>
				<a className="arrow" href="#footer">
					<span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
				</a>
			</div>
		);
	}
}

export default Home;