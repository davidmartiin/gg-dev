import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import GravityFormForm from "gatsby-gravityforms-component";

import facebookIcon from "../images/icons/Facebook-black.svg";
import twitterIcon from "../images/icons/Twitter-black.svg";
import instaIcon from "../images/icons/Instagram-black.svg";


const Footer = () => {
	const { allGfForm, wordpressAcfOptions, wordpressWpApiMenusMenusItems } = useStaticQuery(
        graphql`
		query MyQuery {
			allGfForm {
				edges {
				  node {
					formId
					slug
					apiURL
					descriptionPlacement
					formFields {
					  id
					  label
					  labelPlacement
					  description
					  descriptionPlacement
					  type
					  choices
					  content
					  errorMessage
					  inputMaskValue
					  isRequired
					  visibility
					  cssClass
					  placeholder
					  size
					  defaultValue
					  maxLength
					}
					button {
					  text
					}
					confirmations {
					  message
					}
				  }
				}
			}
			wordpressAcfOptions {
				options {
				  address
				  email_address
				  facebook_link
				  formatted_phone_number
				  instagram_link
				  plain_phone_number
				  twitter_link
				  footer_background_image {
					source_url
				  }
				}
			}
			wordpressWpApiMenusMenusItems(slug: {eq: "footer-menu"}) {
			    items {
			      title
			      object_slug
			      object_id
			      url
			      wordpress_id
				  type
			    }
			}
		}
        `
    );
	return (
		<footer id={`footer`}>
			<div className="container flex white">
				<div className="inner-left-col flex flex-col">
					<ul className="primary-font">
						{wordpressWpApiMenusMenusItems.items.map( item => {
							const url = item.type === "custom" ? item.url : item.object_slug;
							return (
								<li key={item.wordpress_id}>
									<Link
									  to={ '/' + url }
									  className="menu-item flex ai-end"
									  activeClassName="active"
									  dangerouslySetInnerHTML={{ __html: item.title }}
									></Link>
								</li>
							)
						})}
					</ul>
					<div className="contact-info secondary-font">
						<p className="ph-num primary-font">
							<a href={`tel:${wordpressAcfOptions.options.plain_phone_number}`}>{wordpressAcfOptions.options.formatted_phone_number}</a>
						</p>
						<p className="address bold">{wordpressAcfOptions.options.address}</p>
						<p className="email bold">
							<a href={`mailto:${wordpressAcfOptions.options.email_address}`}>{wordpressAcfOptions.options.email_address}</a>
						</p>
					</div>
					<div className="social-links flex">
						<a className="flex flex-center" href={wordpressAcfOptions.options.facebook_link} target="_blank" rel="noreferrer noopener">
							<img src={facebookIcon} alt="facebook icon" />
						</a>
						<a className="flex flex-center" href={wordpressAcfOptions.options.twitter_link} target="_blank" rel="noreferrer noopener">
							<img src={twitterIcon} alt="twitter icon" />
						</a>
						<a className="flex flex-center" href={wordpressAcfOptions.options.instagram_link} target="_blank" rel="noreferrer noopener">
							<img src={instaIcon} alt="instagram icon" />
						</a>
					</div>
				</div>
				<div className="inner-right-col">
					<p className="h1 primary-font">Get more info</p>
					<GravityFormForm
						id={1}
						formData={ allGfForm }
						lambda={process.env.GATSBY_LAMBDA_ENDPOINT}
					/>
				</div>
			</div>
			<div className="left-col" />
			<div className="right-col" style={{backgroundImage: `url(${wordpressAcfOptions.options.footer_background_image.source_url})`}} />
		</footer>
	)
}

export default Footer
