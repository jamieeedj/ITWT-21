import React from 'react';
import {Link} from 'react-router-dom';

import './Button.scss';

function Button(props) {
	const {to, type, children, className, danger, inverse, onClick} = props;

	let content;
	if (to) {
		content = (
			<Link
				to={to}
				className={`button ${inverse && 'button--inverse'} ${
					danger && 'button--danger'
				} ${className}`}
			>
				{children}
			</Link>
		);
	} else {
		content = (
			<button
				type={type}
				onClick={onClick}
				className={`button ${inverse && 'button--inverse'} ${
					danger && 'button--danger'
				} ${className}`}
			>
				{children}
			</button>
		);
	}

	return <>{content}</>;
}

export default Button;
