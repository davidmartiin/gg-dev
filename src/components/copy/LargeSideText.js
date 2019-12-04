import React from "react";
import PropTypes from "prop-types";

const LargeSideText = ({ classes, text, leftOrRight }) => {


	return (
		<p className={`h1 primary-font side-text brown ${leftOrRight} ${classes}`}>{text}</p>
	)
}

LargeSideText.propTypes = {
	text: PropTypes.string,
	leftOrRight: PropTypes.string,
}

export default LargeSideText
