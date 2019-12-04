import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layouts/layout";
import SEO from "../components/seo";
import Banner from "../sections/general/Banner";
import SimpleCopy from "../sections/general/SimpleCopy";
import ProgramSlider from "../sections/home/ProgramSlider";
import AllianceIntro from "../sections/home/AllianceIntro";
import StoryGrid from "../sections/stories/StoryGrid";
import HomeCounter from "../sections/home/HomeCounter";
import TwoColumnCta from "../sections/general/TwoColumnCta";

export default ({data, pageContext}) => {
	const {wordpressPage: page, allWordpressWpStories, allWordpressWpPrograms} = data;
	return (
		<Layout trackScroll={true}>
			<SEO title={page.yoast_meta.yoast_wpseo_title} description={page.yoast_meta.yoast_wpseo_metadesc} />
			<Banner content={page.childWordPressAcfBanner} nextSection="simpleCopy" />
			<SimpleCopy content={page.childWordPressAcfSimpleCopy} sectionId={"simpleCopy"}/>
			<ProgramSlider content={allWordpressWpPrograms.nodes} />
			<AllianceIntro content={allWordpressWpPrograms.nodes[allWordpressWpPrograms.nodes.length - 1]} />
			<StoryGrid stories={allWordpressWpStories.nodes} />
			<HomeCounter content={page.childWordPressAcfHomeCounter} />
			<TwoColumnCta content={page.childWordPressAcfTwoColumnCta} bordered={true} leftColor={`secondary`} rightColor={`white`}/>
		</Layout>
	)
}

export const query = graphql`
	query homeQuery {
		wordpressPage(wordpress_id: {eq: 34}) {
			wordpress_id
			title
			yoast_meta{
				yoast_wpseo_title
				yoast_wpseo_metadesc
			}
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
			childWordPressAcfHomeCounter{
				counter_1 {
					heading
					description
					counter
				}
				counter_2 {
					heading
					description
					counter
				}
				counter_3 {
					heading
					description
					counter
				}
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
		allWordpressWpPrograms(sort: {fields: date}){
			nodes{
				wordpress_id
				title
				acf{
					how_it_works
					nav_title
					image_1{
						source_url
					}
					icon{
						alt
						url{
							source_url
						}
					}
				}
			}
		}
	}
`
