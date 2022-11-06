import React from 'react';

import './Image.scss';

function Image(props) {
	const {source, alt, className} = props;

	return <img src={source} alt={alt} className={`image ${className}`} />;
}

export default Image;
