import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var TASKS = [
	{
		name: "My first Task",
		id: 1,
		done: false,
	},
	{
		name: "My second Task",
		id: 2,
		done: false,
	},
	{
		name: "My third Task",
		id: 3,
		done: false,
	},
	{
		name: "My fourth Task",
		id: 4,
		done: false,
	},
];

ReactDOM.render(<App initialTasks={TASKS} />, document.getElementById('root'));
registerServiceWorker();
