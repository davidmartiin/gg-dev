import React from "react";
import PropTypes from "prop-types";
import LargeSideText from "../../components/copy/LargeSideText";
import downArrow from "../../images/icons/arrow-down.svg";

const Button = ({classes, sectionToId}) => {
	return (
		<div className={`Button flex ${classes}`} >
			<a href={`#${sectionToId}`} className="flex flex-center">
				<img src={downArrow} alt={`down arrow`} />
			</a>
		</div>
	)
}

const ImageSpacer = ({image1, image2}) => (
	<div className={`ImageSpacer flex`}>
		<div className={`col-100 flex ai-center`}>
			<Button sectionToId={`footer`} />
			<p className={`h1 primary-font brown`}>Get more info</p>
		</div>
		<div className="col-50">
			<div className={`bg-img`} style={{backgroundImage: `url(${image1.source_url})`}} />
		</div>
		<div className={`col-50`}>
			<div className={`bg-img`} style={{backgroundImage: `url(${image2.source_url})`}} />
		</div>
	</div>
);

const Program = ({content, sectionId, last}) => {
	const classes = last ? ' isLast' : '';
	return (
		<section id={sectionId} className={`Program${classes}`}>
			<div className={`flex top-row`}>
				{last &&
					<p className={`h1 brown primary-font`}>{content.side_text}</p>
				}
				<div className={`col-50`}>
					<div className={`image bg-img`}  style={{backgroundImage: `url(${content.image_1.source_url})`}}/>
				</div>
				<div className={`col-50 flex as-start copy-col`}>
					{last !== true && content.side_text !== '' &&
						<LargeSideText classes={`medium`} text={content.side_text} leftOrRight={`left`}/>
					}
					<div className={`copy flex flex-col jc-center`}>
						{last !== true &&
							<p className={`how-it-works primary-font primary`}>How it works</p>
						}
						<div className={`brown`} dangerouslySetInnerHTML={{ __html: content.how_it_works }} />
					</div>
				</div>
			</div>
			<div className={`flex bottom-row`}>
				<div className={`col-50 flex flex-col jc-center as-center copy-col`}>
					{last !== true &&
						<p className={`what-to-expect primary-font primary`}>What to expect</p>
					}
					<div className={`brown`} dangerouslySetInnerHTML={{ __html: content.what_to_expect }} />
				</div>
				<div className={`col-50`}>
					<div className={`image bg-img`}  style={{backgroundImage: `url(${content.image_2.source_url})`}}/>
				</div>
			</div>
			{content.has_image_spacer &&
				<ImageSpacer image1={content.spacer_image_1} image2={content.spacer_image_2} />
			}
		</section>
	)
}

Program.propTypes = {
	content: PropTypes.object.isRequired,
	sectionId: PropTypes.string,
};

export default Program;
