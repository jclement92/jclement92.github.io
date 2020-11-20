import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

export default function Routes() {
  return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/projects" component={Projects}/>
		</Switch>
	);
}