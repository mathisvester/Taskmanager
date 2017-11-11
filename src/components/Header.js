import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';

class Header extends React.Component {
	render() {
		return(
			<div className="app__header">
				<h1 className="app__title">{this.props.salutation}<br /><small>{this.props.title}</small></h1>
				<Stats tasks={this.props.tasks} />
			</div>
		);
	}
}

Header.propTypes = {
	salutation: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	tasks: PropTypes.array.isRequired,
};

export default Header;
