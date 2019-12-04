import React from "react";
import PropTypes from "prop-types";

const FramedOneColumn = ({content}) => {

	return (
		<section className="FramedOneColumn">
			<div
				className="container bg-img white flex flex-col jc-end"
				style={{backgroundImage: `url(${content.background_image.source_url})`}}
				dangerouslySetInnerHTML={{ __html: content.copy}}>
			</div>
		</section>
	)
}

FramedOneColumn.propTypes = {
	content: PropTypes.object.isRequired,
}

export default FramedOneColumn
