import React from "react";
import { Link } from "react-router";


export default class PageLayout extends React.Component 
{
	render() 
	{
		return (
			<div class="jumbotron">
				<div class="container">
					<br />
					<h1><i>Exercise #1</i></h1>
					<p>"<i>This exercise is designed to show us how you work and your code practices, which will show us how you think about things as well as giving us an example of your code, and will give you a chance to see how it is to work with us.</i>"</p>
					<p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
				</div>
			</div>
			<div class="container">
				<div class="row">
					<div  id="container_content" class="col-md-16">
						
					</div>
				</div>
				<hr />
				<footer>
					<p>&copy; 2016 Company, Inc.</p>
				</footer>
			</div>
		);
	}
}