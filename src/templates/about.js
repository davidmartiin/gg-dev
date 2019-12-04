import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/layout";
import SEO from "../components/seo";
import Banner from "../sections/general/Banner";
import SimpleCopy from "../sections/general/SimpleCopy";
import SimpleTwoColumn from "../sections/about/SimpleTwoColumn";
import FramedOneColumn from "../sections/about/FramedOneColumn";
import TwoColumnSimpleSlider from "../sections/about/TwoColumnSimpleSlider";
import ReportCounter from "../sections/about/ReportCounter";
import HistorySlider from "../sections/about/HistorySlider";
import Sites from "../sections/about/Sites";
import StaffSlider from "../sections/about/StaffSlider";
import BoardMembers from "../sections/about/BoardMembers";

export default ({data, pageContext}) => {
	const {wordpressPage: page, allWordpressWpBoardMembers, allWordpressWpStaffMembers} = data;

	return (
		<Layout>
			<SEO title={pageContext.title} description={pageContext.metaDescription} />
			<Banner content={page.childWordPressAcfBanner} nextSection="simpleCopy" />
			<SimpleCopy content={page.childWordPressAcfSimpleCopy} sectionId={"simpleCopy"}/>
			<SimpleTwoColumn content={page.childWordPressAcfSimpleTwoColumn} leftOrRight="left"/>
			<FramedOneColumn content={page.childWordPressAcfFramedOneColumn} />
			<TwoColumnSimpleSlider content={page.childWordPressAcfTwoColumnSimpleSlider} />
			<ReportCounter content={page.childWordPressAcfReportCounter} />
			<HistorySlider content={page.childWordPressAcfHistorySlider} />
			<Sites content={new Object} />
			<StaffSlider staff={allWordpressWpStaffMembers.nodes} />
			<BoardMembers content={allWordpressWpBoardMembers} />
		</Layout>
	)
}
export const query = graphql`
	query aboutQuery($pageId: Int) {
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
			childWordPressAcfSimpleTwoColumn{
				copy
				side_text
				background_image{
					source_url
				}
			}
			childWordPressAcfFramedOneColumn{
				copy
				background_image{
					source_url
				}
			}
			childWordPressAcfTwoColumnSimpleSlider{
				copy
				side_copy
				images{
					image{
						source_url
						wordpress_id
					}
				}
			}
			childWordPressAcfReportCounter{
				heading_1
				heading_2
				number_1
				number_2
				description_1
				description_2
				side_text
				pdf_link{
					link
				}
			}
			childWordPressAcfHistorySlider{
				heading
				slides{
					copy
					year
					icon{
						alt
						url{
							source_url
						}
					}
					image{
						alt_text
						source_url
					}
				}
			}
		}
		allWordpressWpBoardMembers{
			edges{
				node{
					title
					wordpress_id
					acf{
						career_position
						company
						position_on_board
					}
				}
			}
		}
		allWordpressWpStaffMembers(sort: {order: ASC, fields: date}){
			nodes{
				title
				content
				wordpress_id
				acf{
					job_title
				}
				featured_media{
					alt_text
					source_url
				}
			}
		}
	}
`
