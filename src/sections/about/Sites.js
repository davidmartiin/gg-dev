import React, {Component} from "react";
import {graphql, useStaticQuery} from "gatsby";
import PropTypes from "prop-types";

class Sites extends Component {
	constructor( props ){

		super(props);
		this.state = {

		};
	}

	render(){

		return (
			<section className="Sites">

			</section>
		)
	}
}

Sites.propTypes = {
	content: PropTypes.object.isRequired,
};

export default Sites;
