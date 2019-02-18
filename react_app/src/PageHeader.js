import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Link, Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";

export default class PageHeader extends React.Component 
{
	render() 
	{
		return (
			<div>
				<nav class="navbar navbar-inverse navbar-fixed-top">
					<div class="container">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
							<a class="navbar-brand" href="/">AdGroup</a>
						</div>
						<div id="navbar" class="navbar-collapse collapse">
							<ul class="nav navbar-nav">
								<li class="active"><a href="/" ClassName="App-link">Strona główna</a></li>
								<li><a href="/login" ClassName="App-link">Logowanie</a></li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}