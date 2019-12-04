import React, {Component} from "react";
import PropTypes from "prop-types";
import LargeSideText from "../../components/copy/LargeSideText";
import asparagus from "../../images/vegetables/asparagus.png";


class BoardMembers extends Component {
	constructor( props ){
		super(props);
		this.state = {
			activeIndex: 0,
			activeMember: this.props.content.edges[0],
			animate: true,
		};
	}
	//Get the halfway point of the members list
	getHalfCountOfMembers = () => {
		return Math.round(this.props.content.edges.length / 2);
	}
	handleClick = ( ev ) => {
		const index = parseInt(ev.currentTarget.dataset.index);
		//If the target is not already active
		if( index !== this.state.activeIndex ){
			//If the section is animated in
			if( this.state.animate ){
				//Remove the animation, and update the active member and index
				this.setState({
					animate: false,
					activeIndex: index,
					activeMember: this.props.content.edges[index],
				});
			}
			//Timeout to circumvent the instant placement, allowing animation
			setTimeout( () => {
				this.setState({animate: true});
			}, 50);
		}
	}
	render(){
		const members = this.props.content.edges;
		const halfwayPoint = this.getHalfCountOfMembers();
		const firstHalf = members.slice( 0, halfwayPoint );
		const secondHalf = members.slice( halfwayPoint );
		return (
			<section className={`BoardMembers flex`}>
				<div className={`col-40 flex`}>
					<LargeSideText text={`Board`} leftOrRight={`left`}/>
					<div className={`vegetable bg-img`} style={{backgroundImage: `url(${asparagus})`}}></div>
				</div>
				<div className={`col-60 flex flex-col`}>
					<div className={`active-board-member`}>
						<p className={`primary title ${this.state.animate}`}>{this.state.activeMember.node.title}</p>
						{this.state.activeMember.node.acf.position_on_board !== '' &&
							<p className={`brown board-position ${this.state.animate}`}>{this.state.activeMember.node.acf.position_on_board}</p>
						}
						{this.state.activeMember.node.acf.career_position !== '' &&
							<p className={`brown career ${this.state.animate}`}>{`${this.state.activeMember.node.acf.career_position},`}</p>
						}
						{this.state.activeMember.node.acf.company !== '' &&
							<p className={`brown company ${this.state.animate}`}>{this.state.activeMember.node.acf.company}</p>
						}
					</div>
					<div className={`flex brown list js-end`}>
						<ul className={`col-50`}>
						{firstHalf.map( ({node}, index) => {
							const active = index === this.state.activeIndex ? " active" : "";
							return(
								<li
								className={`${active}`}
								key={node.wordpress_id}
								data-index={index}
								onClick={this.handleClick}>{node.title}</li>
							)
						})}
						</ul>
						<ul className={`col-50`}>
						{secondHalf.map( ({node}, index) => {
							const active = index + halfwayPoint === this.state.activeIndex ? " active" : "";
							return (
								<li
								className={`${active}`}
								key={node.wordpress_id}
								data-index={index + halfwayPoint}
								onClick={this.handleClick}>{node.title}</li>
							)
						})}
						</ul>
					</div>
				</div>
			</section>
		)
	}
}

BoardMembers.propTypes = {
	content: PropTypes.object.isRequired,
};

export default BoardMembers;
