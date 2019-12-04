import React from "react";
import LargeSideText from "../../components/copy/LargeSideText";
import raddish from "../../images/vegetables/Optimized-raddish.png";

const Partners = ({content}) => {
	const {row_1: row1, row_2: row2, row_3: row3, row_4: row4} = content;

	return(
		<section className={`Partners flex`} style={{backgroundImage: `url(${raddish})`}}>
			<LargeSideText text={`Partners`} leftOrRight={`left`} classes={`as-start`} />
			<div className={`flex flex-col image-container`}>
				<div className={`row flex ai-center`}>
					<img src={row1.logo_1.source_url} alt={row1.logo_1.alt_text} />
					<img src={row1.logo_2.source_url} alt={row1.logo_2.alt_text} />
					<img src={row1.logo_3.source_url} alt={row1.logo_3.alt_text} />
				</div>
				<div className={`row flex ai-center`}>
					<img src={row2.logo_1.source_url} alt={row2.logo_1.alt_text} />
					<img src={row2.logo_2.source_url} alt={row2.logo_2.alt_text} />
					<img src={row2.logo_3.source_url} alt={row2.logo_3.alt_text} />
				</div>
				<div className={`row flex ai-center`}>
					<img src={row3.logo_1.source_url} alt={row1.logo_1.alt_text} />
					<img src={row3.logo_2.source_url} alt={row3.logo_2.alt_text} />
				</div>
				<div className={`row flex ai-center`}>
					<img src={row4.logo_1.source_url} alt={row4.logo_1.alt_text} />
					<img src={row4.logo_2.source_url} alt={row4.logo_2.alt_text} />
				</div>
			</div>
		</section>
	);
}

export default Partners;
