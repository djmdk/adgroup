import React from "react";
import { Link } from "react-router";
import "./PageLayout.css";

export default class PageLayout extends React.Component 
{
	render() 
	{
		return (
			<div className="App-body">
				<Link to="/" activeClassName="App-link">Home Page</Link>
				<Link to="/login" activeClassName="App-link">Login</Link> 
				{this.props.children}
				<br />
				<div id="containerAjax">
					No AJAX request..
				</div>
				<br />
				<div>
					<strong>Komendy NPM i użyte rozszerzenia:</strong><br />
					<br />
					npm start<br />
					npm install -g npm<br />
					npm i -g create-react-app<br />
					npm create-react-app react-app<br />
					cd react_app<br />
					npm start<br />
					<br />
					npm install --save-dev react-router<br />
					npm install --save react-router-dom<br />
					npm install react-router@3 --save<br />
					npm install jquery --save<br />
				</div>
				<br />
				<div>
					<strong>Kontakt:</strong><br />
					<br />
					Paweł Drabowicz<br />
					Telefon: 664-067-982<br />
					Email: djmdk@wp.pl<br />
				</div>
			</div>
		);
	}
}