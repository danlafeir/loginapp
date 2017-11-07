import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from './LoginPage'


const App = () => (
	<Router>
		<Route path="/" component={LoginPage}/>
		<Route path="/account" component={LoginPage}/>
	</Router>
);


ReactDOM.render(
	<App/>,
	document.getElementById('app')
)
