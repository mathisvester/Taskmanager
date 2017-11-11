import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Stats extends Component {
	render() {
		var totalOpenTasks = this.props.tasks.reduce(function(total, task) {
			(!task.done && !task.removed) ? total++ : total += 0;
			return total;
		}, 0);

		return(
			<div className="stats">
				<p>You have {totalOpenTasks} open tasks.</p>
			</div>
		);
	}
}

Stats.propTypes = {
	tasks: PropTypes.array.isRequired,
};

export default Stats;
