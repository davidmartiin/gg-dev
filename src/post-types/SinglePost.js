import React from "react";
import PropTypes from "prop-types";

const SinglePost = ({content}) => {

	return (
		<section className={`SinglePost brown`} dangerouslySetInnerHTML={{ __html: content.content }}>
		</section>
	);
}

export default SinglePost;
