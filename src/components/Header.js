import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';

class Header extends React.Component {
	render() {
		return(
			<div className="header">
				<h1>{this.props.title}</h1>
				<Stats tasks={this.props.tasks} />
				<h2>Tasks to do:</h2>
			</div>
		);
	}
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
	tasks: PropTypes.array.isRequired,
};

export default Header;
