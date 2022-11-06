import React from 'react';
import Navigation from '../navigation/Navigation';
import './PublicPage.scss';

function PublicPage(props) {
	const {children, className, header} = props;

	return (
		<div className={`public-page ${className}`}>
			{header && <Navigation />}
			{children}
		</div>
	);
}

export default PublicPage;
