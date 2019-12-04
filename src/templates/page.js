import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/layout";
import SEO from "../components/seo";
import "../styles/all.scss";

export default ({data, pageContext}) => {
	return (
		<Layout>
			<SEO title={pageContext.title} description={pageContext.metaDescription} />
			<h1 dangerouslySetInnerHTML={{__html: data.wordpressPage.title}}></h1>
			<p>THIS IS LOADING</p>
		</Layout>
	)
}
export const query = graphql`
	query pageQuery($pageId: Int) {
		wordpressPage(wordpress_id: {eq: $pageId}) {
			wordpress_id
			title
		}
	}
`
