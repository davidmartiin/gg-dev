import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/layout";
import SEO from "../components/seo";
import Banner from "../sections/general/Banner";
import SingleStoryPost from "../post-types/SingleStoryPost";
import StoryGrid from "../sections/stories/StoryGrid";

export default ({data, pageContext}) => {
	const {wordpressWpStories, allWordpressWpStories} = data;
	const bannerContent = {
		heading: `Success Stories`,
		copy: wordpressWpStories.title,
		background_image: {
			source_url: wordpressWpStories.acf.banner_image.source_url,
		},
	};
	return (
		<Layout>
			<SEO title={pageContext.title} description={pageContext.metaDescription} />
			<Banner content={bannerContent} nextSection={`post`}/>
			<SingleStoryPost content={wordpressWpStories} sectionId={`post`}/>
			<StoryGrid stories={allWordpressWpStories.nodes} />
		</Layout>
	)
}

export const query = graphql`
	query singleStoryQuery($postId: Int){
		wordpressWpStories(wordpress_id: {eq: $postId}){
			slug
			title
			acf{
				impact
				outcome
				separator_heading
				banner_image{
					alt_text
					source_url
				}
			}
		}
		allWordpressWpStories(filter: {wordpress_id: {nin: [$postId]}}){
			nodes{
				slug
				title
				wordpress_id
				acf{
					banner_image{
						source_url
					}
				}
			}
		}
	}
`;
