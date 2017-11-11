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
		removed: false,
	},
	{
		name: "My second Task",
		id: 2,
		done: false,
		removed: false,
	},
	{
		name: "My third Task",
		id: 3,
		done: false,
		removed: false,
	},
	{
		name: "My fourth Task",
		id: 4,
		done: false,
		removed: false,
	},
];
var COMPLETEDTASKS = [
	{
		name: "Completed task",
		id: 1,
		done: true,
		removed: false,
	}
];
var REMOVEDTASKS = [
	{
		name: "Removed task",
		id: 1,
		done: false,
		removed: true,
	}
];
var nextId = 5;

ReactDOM.render(<App initialTasks={TASKS} intialCompletedTasks={COMPLETEDTASKS} intialRemovedTasks={REMOVEDTASKS} nextId={nextId} />, document.getElementById('root'));
registerServiceWorker();
