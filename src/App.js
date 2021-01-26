import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { App as One } from './lessons/1';
import { App as Two } from './lessons/2';
import { App as Three } from './lessons/3';
import { App as Four } from './lessons/4';
import { App as Five } from './lessons/5';
import { App as FinishedApp } from './finished';
import styled from 'styled-components';

const HomeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem;
`;

const LessonList = styled.ul`
	padding: 0px;
	list-style: none;

	li::before {
		content: '🚀';
		display: inline-block;
		margin-right: 0.2rem;
	}

	li {
		margin-top: 8px;
		a {
			color: white;
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}
`;

const Home = () => {
	return (
		<HomeWrapper>
			<h1 style={{ color: 'white' }}>Welcome!</h1>
			<p style={{ color: 'white' }}>
				Click on a lesson or the finished app to see what we will be
				building.
			</p>
			<p style={{ color: 'white' }}>
				If you cannot see a map when you click a link make sure you have
				the Mapbox enviroment variable set in your <code>.env</code>{' '}
				file.
			</p>
			<LessonList>
				<li>
					<Link to="/">Home (this page)</Link>
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
			</LessonList>
		</HomeWrapper>
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
