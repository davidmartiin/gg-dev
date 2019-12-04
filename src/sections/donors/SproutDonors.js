import React from "react";
import PropTypes from "prop-types";
import LargeSideText from "../../components/copy/LargeSideText";

const SproutDonors = ({content}) => {
	return(
		<section className={`SproutDonors flex`}>
			<div className={`col-45 image-col`}>
				<div className={`bg-img image-container`} style={{backgroundImage: `url(${content.image.source_url})`}} />
			</div>
			<div className={`col-55 donor-container flex`}>
				<ul className={`as-center`}>
					<li key={`sproutDonor238590`} className={`heading primary-font primary`}>{content.heading}</li>
					{content.donors.map( ({donor}, index) => (
						<li key={`sproutDonor${index}`} className={`secondary-font brown`} dangerouslySetInnerHTML={{ __html: donor}}></li>
					))}
				</ul>
				<LargeSideText text={`Sprout donors`} leftOrRight={`right`} classes={`as-center`} />
			</div>
		</section>
	)
}

SproutDonors.propTypes = {
	content: PropTypes.object.isRequired,
}

export default SproutDonors;
