import React, {Component} from "react";
import PropTypes from "prop-types";
import BannerWithFilterNav from "../general/BannerWithFilterNav";
import PostGrid from "./PostGrid";

//Icons
import blogIcon from "../../images/icons/blog.svg";
import pressIcon from "../../images/icons/newspaper.svg";
import resourceIcon from "../../images/icons/process.svg";
import videoIcon from "../../images/icons/brand.svg";

function getAndBuildNavItems( items ){
	const navItems = [];

	items.forEach( (item, index) => {
		let icon;

		switch ( item.slug ) {
			case "blog":
				icon = {
					url: blogIcon,
					alt: "blog category icon",
				}
				break;
			case "press":
				icon = {
					url: pressIcon,
					alt: "press category icon",
				}
				break;
			case "resources":
				icon = {
					url: resourceIcon,
					alt: "resources category icon",
				}
				break;
			case "video":
				icon = {
					url: videoIcon,
					alt: "video category icon",
				};
				break;
			default:
				icon = {
					url: '',
					alt: '',
				}
		}

		const obj = {
			navTitle: item.name,
			slug: item.slug,
			icon: icon,
		}

		navItems.push(obj);
	});

	return navItems;
}

class BlogContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeIndex: 0,
			filteredPosts: props.posts,
		};
	}
	//Filters the posts based on a category slug, returns all posts if the
	filterPosts = ( slug ) => {
		let posts = this.props.posts.filter( post => {
			if( slug === "blog" ) return post.categories.some( cat => cat.slug === slug || cat.slug === 'uncategorized' );

			return post.categories.some( cat => cat.slug === slug );
		});

		this.setState({filteredPosts: posts});
	}
	handleFilterNavClick = ( ev ) => {
		const target = ev.currentTarget;
		const index = target.id.substr(-1);
		const slug = target.dataset.slug;

		this.filterPosts(slug);
		this.setState({activeIndex: index});
	}
	render(){
		const navItems = getAndBuildNavItems( this.props.navItems );
		return (
			<>
				<BannerWithFilterNav content={this.props.bannerContent} classes={` Blog`} items={navItems} index={this.state.activeIndex} navClickHandler={this.handleFilterNavClick}/>
				<PostGrid posts={this.state.filteredPosts}/>
			</>
		)
	}
}

export default BlogContainer;
