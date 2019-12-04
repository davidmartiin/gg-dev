import React from "react";
import Swoosh from "../../images/inline-svg/swoosh-button.svg";

const PaintSwooshButton = ({url, text}) => {

	return (
		<button className="PaintSwooshButton">
			<svg id="SwooshBg" viewBox="0 0 246 66">
				<g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g id="fotter" transform="translate(-1375.000000, -471.000000)" fill="#659E42" fillRule="nonzero">
						<g id="Group-2-Copy" transform="translate(1375.000000, 471.000000)">
							<g id="button-5">
								<path d="M244.824353,66 C244.951782,64.0296937 245.102969,62.342619 245.161284,60.6456927 C245.31895,56.0745822 245.407503,51.4985459 245.580288,46.9274354 C245.653721,45.0482558 246.025209,43.171539 245.998643,41.2997481 C245.892021,34.4168115 245.714916,27.533875 245.465818,20.6509384 C245.392384,18.7077239 245.033855,16.7571207 244.63645,14.8533123 C243.772524,10.7329093 240.642956,8.00157223 236.938877,7.51884719 C232.379512,6.92036667 227.811507,6.24553677 223.332056,5.1938858 C217.675506,3.86885484 211.964961,3.22357954 206.232817,2.78518639 C203.152924,2.53889811 200.049273,2.78518639 196.958581,2.6842082 C193.014763,2.5684527 189.073104,2.17439145 185.131446,2.19163163 C176.801048,2.25074082 168.47065,2.48717757 160.140251,2.6842082 C153.542023,2.83936982 146.945955,3.00684585 140.352046,3.24574548 C136.976259,3.36888962 133.606951,3.70137881 130.233323,3.86639196 C128.380203,3.95751862 126.503326,4.08312564 124.673965,3.84176313 C123.516305,3.68906439 122.168582,3.18909918 121.362972,2.30246136 C120.248508,1.07101994 119.090848,0.768085355 117.69129,0.72867923 C111.587659,0.561203197 105.484027,0.344469508 99.3803964,0.15482753 C97.3696106,0.0907925766 95.356665,0.0218318574 93.3458793,0.0218318574 C92.2054981,0.0218318574 90.9873637,-0.113626698 89.9441741,0.290286086 C87.1580155,1.364103 84.3783363,1.5217275 81.4561096,1.30253093 C77.8751399,1.03161382 74.2660926,1.2064785 70.6700042,1.23110733 C63.5426218,1.28282787 56.4260385,1.2779021 49.3072953,1.46261831 C44.8516014,1.57591092 40.3959075,1.91825164 35.9510127,2.30246136 C34.2490802,2.45023433 32.577385,3.02654891 30.8819319,3.35657521 C29.8948975,3.54868007 28.7869135,4.02155357 27.9143491,3.70876745 C24.7113466,2.56106406 21.303162,4.62988563 18.1951913,2.76548333 C18.1241793,2.74630922 18.050222,2.74630922 17.97921,2.76548333 C14.3269665,2.9846799 10.674723,3.2580599 7.0181598,3.39844422 C4.90370302,3.48218223 3.32487983,3.9747588 2.39616031,6.6001919 C1.78709309,8.32420988 0.936126826,9.94724966 0.707186664,11.831355 C0.0608089997,17.0303575 -0.143162694,22.2884548 0.0981194411,27.5322331 C0.257945592,30.8866795 0.53008201,34.2362001 0.586237144,37.5906466 C0.702867038,44.0680284 0.679109097,50.550336 0.774140862,57.0277178 C0.813017493,59.5497099 1.01388009,62.069239 1.17154643,65.2192661 C2.09594632,64.0789514 2.83028269,63.4952482 3.18233219,62.6775711 C4.00954051,60.7639111 5.95553188,61.2934309 7.10455232,60.1432646 C7.19310464,60.0546008 7.53651489,60.2048367 7.70498029,60.3304437 C9.21684928,61.4239637 10.8971837,61.20723 12.5343218,61.1899898 C16.4219849,61.1505837 20.298849,61.0003479 24.1821925,60.9437015 C28.065536,60.8870552 31.9294412,60.9634046 35.8019856,60.8969068 C38.7479703,60.850112 41.6896354,60.6333783 44.6356202,60.5668805 C50.4519961,60.4363477 56.270532,60.3723127 62.086908,60.2491686 C64.8061123,60.1925223 67.5253167,59.9807144 70.2445211,60.0028803 C74.1170655,60.0225834 77.9874501,60.2343913 81.8599946,60.2762603 C86.3956015,60.3230551 90.9182496,60.2762603 95.4452174,60.2762603 C99.4732683,60.2762603 103.501319,60.345221 107.525051,60.2393171 C115.717221,60.0275091 123.907231,59.7122601 132.099401,59.4585832 C133.815732,59.4043998 135.533504,59.399474 137.252715,59.4438059 C139.118793,59.4930636 140.984871,59.7122601 142.84879,59.7073344 C148.082016,59.6925571 153.313083,59.5176924 158.54415,59.5595614 C163.492281,59.6014304 168.444732,59.7270374 173.386384,60.0201205 C179.265394,60.367387 185.137925,60.8944439 191.008297,61.4116493 C195.738287,61.8278765 200.459638,62.3647849 205.187468,62.805641 C208.619411,63.1258157 212.057833,63.3893442 215.496255,63.6553355 C217.772697,63.8326631 220.05346,64.0961916 222.332062,64.0937287 C228.151662,64.0842874 233.962433,64.6105909 239.707757,65.6675108 C241.219626,65.9532052 242.804928,65.8817816 244.824353,66 L244.824353,66 Z" id="Shape"></path>
							</g>
						</g>
					</g>
				</g>
			</svg>
			<a href={url}>{text}</a>
		</button>
	)
}

export default PaintSwooshButton;