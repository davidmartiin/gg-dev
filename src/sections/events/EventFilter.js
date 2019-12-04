import React, {Component} from "react";
import PropTypes from "prop-types";
import BannerWithFilterNav from "../general/BannerWithFilterNav";
import EventContent from "../events/EventContent";

function formatDate( date ){

	return date.substr(0, 5);
}
function getNavItems( items ){
	let navItems = [];

	items.forEach( item => {
		const obj = {
			navTitle: formatDate(item.acf.start_date),
		};
		navItems.push( obj );
	});

	return navItems;
}

class EventFilter extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeIndex: 0,
			activeEvent: this.props.events[0],
		}
	}
	handleClick = ( ev ) => {
		const index = ev.currentTarget.id[ev.currentTarget.id.length - 1];
		this.setState({
			activeIndex: index,
			activeEvent: this.props.events[index],
		});
	}
	render(){
		// console.log(this.props.events);
		// console.log(this.props.events[this.state.activeIndex].acf);
		return (
			<>
				<BannerWithFilterNav classes={` Events`} content={this.props.bannerContent} navClickHandler={this.handleClick} items={getNavItems( this.props.events )} index={this.state.activeIndex}/>
				<EventContent  content={this.state.activeEvent.acf}/>
			</>
		)
	}
}

export default EventFilter;
