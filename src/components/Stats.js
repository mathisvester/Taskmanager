import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Stats extends Component {
	render() {
		var totalOpenTasks = this.props.tasks.reduce(function(total, task) {
					total ++;
					return total;
				}, 0),
				string = 'Why don\'t you get started?',
				noun = 'tasks';

		switch(totalOpenTasks) {
			case 0:
				string = 'Why don\'t you add one?';
				break;
			case 1 :
				noun = 'task';
				break;
			default:
		}

		return(
			<div className="app__stats">
				<p className="text--large">You have <strong>{totalOpenTasks}</strong> open {noun}. <span>{string}</span></p>
			</div>
		);
	}
}

Stats.propTypes = {
	tasks: PropTypes.array.isRequired,
};

export default Stats;
