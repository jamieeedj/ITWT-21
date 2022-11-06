import React from 'react';
import Navigation from '../navigation/Navigation';

import './PrivatePage.scss';

function PrivatePage(props) {
	const {children, className, header} = props;

	return (
		<div className={`private-page ${className}`}>
			{header && <Navigation />}
			<div className='private-page__body'>{children}</div>
		</div>
	);
}

export default PrivatePage;
