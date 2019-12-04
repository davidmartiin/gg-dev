import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/layout";
import SEO from "../components/seo";
import Banner from "../sections/general/Banner";
import SimpleCopy from "../sections/general/SimpleCopy";
import Program from "../sections/programs/Program";


function getBannerNavItems( arr ){
	let items = [];

	arr.map( ({node}) => {
		const obj = {
			sectionId: `item${node.wordpress_id}`,
			icon: {
				url: node.acf.icon.url.source_url,
				alt: node.acf.icon.alt,
			},
			navTitle: node.acf.nav_title,
		}
		items.push( obj );
	});
	return items;
}

export default ({data, pageContext}) => {
	const { wordpressPage: page, allWordpressWpPrograms: {edges: programs} } = data;
	const bannerNavItems = getBannerNavItems( programs );
	return (
		<Layout>
			<SEO title={pageContext.title} description={pageContext.metaDescription} />
			<Banner content={page.childWordPressAcfBanner} hasNav={true} items={bannerNavItems}/>
			<SimpleCopy content={page.childWordPressAcfSimpleCopy} />
			{programs.map( ({node}, index) => {
				const isLast = index === programs.length - 1;
				return(
					<Program
						key={`${node.wordpress_id}`}
						content={node.acf}
						last={isLast}
						sectionId={`item${node.wordpress_id}`}
					/>
				)
			})}
		</Layout>
	)
}
export const query = graphql`
	query programsQuery($pageId: Int) {
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
		}
		allWordpressWpPrograms(filter: {acf: {show_on_programs_page: {eq: true}}}, sort: {fields: date, order: ASC}){
			edges{
				node{
					title
					wordpress_id
					acf{
						how_it_works
						what_to_expect
						side_text
						nav_title
						image_1{
							source_url
						}
						image_2{
							source_url
						}
						icon{
							alt
							url{
								source_url
							}
						}
						has_image_spacer
						spacer_image_1{
							source_url
						}
						spacer_image_2{
							source_url
						}
					}
				}
			}
		}
	}
`
