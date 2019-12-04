import React from "react";
import PropTypes from "prop-types";

//CSS for component is in styles/sections/general/SimpleCopy.scss
const EventContent = ({ content, sectionId }) => {
	const headingOnly = content.heading !== '' && content.copy === '' ? ' heading-only' : '';
	return (
		<section className={`SimpleCopy Events${headingOnly}`} id={ sectionId }>
			{ content.heading !== '' &&
				<h2 className="secondary">{content.heading}</h2>
			}
			{ content.copy !== '' &&
				<div className="brown" dangerouslySetInnerHTML={{ __html: content.copy }} />
			}
			<p className={`brown`}><strong>When:</strong>{`${content.start_date} ${content.start_time}`}</p>
			<p className={`brown`}><strong>Directions:</strong>{`${content.address} | `}<a href={content.direction_link} target={`_blank`} rel={`noreferrer nofollow`}>get directions</a></p>
		</section>
	)
}

EventContent.propTypes = {
	content: PropTypes.object.isRequired,
	sectionId: PropTypes.string,
}

export default EventContent
