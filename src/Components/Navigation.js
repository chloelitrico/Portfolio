import React from "react";
import { NavLink } from "react-router-dom";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import './Navigation.css';


const Navigation =() => {
	return (
	<Navbar collapseOnSelect fixedTop>
		<Navbar.Header>
    		<Navbar.Brand>
      			<NavLink to="/">CHLOÉ LITRICO</NavLink>
    		</Navbar.Brand>
	   		<Navbar.Toggle />
	  	</Navbar.Header>
	  	<Navbar.Collapse>
	    	<Nav pullRight>
	      		<NavItem eventKey={1}><NavLink to="/About">About</NavLink></NavItem>
	    		<NavItem eventKey={2}><NavLink to="/Work">Work</NavLink></NavItem>
	      		<NavItem eventKey={3}><NavLink to="/Contact">Contact</NavLink></NavItem>
	    	</Nav>
	  	</Navbar.Collapse>
	</Navbar>
	);
};

export default Navigation;