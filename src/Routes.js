import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";

export default function Routes() {
  return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/about" component={About}/>
			<Route exact path="/portfolio" component={Portfolio}/>
			<Route exact path="/resume" component={Resume}/>
			<Route exact path="/contact" component={Contact}/>
		</Switch>
	);
}