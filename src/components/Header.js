import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
	render() {
		return(
			<div className="header">
				<h1>{this.props.title}</h1>
				<h2>Tasks to do:</h2>
			</div>
		);
	}
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
