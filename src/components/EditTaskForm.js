import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CharacterValidator from './CharacterValidator';

class EditTaskForm extends Component {
	constructor(props) {
		super(props);
		var currentLeftCharacters = this.props.maxTitleLength - this.props.task.name.length;
		this.state = {task: this.props.task, title: this.props.task.name, leftCharacters: currentLeftCharacters};
		this.onSubmit = this.onSubmit.bind(this);
		this.onTitleChange = this.onTitleChange.bind(this);
  }

	onTitleChange(e) {
		this.setState({title: e.target.value, leftCharacters: this.props.maxTitleLength - e.target.value.length});
	}

	onSubmit(e) {
		e.preventDefault();
		let task = this.state.task;
		task.name = this.state.title;
		this.setState(task);

		this.props.onSave(this.props.index, this.state.task);
	}

	render() {
		return(
			<form onSubmit={this.onSubmit} className="form">
				<div className="form__group">
					<div className="input-group">
						<input className="form__control form__control--xs" autoFocus type="text" value={this.state.title} onChange={this.onTitleChange} placeholder="Enter a new title" maxLength={this.props.maxTitleLength} />
						<span className="input-group__btn">
							<input className="btn btn--xs btn--primary" type="submit" value="Save task" />
						</span>
					</div>
					<CharacterValidator leftCharacters={this.state.leftCharacters} />
				</div>
			</form>
		);
	}
}

EditTaskForm.propTypes = {
	task: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	onEdit: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired,
	maxTitleLength: PropTypes.number.isRequired,
}

export default EditTaskForm;
