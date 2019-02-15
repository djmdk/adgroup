import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

import PageLayout from "./PageLayout";
import PageHome from "./PageHome";
import PageLogin from "./PageLogin";

const app = document.getElementById('root');

ReactDOM.render
(
	<Router history={hashHistory}>
		<Route path="/" component={PageLayout}>
			<IndexRoute component={PageHome}></IndexRoute>
			<Route path="/login" component={PageLogin}></Route>
		</Route>
	</Router>,
	app
);

serviceWorker.unregister();