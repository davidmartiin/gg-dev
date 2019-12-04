import React, {Component} from "react";
import PropTypes from 'prop-types';


//CSS for all Components here are in styles/sections/general/banner.scss
const BannerButton = ({classes, id, sectionToId, icon, navTitle, slug, handleClick}) => {
	return (
		<div id={id} className={`BannerButton flex${classes}`} onClick={handleClick} data-slug={slug}>
		{icon !== undefined &&
			<img src={icon.url} alt={icon.alt} />
		}
		{navTitle !== undefined &&
			<p>{navTitle}</p>
		}
		</div>
	)
}

class BannerNav extends Component {
	constructor(props){
		super(props);
		this.state = {

		};
	}
	render(){
		return(
			<div id={`BannerNav`} className={`BannerNav flex`}>
				{this.props.items.map( (item, index) => {
					let classList = index == this.props.activeIndex ? ' active' : '';

					return(
						<BannerButton
							classes={`${classList}`}
							handleClick={this.props.handleClick}
							key={`bannerNav${index}`}
							slug={`${item.slug}`}
							id={`item${index}`}
							navTitle={item.navTitle}
							icon={item.icon}
						/>
					);
				})}
			</div>
		);
	}
}

const BannerWithFilterNav = ({content, classes, items, index, navClickHandler}) => {
	return (
		<section className={`Banner ${classes}`}>
			<div className="container bg-img flex flex-col jc-center" style={{backgroundImage: `url(${content.background_image.source_url})`}}>
				<h1 className="white" dangerouslySetInnerHTML={{ __html: content.heading }}></h1>
				<p className="heading white" dangerouslySetInnerHTML={{ __html: content.copy }}></p>
				<BannerNav items={items} handleClick={navClickHandler} activeIndex={index}/>
			</div>
		</section>
	)
}

BannerWithFilterNav.propTypes = {
	content: PropTypes.object.isRequired,
	nextSection: PropTypes.string,
	hasNav: PropTypes.bool,
	items: PropTypes.array,
}


export default BannerWithFilterNav;
