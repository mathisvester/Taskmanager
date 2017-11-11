import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var storedOpenTasks = JSON.parse(localStorage.getItem('tasks')),
		storedCompletedTasks = JSON.parse(localStorage.getItem('completedTasks')),
		storedRemovedTasks = JSON.parse(localStorage.getItem('removedTasks')),
		storedNextId = JSON.parse(localStorage.getItem('nextId')),
		TASKS = ((storedOpenTasks) ? storedOpenTasks : []),
		COMPLETEDTASKS = ((storedCompletedTasks) ? storedCompletedTasks : []),
		REMOVEDTASKS = ((storedRemovedTasks) ? storedRemovedTasks : []),
		NEXTID = ((storedNextId) ? storedNextId + 1 : 0);

ReactDOM.render(<App initialTasks={TASKS} intialCompletedTasks={COMPLETEDTASKS} intialRemovedTasks={REMOVEDTASKS} nextId={NEXTID} />, document.getElementById('root'));
registerServiceWorker();
