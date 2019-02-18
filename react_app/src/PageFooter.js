import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Link, Router, Route, IndexRoute, hashHistory } from "react-router";

export default class PageFooter extends React.Component 
{
	render() 
	{
		return (
		<div>
			<hr />
			<div class="container">
				<footer>
					<p>&copy; 2019 Paweł Drabowicz</p>
				</footer>
			</div>
		</div>
		);
	}
}