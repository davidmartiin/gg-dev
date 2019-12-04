import React from "react";
import bgImg from "../../images/backgrounds/default-post-header.jpg";

const PostGrid = ({ posts }) => {
	return (
		<section className={`PostGrid flex flex-wrap brown`}>
			{posts.map( ( post ) => {
				if( post.featured_media === null ){
					post.featured_media = {
						source_url: bgImg,
						alt_text: 'post background image',
					}
				}
				return(
					<div key={post.wordpress_id} className={`post-item`}>
						<img src={post.featured_media.source_url} alt={post.alt_text} />
						<p className={'h1 heading '}>{post.title}</p>
						<p className={'desc'} dangerouslySetInnerHTML={{ __html: post.excerpt }}></p>
						<a className={`primary-font`} href={`/${post.slug}`}>Read more</a>
					</div>
				)
			})}
		</section>
	);
}

export default PostGrid;
