import React from "react";
import PropTypes from "prop-types";
import LargeSideText from "../../components/copy/LargeSideText";

const BloomDonors = ({content}) => {

	return(
		<section className={`BloomDonors flex`}>
			<div className={`col-50 donor-container flex`}>
				<LargeSideText text={`Bloom donors`} leftOrRight={`left`} />
				<ul className={`as-center`}>
					<li key={`bloomDonor33520`} className={`heading primary-font primary`}>{content.heading}</li>
					{content.donors.map( ({donor}, index) => (
						<li key={`bloomDonor${index}`} className={`secondary-font brown`} dangerouslySetInnerHTML={{ __html: donor}}></li>
					))}
				</ul>
			</div>
			<div className={`col-50 image-col`}>
				<div className={`bg-img image-container`} style={{backgroundImage: `url(${content.image.source_url})`}} />
			</div>
		</section>
	)
}

BloomDonors.propTypes = {
	content: PropTypes.object.isRequired,
}

export default BloomDonors;
