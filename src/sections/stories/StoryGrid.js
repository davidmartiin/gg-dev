import React from "react";
import PropTypes from "prop-types";

const StoryGrid = ({stories, extended, sectionId}) => {
	return (
		<section className={`StoryGrid`} id={sectionId}>
			<div className={`flex first-row`}>
				<div className={`bg-img flex flex-center first story`} style={{backgroundImage: `url(${stories[0].acf.banner_image.source_url})`}}>
					<a className={`flex flex-center`} href={`/${stories[0].slug}`}>
						<p className={`primary-font`}>{stories[0].title}</p>
					</a>
				</div>
				<div className={`bg-img flex flex-center second story`} style={{backgroundImage: `url(${stories[1].acf.banner_image.source_url})`}}>
					<a className={`flex flex-center`} href={`/${stories[1].slug}`}>
						<p className={`primary-font`}>{stories[1].title}</p>
					</a>
				</div>
			</div>
			<div className={`flex second-row`}>
				<div className={`bg-img flex flex-center third story`} style={{backgroundImage: `url(${stories[2].acf.banner_image.source_url})`}}>
					<a className={`flex flex-center`} href={`/${stories[2].slug}`}>
						<p className={`primary-font`}>{stories[2].title}</p>
					</a>
				</div>
				<div className={`bg-img flex flex-center fourth story`} style={{backgroundImage: `url(${stories[3].acf.banner_image.source_url})`}}>
					<a className={`flex flex-center`} href={`/${stories[3].slug}`}>
						<p className={`primary-font`}>{stories[3].title}</p>
					</a>
				</div>
				<div className={`bg-img flex flex-center fifth story`} style={{backgroundImage: `url(${stories[4].acf.banner_image.source_url})`}}>
					<a className={`flex flex-center`} href={`/${stories[4].slug}`}>
						<p className={`primary-font`}>{stories[4].title}</p>
					</a>
				</div>
			</div>
			{extended &&
				<div className={`extended`}>
					<div className={`flex third-row`}>
						<div className={`bg-img flex flex-center sixth story`} style={{backgroundImage: `url(${stories[5].acf.banner_image.source_url})`}}>
							<a className={`flex flex-center`} href={`/${stories[5].slug}`}>
								<p className={`primary-font`}>{stories[5].title}</p>
							</a>
						</div>
						<div className={`bg-img flex flex-center seventh story`} style={{backgroundImage: `url(${stories[6].acf.banner_image.source_url})`}}>
							<a className={`flex flex-center`} href={`/${stories[6].slug}`}>
								<p className={`primary-font`}>{stories[6].title}</p>
							</a>
						</div>
					</div>
					<div className={`flex fourth-row`}>
						<div className={`bg-img flex flex-center eigth story`} style={{backgroundImage: `url(${stories[7].acf.banner_image.source_url})`}}>
							<a className={`flex flex-center`} href={`/${stories[7].slug}`}>
								<p className={`primary-font`}>{stories[7].title}</p>
							</a>
						</div>
						<div className={`bg-img flex flex-center ninth story`} style={{backgroundImage: `url(${stories[8].acf.banner_image.source_url})`}}>
							<a className={`flex flex-center`} href={`/${stories[8].slug}`}>
								<p className={`primary-font`}>{stories[8].title}</p>
							</a>
						</div>
					</div>
				</div>
			}
		</section>
	)
}

StoryGrid.propTypes = {
	stories: PropTypes.array.isRequired,
	extended: PropTypes.bool
}

StoryGrid.defaultProps = {
	extended: false,
}

export default StoryGrid;
