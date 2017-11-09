import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskActions from './TaskActions';

class Task extends Component {
	render() {
		if(!this.props.done) {
			return(
				<li className="task">
					<span className="task-title">{this.props.name}</span>
					<TaskActions onChange={this.props.onTaskChange} />
				</li>
			);
		} else {
			return null;
		}
	}
}

Task.propTypes = {
	name: PropTypes.string.isRequired,
	done: PropTypes.bool.isRequired,
	onTaskChange: PropTypes.func.isRequired,
};

export default Task;
