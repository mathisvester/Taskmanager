import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskActions extends Component {
	render() {
		return(
			<div className="list__actions btn-group">
				<button className="list__btn btn btn--info btn--xs btn--edit" onClick={this.props.onEdit}>Edit</button>
				<button className="list__btn btn btn--warning btn--xs btn--remove" onClick={this.props.onRemove}>Remove</button>
				<button className="list__btn btn btn--success btn--xs btn--complete" onClick={this.props.onComplete}>Complete</button>
			</div>
		);
	}
}

TaskActions.propTypes = {
	onChange: PropTypes.func.isRequired,
	onEdit: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
	onComplete: PropTypes.func.isRequired,
};

export default TaskActions;
