import React from "react";
import PropTypes from "prop-types";
import LargeSideText from "../../components/copy/LargeSideText";

const SimpleTwoColumn = ({ content, leftOrRight}) => {

	return (
		<section className="SimpleTwoColumn flex">
			<div className="col-50 bg-img" style={{backgroundImage: `url(${content.background_image.source_url})`}}>
			</div>
			<div className="col-50 flex ai-center">
				<LargeSideText text={content.side_text} leftOrRight={leftOrRight}/>
				<div className="copy-container brown" dangerouslySetInnerHTML={{ __html: content.copy }}></div>
			</div>
		</section>
	)
}

SimpleTwoColumn.propTypes = {
	content: PropTypes.object.isRequired,
	leftOrRight: PropTypes.string,
}

export default SimpleTwoColumn
