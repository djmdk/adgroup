import React from "react";

export default class PageLogin extends React.Component 
{
	render() 
	{
		return (
			<div>
				<h1>LOGIN</h1>
				<div id="container">
					<span id="containerLogin" className="forText"><input type="text" placeholder="not implemented" /></span><br />
					<span id="containerPassword" className="forText"><input type="password" /></span><br />
					<span id="containerButton" className="forButton"><button id="Button" onClick={this.buttonClick}>SingIn</button></span><br />
				</div>
			</div>
		);
	}
}