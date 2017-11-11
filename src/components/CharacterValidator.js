import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CharacterValidator extends Component {
	render() {
		return(
			<span id="helpInputAddTask" className="form__control__helper">{this.props.leftCharacters} characters left</span>
		);
	}
}

CharacterValidator.propTypes = {
	leftCharacters: PropTypes.number.isRequired,
}

export default CharacterValidator;
