import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CharacterValidator from './CharacterValidator';

class AddTaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = {title: '', leftCharacters: this.props.maxTitleLength};
		this.onSubmit = this.onSubmit.bind(this);
		this.onTitleChange = this.onTitleChange.bind(this);
  }

	onTitleChange(e) {
		this.setState({title: e.target.value, leftCharacters: this.props.maxTitleLength - e.target.value.length});
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.onAdd(this.state.title);
		this.setState({title: "", leftCharacters: this.props.maxTitleLength});
	}

	render() {
		return(
			<form onSubmit={this.onSubmit} className="form">
				<div className="form__group">
					<div className="input-group">
						<input className="form__control form__control--xs" type="text" value={this.state.title} onChange={this.onTitleChange} placeholder="Enter a new title..." maxLength={this.props.maxTitleLength} />
						<span className="input-group__btn">
							<input className="btn btn--xs btn--primary" type="submit" value="Add task" />
						</span>
					</div>
					<CharacterValidator leftCharacters={this.state.leftCharacters} />
				</div>
			</form>
		);
	}
}

AddTaskForm.propTypes = {
	onAdd: PropTypes.func.isRequired,
	maxTitleLength: PropTypes.number.isRequired,
}

export default AddTaskForm;
