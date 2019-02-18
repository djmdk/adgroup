import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Link, Router, Route, IndexRoute, hashHistory } from "react-router";

import { Form, Button, Badge } from 'react-bootstrap';

export default class PageLogin extends React.Component 
{
	render() 
	{
		return (
			<div class="row">
				<div class="jumbotron">
					<div class="container">
						<br />
						<h1><i>Exercise #2</i></h1>
						<p>"<i>Authorization and user management is not required (extra credit). As a result we expect to have that simple app (with all dependencies, even that added via composer if any) and database where the text data for the page will be stored.</i>"</p>
					</div>
				</div>
				<div class="container">
					<h2 class="form-signin-heading">Logowanie</h2>
					
					<form class="form-signin">
						<Form.Group controlId="formLogin">
							
							<Form.Control type="login" placeholder="Podaj login" required autofocus />
						</Form.Group>
						
						<Form.Group controlId="formPassword">
							
							<Form.Control type="password" placeholder="Podaj hasło" required />
						</Form.Group>
						
						<Button variant="primary" type="submit">
							Zaloguj
						</Button>
					</form>
					
				</div>
			</div>
		);
	}
}