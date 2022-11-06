import React from 'react';

import './Form.scss';

function Form(props) {
	const {onSubmit, className, children} = props;

	return (
		<form className={className} onSubmit={onSubmit}>
			{children}
		</form>
	);
}

export default Form;
