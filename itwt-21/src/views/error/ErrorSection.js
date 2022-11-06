import React from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/form/Button';
import Typography from '../../components/typography/Typography';

import './ErrorSection.scss';

function ErrorSection() {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(-1);
	};

	return (
		<div className='error-section'>
			<div className='error-section__content'>
				<Typography type='h1' className='error-section__content-heading'>
					PAGE NOT FOUND
				</Typography>
				<Button
					// to='/'
					className='error-section__content-action'
					onClick={handleNavigate}
				>
					Back to Previous
				</Button>
			</div>
		</div>
	);
}

export default ErrorSection;
