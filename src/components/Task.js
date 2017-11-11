import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskActions from './TaskActions';

class Task extends Component {
	render() {
		return(
			<li className="task">
				<span className="task-title">{this.props.name}</span>
				<TaskActions onChange={this.props.onTaskChange} onEdit={this.props.onTaskEdit} onRemove={this.props.onTaskRemove} onComplete={this.props.onTaskComplete}/>
			</li>
		);
	}
}

Task.propTypes = {
	name: PropTypes.string.isRequired,
	onTaskChange: PropTypes.func.isRequired,
	onTaskEdit: PropTypes.func.isRequired,
	onTaskRemove: PropTypes.func.isRequired,
	onTaskComplete: PropTypes.func.isRequired,
};

export default Task;
