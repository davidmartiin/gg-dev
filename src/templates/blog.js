import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/layout";
import SEO from "../components/seo";
import BlogContainer from "../sections/blog/BlogContainer";

export default ({data, pageContext}) => {
	const {wordpressPage: page, allWordpressCategory, allWordpressPost} = data;
	return (
		<Layout>
			<SEO title={pageContext.title} description={pageContext.metaDescription} />
			<BlogContainer bannerContent={page.childWordPressAcfBanner} navItems={allWordpressCategory.nodes} posts={allWordpressPost.nodes} />
		</Layout>
	)
}
export const query = graphql`
	query blogQuery($pageId: Int) {
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
		allWordpressCategory(filter: {slug: {nin: ["careers", "volunteer", "uncategorized"]}}, sort: {order: ASC, fields: name}){
			nodes {
				slug
				name
				wordpress_id
			}
		}
		allWordpressPost(sort: {fields: date, order: DESC}, filter: {status: {eq: "publish"}}) {
			nodes{
				title
				slug
				content
				excerpt
				date
				featured_media{
					alt_text
					source_url
				}
				categories{
					slug
				}
				wordpress_id
			}
		}
	}
`
