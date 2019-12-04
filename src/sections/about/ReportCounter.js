import React from "react";
import PropTypes from "prop-types";
import LargeSideText from "../../components/copy/LargeSideText";
import pdfIcon from "../../images/icons/pdf.svg";

const ReportCounter = ({content}) => {

	return (
		<section className="ReportCounter flex ai-center primary-font">
			<LargeSideText text={content.side_text} leftOrRight="left" />
			<div className="container flex flex-col jc-center">
				<div className="row flex">
					<div className="col flex jc-end ai-end">
						<div className="block primary-bg"></div>
					</div>
					<div className="col">
						<p className="heading primary-font brown h1">{content.heading_1}</p>
						<p className="desc primary-font">{content.description_1}</p>
						<p className="counter primary-font primary">{content.number_1}</p>
					</div>
				</div>
				<div className="row flex">
					<div className="col flex jc-end ai-start">
						<a
							className="pdf-link flex flex-center as-end"
							href={content.pdf_link.link}
							target="_blank"
							rel="noreferrer noopener">
							<img src={pdfIcon}  alt="pdf icon"/>
							Download report
						</a>
						<div className="block secondary-bg"></div>
					</div>
					<div className="col">
						<p className="heading primary-font brown h1">{content.heading_2}</p>
						<p className="counter primary-font secondary">{content.number_2}</p>
						<p className="desc primary-font">{content.description_2}</p>
					</div>
				</div>
			</div>
		</section>
	)
}

ReportCounter.propTypes = {
	content: PropTypes.object.isRequired,
}

export default ReportCounter
