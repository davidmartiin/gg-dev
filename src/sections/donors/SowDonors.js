import React from "react";
import PropTypes from "prop-types";
import LargeSideText from "../../components/copy/LargeSideText";

const SowDonors = ({content}) => {

	return(
		<section className={`SowDonors flex`}>
			<div className={`col-80 donor-container flex`}>
				<LargeSideText text={`Sow donors`} leftOrRight={`left`} classes={`as-start flex flex-col`}/>
				<ul className={`col-50 as-end column-1`}>
					<li key={`sowDonors235327`} className={`heading primary-font primary`}>{content.heading}</li>
					{content.donor_column_1.map( ({donor}, index) => (
						<li key={`SowDonors${index}`} className={`secondary-font brown`} dangerouslySetInnerHTML={{ __html: donor}}></li>
					))}
				</ul>
				<ul className={`col-50 as-end column-2`}>
					{content.donor_column_2.map( ({donor}, index) => (
						<li key={`SowDonors${index}`} className={`secondary-font brown`} dangerouslySetInnerHTML={{ __html: donor}}></li>
					))}
				</ul>
			</div>
			<div className={`col-20 image-col`}>
				<div className={`bg-img image-container`} style={{backgroundImage: `url(${content.image.source_url})`}} />
			</div>
		</section>
	)
}

SowDonors.propTypes = {
	content: PropTypes.object.isRequired,
}

export default SowDonors;
