import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Task from './components/Task';
import AddTaskForm from './components/AddTaskForm';
import EditTaskForm from './components/EditTaskForm';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: this.props.initialTasks,
			completedTasks: this.props.intialCompletedTasks,
			removedTasks: this.props.intialRemovedTasks,
			nextId: this.props.nextId,
			taskEdit: {},
			displayEditTaskForm: this.props.displayEditTaskForm,
			taskIndex: 0,
		};
		//this.onTaskChange = this.onTaskChange.bind(this);
		this.onTaskEdit = this.onTaskEdit.bind(this);
		this.onTaskSave = this.onTaskSave.bind(this);
		this.onTaskRemove = this.onTaskRemove.bind(this);
		this.onTaskComplete = this.onTaskComplete.bind(this);
		this.onTaskAdd = this.onTaskAdd.bind(this);
  }

	/*onTaskChange(action, index) {
		console.log('onTaskChange', index, action);
	}*/

	onTaskEdit(index) {
		this.setState({taskEdit: this.state.tasks[index], displayEditTaskForm: true, taskIndex: index});
	}

	onTaskSave(index, savedTask) {
		let task = this.state.tasks[index];
		task = savedTask;
		this.setState(task);
		this.setState({displayEditTaskForm: false});

		localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
	}

	onTaskRemove(index) {
		let {tasks} = this.state;
		tasks[index].removed = true;
		this.state.removedTasks.push(tasks[index]);
		this.state.tasks.splice(index, 1);
		this.setState({tasks});

		localStorage.setItem('removedTasks', JSON.stringify(this.state.removedTasks));
		localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
	}

	onTaskComplete(index) {
		let {tasks} = this.state;
		tasks[index].done = true;
		this.state.completedTasks.push(tasks[index]);
		this.state.tasks.splice(index, 1);
		this.setState({tasks});

		localStorage.setItem('completedTasks', JSON.stringify(this.state.completedTasks));
		localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
	}

	onTaskAdd(title) {
		this.state.tasks.push({
			name: title,
			id: this.state.nextId,
			done: false,
			removed: false,
		});

		this.setState(this.state);

		this.setState((prevState) => {
			return {nextId: prevState.nextId + 1};
		});

		localStorage.setItem('nextId', JSON.stringify(this.state.nextId));
		localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
		//localStorage.clear();
	}

  render() {
		const displayEditTaskForm = this.state.displayEditTaskForm;

    return (
      <div className="app">
				<Header salutation={this.props.salutation} title={this.props.title} tasks={this.state.tasks} />
				<div className="app__content">
					<div className="panel">
						<ul className="list list--unstyled list--trenner">
							{this.state.tasks.map(function(task, index){
								return(
									<Task
										onTaskChange={(action) => this.onTaskChange(action, index)}
										onTaskEdit={() => this.onTaskEdit(index)}
										onTaskRemove={() => this.onTaskRemove(index)}
										onTaskComplete={() => this.onTaskComplete(index)}
										name={task.name}
										key={task.id} />
								);
							}.bind(this))}
						</ul>
					</div>
				</div>
				<div className="app__footer">
					{displayEditTaskForm ?
						<div className="panel">
							<span className="panel__title">Edit task</span>
							<EditTaskForm task={this.state.taskEdit} index={this.state.taskIndex} onSave={(index, savedTask) => this.onTaskSave(index, savedTask)} onEdit={this.onTaskEdit} maxTitleLength={this.props.maxTaskTitleLength}/>
						</div>
						: null
					}

					<div className="panel">
						<span className="panel__title">Add new task</span>
						<AddTaskForm onAdd={this.onTaskAdd} maxTitleLength={this.props.maxTaskTitleLength} />
					</div>
				</div>
			</div>
    );
  }
}

App.propTypes = {
	salutation: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	initialTasks: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		done: PropTypes.bool.isRequired,
		removed: PropTypes.bool.isRequired,
	})).isRequired,
	intialCompletedTasks: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		done: PropTypes.bool.isRequired,
		removed: PropTypes.bool.isRequired,
	})),
	intialRemovedTasks: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		done: PropTypes.bool.isRequired,
		removed: PropTypes.bool.isRequired,
	})),
	nextId: PropTypes.number.isRequired,
	displayEditTaskForm: PropTypes.bool.isRequired,
	maxTaskTitleLength: PropTypes.number.isRequired,
};

App.defaultProps = {
	salutation: "Hi!",
	title: "I'm your personal Task Manager.",
	displayEditTaskForm: false,
	maxTaskTitleLength: 80,
};

export default App;
