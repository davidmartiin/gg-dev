import React from "react";
import PropTypes from "prop-types";

const PostGrid = ({posts, title, slugPreface}) => {

	return (
		<section className={`CareerPostGrid`}>
			<p className={`h1 primary-font brown heading`}>{title}</p>
			<div className={`flex flex-wrap post-grid`}>
				{posts.map( post => {

					return (
						<div className={`post-grid-item`} key={`post${post.wordpress_id}`}>
							<p className={`primary title`}>{post.title}</p>
							<div className={`excerpt brown`} dangerouslySetInnerHTML={{ __html: post.excerpt }} />
							<hr className={`seperator`} />
							<a href={post.slug} className={`brown primary-font`}>Read More</a>
						</div>
					)
				})}
			</div>
		</section>
	)
}

PostGrid.propTypes = {
	posts: PropTypes.array.isRequired,
	title: PropTypes.string,
	slugPreface: PropTypes.string,
}

PostGrid.defaultProps = {
	posts: [],
	title: "",
	slugPreface: "",
}

export default PostGrid;
