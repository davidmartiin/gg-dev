import React, {Component} from "react";
import PropTypes from "prop-types";
import LargeSideText from "../../components/copy/LargeSideText";

class ProgramSlider extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeIndex: 0,
		};
	}

	handleClick = ( ev ) => {
		this.setState({
			activeIndex: parseInt( ev.currentTarget.id.substr(-1) ),
		})
	}
	componentDidMount(){

	}
	render(){

		return(
			<section className={`ProgramSlider flex`}>
				<div className={`col-50 flex`}>
					<LargeSideText text={`Programs`} leftOrRight={`left`}/>
					<div className={`program-info`}>
						<div className={`program-nav flex`}>
							{this.props.content.map( (slide, index) => {
								if( index < 4){
									const activeClass = index === this.state.activeIndex ? ' active' : '';
									return(
										<div
											key={slide.wordpress_id}
											id={`programSlide${index}`}
											className={`nav-item flex flex-col${activeClass}`}
											onClick={this.handleClick}
										>
											<div className={`flex flex-center`}>
												<img src={slide.acf.icon.url.source_url} />
											</div>
											<p>{slide.acf.nav_title}</p>
										</div>
									)
								}
							})}
						</div>
						<div className={`program-items`}>
							{this.props.content.map( (slide, index) => {
								if( index < 4 ){
									const activeClass = index === this.state.activeIndex ? ' active' : '';
									return(
										<div key={slide.wordpress_id} className={`content${activeClass}`}>
											<p className={`title primary-font primary`}>{slide.title}</p>
											<div className={`content-inner brown`} dangerouslySetInnerHTML={{ __html: slide.acf.how_it_works}} />
										</div>
									)
								}
							})}
						</div>
					</div>
				</div>
				<div className={`col-50 images`}>
					{this.props.content.map( (slide, index) => {
						if( index < 4 ){
							const activeClass = index === this.state.activeIndex ? ' active' : '';
							return(
								<div 
									key={slide.wordpress_id}
									className={`bg-img${activeClass}`}
									style={{backgroundImage: `url(${slide.acf.image_1.source_url})`}}
								/>
							)
						}
					})}
				</div>
			</section>
		)
	}
}

ProgramSlider.propTypes = {
	content: PropTypes.array.isRequired,
}

export default ProgramSlider;
