import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/layout";
import SEO from "../components/seo";
import Banner from "../sections/general/Banner";
import SingleCareerPost from "../post-types/SingleCareerPost";
import PostGrid from "../sections/general/PostGrid";

export default ({data, pageContext}) => {
	const {wordpressWpCareers, wordpressAcfOptions, allWordpressWpCareers} = data;

	const bannerBgImage = wordpressWpCareers.featured_media ? wordpressWpCareers.featured_media.source_url : wordpressAcfOptions.options.career_post_banner_image.source_url;
	const bannerContent = {
		heading: `Get involved - ${wordpressWpCareers.categories[0].name}`,
		copy: wordpressWpCareers.title,
		background_image: {
			source_url: bannerBgImage,
		},
	};
	return (
		<Layout>
			<SEO title={pageContext.title} description={pageContext.metaDescription} />
			<Banner content={bannerContent} nextSection={`post`}/>
			<SingleCareerPost content={wordpressWpCareers} sectionId={`post`}/>
			<PostGrid posts={allWordpressWpCareers.nodes} title={`All opportunities`} />
		</Layout>
	)
}

export const query = graphql`
	query singleCareerQuery($postId: Int){
		wordpressWpCareers(wordpress_id: {eq: $postId}){
			title
			wordpress_id
			acf{
				hours
				overview
				responsibilities
				salary
				skills_and_requirements
			}
			featured_media{
				alt_text
				source_url
			}
			categories{
				name
			}
		}
		wordpressAcfOptions {
    		options{
				career_post_banner_image{
					alt_text
					source_url
				}
			}
  		}
		allWordpressWpCareers(filter: {status: {eq: "publish"}}){
			nodes{
				title
				wordpress_id
				excerpt
				slug
				status
				acf{
					hours
					salary
					overview
					responsibilities
					skills_and_requirements
				}
				categories{
					name
					slug
				}
			}
		}
	}
`;
