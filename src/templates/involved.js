import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/layout";
import SEO from "../components/seo";
import Banner from "../sections/general/Banner";
import SimpleCopy from "../sections/general/SimpleCopy";
import PostGrid from "../sections/general/PostGrid";
import TwoColumnCta from "../sections/general/TwoColumnCta";

function getCareersByCategory(careers, cat){
	return careers.filter( c => c.categories[0].slug === cat);
}

export default ({data, pageContext}) => {
	const {wordpressPage: page, allWordpressWpCareers: {nodes: careers}} = data;
	const jobPositions = getCareersByCategory(careers, 'careers');
	const volunteerPositions = getCareersByCategory(careers, 'volunteer');

	return (
		<Layout>
			<SEO title={pageContext.title} description={pageContext.metaDescription} />
			<Banner content={page.childWordPressAcfBanner} nextSection="simpleCopy"/>
			<SimpleCopy content={page.childWordPressAcfSimpleCopy} sectionId={"simpleCopy"}/>
			<PostGrid posts={jobPositions} title={`Careers`} slugPreface={'careers'}/>
			<PostGrid posts={volunteerPositions} title={`Volunteer`} slugPreface={`/careers`} />
			<TwoColumnCta content={page.childWordPressAcfTwoColumnCta} bordered={true} leftColor={'white'} rightColor={`brown`} noSpacing={true}/>
		</Layout>
	)
}
export const query = graphql`
	query involvedQuery($pageId: Int) {
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
			childWordPressAcfSimpleCopy {
				heading
		    	copy
		    }
			childWordPressAcfTwoColumnCta{
				column_1{
					background_image_1{
						source_url
					}
					left_phrase
					has_cta
					cta_position
					cta_1{
						title
						url
					}
				}
				column_2{
					right_phrase
					background_image_2{
						source_url
					}
					cta_2{
						url
						title
					}
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
`
