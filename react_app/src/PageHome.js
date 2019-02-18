import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Link, Router, Route, IndexRoute, hashHistory } from "react-router";
import $ from "jquery";
import { Form, Button, Badge } from 'react-bootstrap';

var element_text_edit = false;
var element_text_html = 'Edit Me';

export default class PageHome extends React.Component 
{
	constructor(props) 
	{
		super(props); 
		
		this.state = 
		{
			element_text_edit: false, 
			element_text_html: 'Edit Me'
		};
	}

	buttonClick()
	{	
		if(element_text_edit == true)
		{
			element_text_edit = false; 
			element_text_html = "Edit Me"; 
			
			var url = 'insertToDatabase.php?content=' + document.getElementById('Input').value;
			
			$("#containerAjax").load
			(
				url
				, 
				function(response, status, xhr)
				{
					switch(xhr.status)
					{
						case 0:		{document.getElementById('containerAjax').innerHTML = 'Send data..'; break;}
						case 200:	{break;}
						case 404:	{break;}
						default:	{}
					}
				}
			);
			
			ReactDOM.render('', document.getElementById('containerEditor'));  
		}
		else
		{
			element_text_edit = true;
			element_text_html = "Save Me";
			
			var P = React.createElement("input", {id: 'Input', type: 'text', 'data-idx': 'XYZ'});
			ReactDOM.render(P, document.getElementById('containerEditor')); 
		}
		
		
		document.getElementById('Button').innerHTML = element_text_html;
	}
	
	render() 
	{
		return (
			<div class="row">
				<div class="jumbotron">
					<div class="container">
						<br />
						<h1><i>Exercise #1</i></h1>
						<p>"<i>When clicking on a text element, the user must be able to edit it. The appearance of the page before clicking on the text, and after saving it, should be identical to what the pagelooks like originally.</i>"</p>
					</div>
				</div>
				<div class="container">
					<h2 class="form-signin-heading">Strona główna</h2>
					<div id="container_content" class="col-md-16">	
						<p>When clicking on a text element, the user must be able to edit it. The appearance of the page before clicking on the text, and after saving it, should be identical to what the pagelooks like originally. Backend is your choice - framework or custom - use whatever framework you like, or none, as long as it's PHP. It must supply a clear RESTful JSON API for the front end app.</p>
						<span id="containerEditor" className="forText"></span>
						<span id="containerButton" className="forButton">
							<Button id="Button" variant="primary" type="submit" onClick={this.buttonClick}>Edit Me</Button>
						</span><br />
						<br />
					</div>
				</div>
			</div>
		);
	}
}