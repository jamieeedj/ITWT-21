import React from 'react';

import './Typography.scss';

function Typography(props) {
	const {type, className, children, onClick, style} = props;

	let content;
	switch (type) {
		case 'h1':
			return (content = (
				<h1 className={`${className}`} onClick={onClick} style={style}>
					{children}
				</h1>
			));

		case 'h2':
			return (content = (
				<h2 className={`${className}`} onClick={onClick} style={style}>
					{children}
				</h2>
			));

		case 'h3':
			return (content = (
				<h3 className={`${className}`} onClick={onClick} style={style}>
					{children}
				</h3>
			));

		case 'h4':
			return (content = (
				<h4 className={`${className}`} onClick={onClick} style={style}>
					{children}
				</h4>
			));

		case 'h5':
			return (content = (
				<h5 className={`${className}`} onClick={onClick} style={style}>
					{children}
				</h5>
			));

		case 'h6':
			return (content = (
				<h6 className={`${className}`} onClick={onClick} style={style}>
					{children}
				</h6>
			));

		case 'p':
			return (content = (
				<p className={`${className}`} onClick={onClick} style={style}>
					{children}
				</p>
			));

		case 'span':
			return (content = (
				<span className={`${className}`} onClick={onClick} style={style}>
					{children}
				</span>
			));

		default:
			break;
	}

	return <>{content}</>;
}

export default Typography;
