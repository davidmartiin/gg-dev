import React from "react";
import PropTypes from "prop-types";
import PaintSwooshButton from "../../components/buttons/PaintSwooshButton";

const AllianceIntro = ({content}) => {
	console.log(content);
	return (
		<section className={`AllianceIntro flex`}>
			<div className={`col-55 image-container`}>
				<div className={`bg-img`} style={{backgroundImage: `url(${content.acf.image_1.source_url})`}} />
			</div>
			<div className={`col-45 content-container`}>
				<p className={`heading primary-font brown`}>{content.title}</p>
				<div className={'content brown'} dangerouslySetInnerHTML={{ __html: content.acf.how_it_works}} />
				<PaintSwooshButton url={`/programs/#item${content.wordpress_id}`} text={`Learn more`}/>
			</div>
		</section>
	)
}

AllianceIntro.propTypes = {
	content: PropTypes.object.isRequired,
}

export default AllianceIntro;
