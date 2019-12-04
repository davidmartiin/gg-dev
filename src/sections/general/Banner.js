import React, {Component} from "react";
import PropTypes from 'prop-types';
import downArrow from "../../images/icons/arrow-down.svg";

const BannerButton = ({classes, sectionToId, icon, navTitle}) => {
	return (
		<div className={`BannerButton flex ${classes}`} >
			<a href={`#${sectionToId}`} className="flex flex-center">
				<img src={icon.url} alt={icon.alt} />
				{navTitle !== undefined &&
					<p>{navTitle}</p>
				}
			</a>
		</div>
	)
}

class BannerNav extends Component {
	constructor(props){
		super(props);
		this.state = {
			currentIndex: null,
			navIsStuck: false,
			sectionYPositions: [],
		};
	}
	getSectionYPositions = () => {
		//Build and return an array of section Y positions corresponding to the nav items
		return Array.from(this.props.items, item => document.getElementById( item.sectionId ).offsetTop);

	}
	onScroll = ( ev ) => {
		const scrollPositions = this.state.sectionYPositions;
		const navY = this.state.navYPos;
		const footerY = document.querySelector('footer').offsetTop;
		//Get the scroll position, make the trigger include the headers height
		let scroll = window.scrollY + this.state.headerHeight;



		//If the nav is already stuck.
		if( this.state.navIsStuck ){
			//If the scroll point is above the navs starting position
			if( scroll < navY ){
				//Unstick the nav
				this.setState({
					navIsStuck: false,
					currentIndex: null,
				});
			//If the scroll position is past the nav
			} else{
				//Check all the section heights, if one of them is in view, update the current index
				for( let i = 0; i < scrollPositions.length; i++ ){
					if( (scroll + this.state.navHeight) >= scrollPositions[i] ){
						this.setState({currentIndex: i});
					}
				}
			}
		//If the nav is not stuck yet
		} else{
			//If the scroll position has passed or equaled the top of the nav, stick it.
			if( scroll >= navY ){
				this.setState({navIsStuck: true});
			}
		}
	}
	componentDidMount(){
		//Get all the section Y positions
		const sectionYPositions = this.state.sectionYPositions.concat( this.getSectionYPositions() );
		const nav = document.getElementById('BannerNav');
		//Get the navs Y position
		const navYPos = nav.offsetTop;
		//Get the navs height
		const navHeight = nav.offsetHeight;
		//Get the header height
		const headerHeight = document.querySelector('header').offsetHeight;

		//Store them all in state
		this.setState({
			sectionYPositions: sectionYPositions,
			navYPos: navYPos,
			navHeight: navHeight,
			headerHeight: headerHeight,
		});
		//Add the scroll listener.
		window.addEventListener( 'scroll', this.onScroll, {passive: true} );
	}
	componentWillUnmount(){
		//remove the scroll listener
		window.removeEventListener('scroll', this.onScroll);
	}
	render(){
		//Set the class when the nav is supposed to be stuck.
		const stuck = this.state.navIsStuck ? ` stuck` : ``;
		return(
			<div id={`BannerNav`} className={`BannerNav flex${stuck}`}>
				{this.props.items.map( (item, index) => {
					const active = index === this.state.currentIndex ? ' active' : '';
					return(
						<BannerButton
							classes={`${active}`}
							key={`bannerNav${index}`}
							sectionToId={item.sectionId}
							icon={item.icon}
							navTitle={item.navTitle}
						/>
					);
				})}
			</div>
		);
	}
}

const Banner = ({content, nextSection, hasNav, items}) => {
	let buttonOrNav;
	//If there are items
	if( items !== undefined ){
		//set the node to a Navigation item
		buttonOrNav = <BannerNav items={items} />
	} else{
		//create a default icon object
		const icon = {
			url: downArrow,
			alt: "",
		}
		//Set the node to a simple button.
		buttonOrNav = <BannerButton icon={icon} sectionToId={nextSection} />
	}
	return (
		<section className="Banner">
			<div className="container bg-img flex flex-col jc-center" style={{backgroundImage: `url(${content.background_image.source_url})`}}>
				<h1 className="white" dangerouslySetInnerHTML={{ __html: content.heading }}></h1>
				<p className="heading white" dangerouslySetInnerHTML={{ __html: content.copy }}></p>
				{buttonOrNav}
			</div>
		</section>
	)
}

Banner.propTypes = {
	content: PropTypes.object.isRequired,
	nextSection: PropTypes.string,
	hasNav: PropTypes.bool,
	items: PropTypes.array,
}


export default Banner;
