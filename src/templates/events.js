import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/layout";
import SEO from "../components/seo";
import EventFilter from "../sections/events/EventFilter"
import TwoColumnCta from "../sections/general/TwoColumnCta";

function filterOutPastEvents( events ){
	return events.filter( ev => new Date( ev.acf.start_date ) > new Date() );
}

export default ({data, pageContext}) => {
	const {wordpressPage: page, allWordpressWpEvents} = data;

	const events = filterOutPastEvents( allWordpressWpEvents.nodes );
	return (
		<Layout>
			<SEO title={pageContext.title} description={pageContext.metaDescription} />
			<EventFilter bannerContent={page.childWordPressAcfBanner} events={events}/>
			<TwoColumnCta content={page.childWordPressAcfTwoColumnCta} bordered={false} />
		</Layout>
	)
}
export const query = graphql`
	query eventsQuery($pageId: Int) {
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
		allWordpressWpEvents(sort: {fields: acf___start_date, order: ASC}, filter: {status: {eq: "publish"}}){
			nodes{
				wordpress_id
				title
				slug
				acf{
					address
					copy
					direction_link
					heading
					start_date
					start_time
				}
			}
		}
	}
`
