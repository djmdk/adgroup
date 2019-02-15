import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

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
			<div>
				<h1>WELCOME</h1>
				<div id="container">
					<span id="containerEditor" className="forText"></span>
					<span id="containerButton" className="forButton"><button id="Button" onClick={this.buttonClick}>Edit Me</button></span>
				</div>
			</div>
		);
	}
}