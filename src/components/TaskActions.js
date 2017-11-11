import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskActions extends Component {
	render() {
		return(
			<div className="task-actions">
				<button className="task-action edit" onClick={this.props.onEdit}>Edit</button>
				<button className="task-action remove" onClick={this.props.onRemove}>Remove</button>
				<button className="task-action complete" onClick={this.props.onComplete}>Complete</button>
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
