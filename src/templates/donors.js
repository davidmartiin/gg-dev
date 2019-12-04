import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/layout";
import SEO from "../components/seo";
import Banner from "../sections/general/Banner";
import SimpleCopy from "../sections/general/SimpleCopy";
import BloomDonors from "../sections/donors/BloomDonors";
import SproutDonors from "../sections/donors/SproutDonors";
import SowDonors from "../sections/donors/SowDonors";
import Partners from "../sections/donors/Partners";
import TwoColumnCta from "../sections/general/TwoColumnCta";

export default ({data, pageContext}) => {
	const {wordpressPage: page} = data;

	return (
		<Layout>
			<SEO title={pageContext.title} description={pageContext.metaDescription} />
			<Banner content={page.childWordPressAcfBanner} nextSection="simpleCopy"/>
			<SimpleCopy content={page.childWordPressAcfSimpleCopy} sectionId={"simpleCopy"}/>
			<BloomDonors content={page.childWordPressAcfBloomDonors} />
			<SproutDonors content={page.childWordPressAcfSproutDonors} />
			<SowDonors content={page.childWordPressAcfSowDonors} />
			<Partners content={page.childWordPressAcfPartners} />
			<TwoColumnCta content={page.childWordPressAcfTwoColumnCta} bordered={true} leftColor={'white'} rightColor={`primary`} />
		</Layout>
	)
}
export const query = graphql`
	query donorsQuery($pageId: Int) {
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
			childWordPressAcfBloomDonors{
				heading
				image{
					source_url
				}
				donors{
					donor
				}
			}
			childWordPressAcfSproutDonors{
				heading
				image{
					source_url
				}
				donors{
					donor
				}
			}
			childWordPressAcfSowDonors{
				heading
				image{
					source_url
				}
				donor_column_1{
					donor
				}
				donor_column_2{
					donor
				}
			}
			childWordPressAcfPartners{
				row_1{
					logo_1{
						source_url
						alt_text
					}
					logo_2{
						source_url
						alt_text
					}
					logo_3{
						source_url
						alt_text
					}
				}
				row_2{
					logo_1{
						source_url
						alt_text
					}
					logo_2{
						source_url
						alt_text
					}
					logo_3{
						source_url
						alt_text
					}
				}
				row_3{
					logo_1{
						source_url
						alt_text
					}
					logo_2{
						source_url
						alt_text
					}
				}
				row_4{
					logo_1{
						source_url
						alt_text
					}
					logo_2{
						source_url
						alt_text
					}
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
	}
`
