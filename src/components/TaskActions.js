import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskActions extends Component {
	render() {
		return(
			<div className="task-actions">
				<button className="task-action edit" onClick={this.props.onChange.bind(this, 'edit')}>Edit</button>
				<button className="task-action remove" onClick={this.props.onChange.bind(this, 'remove')}>remove</button>
				<button className="task-action complete" onClick={this.props.onChange.bind(this, 'complete')}>Complete</button>
			</div>
		);
	}
}

TaskActions.propTypes = {
	onChange: PropTypes.func.isRequired,
};

export default TaskActions;
