import React from "react";
import {graphql} from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/layouts/layout";
import SEO from "../components/seo";
import Banner from "../sections/general/Banner";
import SinglePost from "../post-types/SinglePost";

export default ({data, pageContext}) => {
	const {wordpressPost} = data;


	const bannerContent = {
		heading: '',
		copy: wordpressPost.title,
		background_image: {
			source_url: wordpressPost.featured_media.source_url,
		},
	};
	return (
		<Layout>
			<SEO title={pageContext.title} description={pageContext.metaDescription} />
			<Banner content={bannerContent} />
			<SinglePost content={wordpressPost} />
		</Layout>
	);
}

export const query = graphql`
	query singlePostQuery($postId: Int){
		wordpressPost(wordpress_id: {eq: $postId}){
			title
			content
			featured_media{
				source_url
			}
			categories{
				name
			}
			wordpress_id
		}
	}
`
