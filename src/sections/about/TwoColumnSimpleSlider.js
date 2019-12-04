import React from "react";
import PropTypes from "prop-types";
import LargeSideText from "../../components/copy/LargeSideText";


const NavItem = ({isActive, index, onClick}) => (
	<div
		className={`slide-nav-item ${isActive}`}
		data-index={index}
		onClick={onClick}>
	</div>
)

NavItem.propTypes = {
	isActive: PropTypes.string,
	index: PropTypes.number,
	onClick: PropTypes.func,
}

const Slide = ({isActive, bgImage}) => (
	<div
		className={`slide-image bg-img ${isActive}`}
		style={{backgroundImage: `url(${bgImage})`}}>
	</div>
)

Slide.propTypes = {
	isActive: PropTypes.string,
	bgImage: PropTypes.string,
}

class TwoColumnSimpleSlider extends React.Component{
	constructor( props ) {
		super(props);
		this.state = {
			images: this.props.content.images,
			currentIndex: 0,
			maxIndex: this.props.content.images.length - 1,
			interval: null,
		};
	}
	//handles the slider, sets up an interval
	startSlider = () => {
		//Set up an interval to change the slides.
		const interval = setInterval( () => {
			//Check that incrementing current index won't surpass the amount of slides
			let currentIndex = this.state.currentIndex === this.state.maxIndex ? 0 : this.state.currentIndex + 1;
			//Store the current index in state.
			this.setState({currentIndex: currentIndex});
		}, 4000);
		//Store the interval in state.
		this.setState({interval: interval});
	}
	//Resets the interval and sets the correct index.
	resetTheInterval = ( index ) => {
		clearInterval(this.state.interval);
		this.setState({
			currentIndex: parseInt(index),
			interval: null,
		});
	}
	//Handles a manual slide selection
	onClick = ( ev ) => {
		//Clear the interval from state halt auto change after a user selects a slide.
		this.resetTheInterval( ev.target.dataset.index );
	}
	componentDidMount(){
		//Run the slider when the component mounts
		this.startSlider();
	}
	componentWillUnmount(){
		//Clear the interval if the component unmounts.
		this.resetTheInterval( 0 );
	}

	render(){
		return (
			<section className="TwoColumnSimpleSlider flex">
				<div className="col-50 slide-container">
					{ this.state.images.map( (slide, index)  => {
						//determine an active class based on the current index.
						const active = index === this.state.currentIndex ? 'active' : '';
						return (
							<Slide
								key={slide.image.wordpress_id}
								isActive={active}
								bgImage={slide.image.source_url}
							/>
						)
					})}
					<div className="slider-nav flex">
						{ this.state.images.map( (slide, index)  => {
							//determine an active class based on the current index.
							const active = index === this.state.currentIndex ? 'active' : '';
							return (
								<NavItem
									key={`slideNav${slide.image.wordpress_id}`}
									isActive={active}
									index={index}
									onClick={this.onClick}
								/>
							)
						})}
					</div>
				</div>
				<div className="col-50 flex ai-center brown">
					<LargeSideText
						text={this.props.content.side_copy}
						leftOrRight="left"
					/>
					<div
						className="copy-container"
						dangerouslySetInnerHTML={{ __html: this.props.content.copy }}>
					</div>
				</div>
			</section>
		)
	}
}

TwoColumnSimpleSlider.propTypes = {
	content: PropTypes.object.isRequired,
}

export default TwoColumnSimpleSlider
