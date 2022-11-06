import React from 'react';
import Image from '../../components/image/Image';
import Typography from '../../components/typography/Typography';
import Button from '../../components/form/Button';

// HERO SECTION IMAGE
import hero from '../../assets/hero.png';

import './HeroSection.scss';

function HeroSection() {
	return (
		<div className='hero-section'>
			<div className='hero-section__cta-content'>
				<Typography type='h1' className='hero-section__cta-heading'>
					Your daily journey is coming to digital paper now.
				</Typography>
				<Typography type='p' className='hero-section__cta-paragraph'>
					Write whatever you lived and what you thought.
				</Typography>

				<Button to='/signup' className='hero-section__cta-action'>
					Try Journey, It's free.
				</Button>
			</div>
			<div className='hero-section__image-container'>
				<Image
					source={hero}
					alt='Journey Hero'
					className='hero-section__image'
				/>
			</div>
		</div>
	);
}

export default HeroSection;
