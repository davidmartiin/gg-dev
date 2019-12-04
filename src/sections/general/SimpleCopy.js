import React from "react";
import PropTypes from "prop-types";

const SimpleCopy = ({ content, sectionId }) => {
	const headingOnly = content.heading !== '' && content.copy === '' ? ' heading-only' : '';
	return (
		<section className={`SimpleCopy${headingOnly}`} id={ sectionId }>
			{ content.heading !== '' &&
				<h2 className="secondary" dangerouslySetInnerHTML={{ __html: content.heading }}></h2>
			}
			{ content.copy !== '' &&
				<p className="brown" dangerouslySetInnerHTML={{ __html: content.copy }}></p>
			}
		</section>
	)
}

SimpleCopy.propTypes = {
	content: PropTypes.object.isRequired,
	sectionId: PropTypes.string,
}

export default SimpleCopy
