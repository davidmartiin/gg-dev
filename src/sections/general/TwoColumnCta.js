import React from "react";
import PropTypes from "prop-types";
import rightArrow from "../../images/icons/right-arrow.svg";

const Button = ({classes, link}) => {
	return (
		<div className={`Button flex ${classes}`} >
			<a href={link} className="flex flex-center">
				<img src={rightArrow} alt={`down arrow`} />
			</a>
		</div>
	)
}

const TwoColumnCta = ({content, bordered, leftColor, rightColor, noSpacing}) => {
	const {column_1, column_2} = content;

	const borderedClass = bordered ? ' bordered' : '';
	const noSpacingClass = noSpacing ? ' no-space' : '';
	return (
		<section className={`TwoColumnCta flex flex-wrap${borderedClass}`}>
			{column_1.has_cta && column_1.cta_position === 'top' &&
				<div className={`flex ai-center cta top-cta`}>
					<Button link={column_1.cta_1.url} classes={`orange`}/>
					<p className={`primary-font secondary`}>{column_1.cta_1.title}</p>
				</div>
			}
			<div className={`col-50 left`} >
				<div className={`background bg-img flex flex-col jc-end`} style={{backgroundImage: `url(${column_1.background_image_1.source_url})`}}>
					{column_1.left_phrase !== "" &&
					<p className={`large left primary-font js-start as-end ${leftColor + noSpacingClass}`}>{column_1.left_phrase}</p>
					}
					{column_1.has_cta && column_1.cta_position === 'bottom' &&
					<div className={`flex ai-center cta bottom-cta`}>
						<Button link={column_1.cta_1.url} classes={`orange`}/>
						<p className={`primary-font white`}>{column_1.cta_1.title}</p>
					</div>
					}
				</div>
			</div>
			<div className={`col-50 bg-img flex flex-col jc-end right`} style={{backgroundImage: `url(${column_2.background_image_2.source_url})`}}>
				{column_2.right_phrase !== "" &&
				<p className={`large right primary-font as-start js-start ${rightColor + noSpacingClass}`}>{column_2.right_phrase}</p>
				}
				<div className={`flex ai-center cta right-cta`}>
					<Button link={column_2.cta_2.url} classes={`green`}/>
					<p className={`primary-font white`}>{column_2.cta_2.title}</p>
				</div>
			</div>
		</section>
	);
}

TwoColumnCta.propTypes = {
	content: PropTypes.object.isRequired,
	border: PropTypes.bool,
}

export default TwoColumnCta;
