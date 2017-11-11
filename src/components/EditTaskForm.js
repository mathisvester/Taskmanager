import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditTaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = {task: this.props.task, title: this.props.task.name};
		this.onSubmit = this.onSubmit.bind(this);
		this.onTitleChange = this.onTitleChange.bind(this);
  }

	onTitleChange(e) {
		this.setState({title: e.target.value});
	}

	onSubmit(e) {
		e.preventDefault();
		let task = this.state.task;
		task.name = this.state.title;
		this.setState(task);

		this.props.onSave(this.props.index, this.state.task);
		//this.setState({title: ""});
	}

	render() {
		return(
			<div className="add-task-form">
				<form onSubmit={this.onSubmit}>
					<input type="text" value={this.state.title} onChange={this.onTitleChange} />
					<input type="submit" value="Save task" />
				</form>
			</div>
		);
	}
}

EditTaskForm.propTypes = {
	task: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	onEdit: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired,
}

export default EditTaskForm;
