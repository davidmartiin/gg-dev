import React from "react";

const SingleCareerPost = ({content, sectionId}) => {
	const id = sectionId !== undefined ? sectionId : '';
	return (
		<section className={`SingleCareerPost brown secondary-font`} id={id}>
			<p className={`h1 primary-font`}>{`Job Description`}</p>
			{content.acf.hours !== "" &&
			<p className={`hours`}><strong>Hours: </strong>{content.acf.hours}</p>}
			{content.acf.salary !== "" &&
			<p className={`salary`}><strong>Salary: </strong>{content.acf.salary}</p>}
			{content.acf.overview !== "" &&
			<div className={`overview`} dangerouslySetInnerHTML={{ __html: content.acf.overview}} />}
			{content.acf.responsibilities !== "" &&
			<>
				<p className={`h1 primary-font`}>{`Responsibilities`}</p>
				<div className={`responsibilities`} dangerouslySetInnerHTML={{ __html: content.acf.responsibilities}} />
			</>
			}
			{content.acf.skills_and_requirements !== "" &&
			<>
				<p className={`h1 primary-font`}>{`Skills & Requirements`}</p>
				<div className={`skills`} dangerouslySetInnerHTML={{ __html: content.acf.skills_and_requirements}} />
			</>
			}


		</section>
	)
}

export default SingleCareerPost;
