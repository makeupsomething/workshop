import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { App as One } from './lessons/1';
import { App as Two } from './lessons/2';
import { App as Three } from './lessons/3';
import { App as Four } from './lessons/4';
import { App as Five } from './lessons/5';
import { App as FinishedApp } from './finished';

const Home = () => {
	return (
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/1">Lesson 1</Link>
			</li>
			<li>
				<Link to="/2">Lesson 2</Link>
			</li>
			<li>
				<Link to="/3">Lesson 3</Link>
			</li>
			<li>
				<Link to="/4">Lesson 4</Link>
			</li>
			<li>
				<Link to="/5">Lesson 5</Link>
			</li>
			<li>
				<Link to="/finished">Finished App</Link>
			</li>
		</ul>
	);
};

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/1">
					<One />
				</Route>
				<Route path="/2">
					<Two />
				</Route>
				<Route path="/3">
					<Three />
				</Route>
				<Route path="/4">
					<Four />
				</Route>
				<Route path="/5">
					<Five />
				</Route>
				<Route path="/finished">
					<FinishedApp />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
