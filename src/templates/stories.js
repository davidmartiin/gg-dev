import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/layout";
import SEO from "../components/seo";
import Banner from "../sections/general/Banner";
import StoryGrid from "../sections/stories/StoryGrid";

export default ({data, pageContext}) => {
	const {wordpressPage: page, allWordpressWpStories: stories} = data;
	return (
		<Layout>
			<SEO title={pageContext.title} description={pageContext.metaDescription} />
			<Banner content={page.childWordPressAcfBanner} nextSection={`stories`}/>
			<StoryGrid stories={stories.nodes} extended={true} sectionId={`stories`}/>
		</Layout>
	)
}
export const query = graphql`
	query storiesQuery($pageId: Int) {
		wordpressPage(wordpress_id: {eq: $pageId}) {
			wordpress_id
			title
			childWordPressAcfBanner {
				id
	      		copy
	      		heading
	      		background_image {
	        		alt_text
	        		source_url
	      		}
	    	}
		}
		allWordpressWpStories{
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
`
