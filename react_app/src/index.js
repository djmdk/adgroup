import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Link, Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";

//import * as serviceWorker from "./serviceWorker";
//import "./index.css";\
//import "bootstrap/dist/css/bootstrap.min.css";

import PageHeader from "./PageHeader";
import PageHome from "./PageHome";
import PageLogin from "./PageLogin";
import PageFooter from "./PageFooter";

const app = document.getElementById('root');


ReactDOM.render
(
	<span>
		<PageHeader />
		<Router history={browserHistory}>
			<Route path="/">
				<IndexRoute			component={PageHome}></IndexRoute>
				<Route path="login"	component={PageLogin}></Route>
			</Route>
		</Router>
		<PageFooter />
	</span>,
	app
);


/*
ReactDOM.run
(
	routes, function(Handler, state)
	{
		var params = state.params;
		
		React.render(<Handler params={params}/>, app_content);
	}
);
*/

//serviceWorker.unregister();