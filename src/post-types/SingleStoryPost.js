import React from "react";

const SingleStoryPost = ({content, sectionId}) => {
	console.log(content);
	return(
		<section className={`SingleStoryPost`} id={`${sectionId}`}>
			<p className={`h1 brown primary-font`}>Impact</p>
			<div className={`impact brown`} dangerouslySetInnerHTML={{ __html: content.acf.impact }} />
			<p className={`h1 primary primary-font separator`}>{content.acf.separator_heading}</p>
			<p className={`h1 brown primary-font`}>Outcome</p>
			<div className={`brown overview`} dangerouslySetInnerHTML={{ __html: content.acf.outcome }} />
		</section>
	)
}

export default SingleStoryPost;
