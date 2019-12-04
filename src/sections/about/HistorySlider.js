import React, {Component} from "react";
import PropTypes from "prop-types";

//Nav Item Component
const NavItem = ({isActive, icon, year, index, onClick}) => (
		<li
		className={`nav-item flex flex-col flex-center${isActive}`}
		data-index={index}
		onClick={onClick}>
			<img src={icon.url.source_url} alt={icon.alt}/>
			<p className="year primary-font brown">{year}</p>
		</li>
);

NavItem.propTypes = {
	isActive: PropTypes.string,
	icon: PropTypes.object,
	year: PropTypes.string,
	index: PropTypes.number,
	onClick: PropTypes.func.isRequired,
}

//Image Component
const SlideImage = ({image}) => (
		<div className={`slide-image bg-img`} style={{backgroundImage: `url(${image.source_url})`}}></div>
)
SlideImage.propTypes = {
	image: PropTypes.object.isRequired,
}

//Copy Component
const SlideCopy = ({copy}) => {
	return (
		<div
		className="slide-copy brown"
		dangerouslySetInnerHTML={{ __html: copy }} />
	)
}
SlideCopy.propTypes = {
	isActive: PropTypes.string,
	copy: PropTypes.string,
}

//Main Slider Component
class HistorySlider extends Component {
	constructor( props ){
		super(props);
		this.state = {
			currentIndex: 0,
			activeSlide: this.props.content.slides[0],
			images: [],
			updating: false,
		};
	}

	handleNavClick = ( ev ) => {
		const index = parseInt(ev.currentTarget.dataset.index);
		if( index !== this.state.currentIndex ){
			this.setState({
				updating: true,
				currentIndex: index,
				activeSlide: this.props.content.slides[index],
			});
		}
	}
	//Preloads the images for the slider
	preloadImages = () => {
		if( this.state.images.length === 0 ){
			const slides = this.props.content.slides;
			let tempImages = [];
			for( let i = 0; i < slides.length; i++ ){
				//Create a new image element
				const image = new Image();
				//Set the source
				image.src = slides[i].image.source_url;
				//Move it to the temporary array
				tempImages.push(image);
			}

			//Merge the temp array with the array in state
			tempImages.concat(this.state.images);
			//Set the new array in state
			this.setState({images: tempImages});
		}

	}
	componentDidUpdate(){
		if( this.state.updating ){
			this.setState({updating: false});
		}
	}
	componentDidMount(){
		this.preloadImages();
	}
	render(){
		const {heading, slides} = this.props.content;
		return(
			<section className="HistorySlider flex flex-col">
				<div className="row flex ai-center">
					<p className="heading primary-font brown">{heading}</p>
					<div className="controls">
						<ul className="list flex jc-end ai-center">
							{slides.map( (slide, index) => {
								const active = index === this.state.currentIndex ? " active" : "";
								return(
									<NavItem
										key={`navItem${index}`}
										index={index}
										isActive={active}
										icon={slide.icon}
										onClick={this.handleNavClick}
										year={slide.year}
									/>
								)
							})}
						</ul>
					</div>
				</div>
				<div className="row flex">
					<div className="col-50">
						{ !this.state.updating &&
						<SlideImage image={this.state.activeSlide.image} />
						}
					</div>
					<div className="col-50 as-center">
						{ !this.state.updating &&
						<SlideCopy copy={this.state.activeSlide.copy} />
						}
					</div>
				</div>
			</section>
		)
	}
}

HistorySlider.propTypes = {
	content: PropTypes.object.isRequired,
}

export default HistorySlider
