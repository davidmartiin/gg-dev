import React from "react";
import PropTypes from "prop-types";

const HomeCounter = ({content}) => {
	const {counter_1, counter_2, counter_3} = content;
	console.log(content);
	console.log(parseInt(`5+`));
	return (
		<section className={`HomeCounter`}>
			<div className={`flex top-row`}>
				<div className={`col-40 brown`}>
					<p className={`heading`}>{counter_1.heading}</p>
					<p className={`desc`}>{counter_1.description}</p>
					<p className={`primary counter`}>{counter_1.counter}</p>
				</div>
				<div className={`col-60`}>
					<div className={`block green`} />
				</div>
			</div>
			<div className={`flex bottom-row brown`}>
				<div className={`col-40`}>
					<p className={`heading`}>{counter_2.heading}</p>
					<p className={`secondary counter`}>{counter_2.counter}</p>
					<p className={`desc`}>{counter_2.description}</p>
				</div>
				<div className={`col-60 flex`}>
					<div className={`block orange`} />
					<div className={`col-30 flex flex-center`}>
						<p className={`white counter`}>{`${counter_3.counter}`}<span>+</span></p>
					</div>
					<div className={`col-40 flex flex-col flex-center`}>
						<p className={`heading`}>{counter_3.heading}</p>
						<p className={`desc`}>{counter_3.description}</p>
					</div>
				</div>
			</div>
		</section>
	)
}

HomeCounter.propTypes = {
	content: PropTypes.object.isRequired,
}

export default HomeCounter;
