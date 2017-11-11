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
		this.onTaskChange = this.onTaskChange.bind(this);
		this.onTaskEdit = this.onTaskEdit.bind(this);
		this.onTaskSave = this.onTaskSave.bind(this);
		this.onTaskRemove = this.onTaskRemove.bind(this);
		this.onTaskComplete = this.onTaskComplete.bind(this);
		this.onTaskAdd = this.onTaskAdd.bind(this);
  }

	onTaskChange(action, index) {
		console.log('onTaskChange', index, action);
	}

	onTaskEdit(index) {
		this.setState({taskEdit: this.state.tasks[index], displayEditTaskForm: true, taskIndex: index});
	}

	onTaskSave(index, savedTask) {
		let task = this.state.tasks[index];
		task = savedTask;
		this.setState(task);
		this.setState({displayEditTaskForm: false});
	}

	onTaskRemove(index) {
		let {tasks} = this.state;
		tasks[index].removed = true;
		this.state.removedTasks.push(tasks[index]);
		this.state.tasks.splice(index, 1);
		this.setState({tasks});
	}

	onTaskComplete(index) {
		let {tasks} = this.state;
		tasks[index].done = true;
		this.state.completedTasks.push(tasks[index]);
		this.state.tasks.splice(index, 1);
		this.setState({tasks});
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
	}

  render() {
		const displayEditTaskForm = this.state.displayEditTaskForm;

    return (
      <div className="App">
				<Header title={this.props.title} description={this.props.description} tasks={this.state.tasks} />
				<ol className="tasks">
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
				</ol>
				<AddTaskForm onAdd={this.onTaskAdd} />
				{ displayEditTaskForm ? <EditTaskForm task={this.state.taskEdit} index={this.state.taskIndex} onSave={(index, savedTask) => this.onTaskSave(index, savedTask)} onEdit={this.onTaskEdit} /> : null}
      </div>
    );
  }
}

App.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
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
};

App.defaultProps = {
	title: "My first react app",
	description: "Tasks to do:",
	displayEditTaskForm: false,
};

export default App;
