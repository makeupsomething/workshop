import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle` 
	body {
		margin: 0;
 		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background: black;
		font-family: 'IBM Plex Sans', sans-serif;
	}

	html,
	body,
	#root {
		height: 100vh;
		width: 100vw;
		overflow-x: hidden;
	}
`;

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);
