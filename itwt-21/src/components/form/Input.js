import React from 'react';

import './Input.scss';

function Input(props) {
	const {name, type, errors, register, placeholder} = props;

	return (
		<div className='form-control'>
			<input
				className='input'
				name={name}
				type={type}
				placeholder={placeholder}
				{...register(name)}
			/>
			<p className='input-error'>{errors[name]?.message}</p>
		</div>
	);
}

export default Input;
