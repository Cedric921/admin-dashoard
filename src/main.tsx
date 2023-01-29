import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ContextProvider } from './contexts/ContextProvider';

const root = document.getElementById('root');
ReactDOM.render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>,
	root
);
