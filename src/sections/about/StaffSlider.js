import React, {Component} from "react";
import PropTypes from "prop-types";
import LargeSideText from "../../components/copy/LargeSideText";

//Icons
import rightArrow from "../../images/inline-svg/arrow-right.svg";
import leftArrow from "../../images/inline-svg/arrow-left.svg";




class StaffSlider extends Component {
	constructor( props ){
		super(props);
		this.state = {
			activeIndex: 0,
			activeStaffMember: this.props.staff[0],
			currentPage: 0,
			visibleOpeningIndex: 1,
			visibleClosingIndex: 5,
			navItemsPerPage: 5,
			totalPages: Math.ceil( this.props.staff.length / 5 ),
		};
	}
	moveToNext = () => {
		let currentPage = this.state.currentPage;
		if( currentPage + 1 <= this.state.totalPages ){
			currentPage++;
			let newIndex = currentPage * this.state.navItemsPerPage;
			if( newIndex >= this.props.staff.length ){
				newIndex = this.props.staff.length - 1;
			}

			console.log('cur page', currentPage);
			console.log('pageStartIndex', currentPage * this.state.navItemsPerPage);
			this.setState({
				currentPage: currentPage,
				activeIndex: newIndex,
				activeStaffMember: this.props.staff[newIndex],
			});
		}
	}
	moveToPrev = () => {
		let currentPage = this.state.currentPage;
		if( currentPage - 1 >= 0 ){
			currentPage--;

			console.log('cur page', currentPage);
			console.log('pageStartIndex', currentPage * this.state.navItemsPerPage);
			this.setState({currentPage: currentPage});
		}
	}
	handleClick = ( ev ) => {
		const index = ev.currentTarget.dataset.index;
		this.setState({
			activeIndex: index,
			activeStaffMember: this.props.staff[index],
		});
	}
	render(){
		const staffMember = this.state.activeStaffMember;

		return (
			<section className="StaffSlider">
				<div className={`header-container flex`}>
					<div className={`flex flex-col`}>
						<div className={`controls flex`}>
							<div className={'count brown'}>
								<span className={`current-start`}>{this.state.visibleOpeningIndex}</span>
								-
								<span className={`current-end`}>{this.state.totalPages}</span>
								of
								<span className={`total`}>{this.props.staff.length}</span>
							</div>
							<span className={`arrow next`} onClick={this.moveToNext}>
								<svg width="31px" height="25px" viewBox="0 0 31 25" version="1.1">
									<g id="full-site" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
										<g id="About-New" transform="translate(-224.000000, -8272.000000)" stroke="#673D1A" strokeWidth="4.8">
											<g id="arrow-left-copy-2" transform="translate(227.000000, 8275.000000)">
												<line x1="25.6" y1="9.6" x2="0" y2="9.6" id="Shape"></line>
												<polyline id="Shape" points="9.6 19.2 0 9.6 9.6 0"></polyline>
											</g>
										</g>
									</g>
								</svg>
							</span>
							<span className={`arrow prev`} onClick={this.moveToPrev}>
								<svg width="31px" height="25px" viewBox="0 0 31 25" version="1.1">
									<g id="full-site" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
										<g id="About-New" transform="translate(-281.000000, -8273.000000)" stroke="#673D1A" strokeWidth="4.8">
											<g id="arrow-left-copy" transform="translate(296.000000, 8285.000000) rotate(-180.000000) translate(-296.000000, -8285.000000) translate(283.000000, 8275.000000)">
												<line x1="25.6" y1="9.6" x2="0" y2="9.6" id="Shape"></line>
												<polyline id="Shape" points="9.6 19.2 0 9.6 9.6 0"></polyline>
											</g>
										</g>
									</g>
								</svg>
							</span>
						</div>
						<ul className={`nav-items flex`}>
							{this.props.staff.map( (staff, index) => {
								const activeClass = index == this.state.activeIndex ? ` active` : ``;
								return (
									<li key={`staff${index}`} onClick={this.handleClick} id={`staff${index}`} data-index={index}>
										<img src={staff.featured_media.source_url} alt={staff.featured_media.alt_text} />
										<p>{staff.title}</p>
										<p>{staff.acf.job_title}</p>
									</li>
								);
							})}
						</ul>
					</div>
					<LargeSideText text={`Staff`} leftOrRight={'right'} />
				</div>
				<div className={`active-staff flex`}>
					<div className={`staff-content col-50`}>
						<p className={`primary`}>{staffMember.title}</p>
						<p className={`primary`}>{staffMember.acf.job_title}</p>
						<div className={`staff-copy brown`} dangerouslySetInnerHTML={{ __html: staffMember.content}} />
					</div>
					<div className={`staff-image col-50 bg-img`} style={{backgroundImage: `url(${staffMember.featured_media.source_url})`}}>

					</div>
				</div>
			</section>
		)
	}
}

StaffSlider.propTypes = {
	staff: PropTypes.array.isRequired,
};

export default StaffSlider;
