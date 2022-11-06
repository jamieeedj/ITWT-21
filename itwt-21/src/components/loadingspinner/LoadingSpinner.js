import React from 'react';

import './LoadingSpinner.scss';

import {LineWave} from 'react-loader-spinner';

function LoadingSpinner(props) {
	const {className} = props;

	return (
		<div className='loading-spinner__container'>
			<LineWave
				height='150'
				width='150'
				color='#4fa94d'
				ariaLabel='line-wave'
				wrapperStyle={{}}
				wrapperClass=''
				visible={true}
				firstLineColor=''
				middleLineColor=''
				lastLineColor=''
			/>
		</div>
	);
}

export default LoadingSpinner;
