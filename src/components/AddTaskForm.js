import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = {title: ''};
		this.onSubmit = this.onSubmit.bind(this);
		this.onTitleChange = this.onTitleChange.bind(this);
  }

	onTitleChange(e) {
		this.setState({title: e.target.value});
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.onAdd(this.state.title);
		this.setState({title: ""});
	}

	render() {
		return(
			<div className="add-task-form">
				<form onSubmit={this.onSubmit}>
					<input type="text" value={this.state.title} onChange={this.onTitleChange} />
					<input type="submit" value="Add task" />
				</form>
			</div>
		);
	}
}

AddTaskForm.propTypes = {
	onAdd: PropTypes.func.isRequired,
}

export default AddTaskForm;
