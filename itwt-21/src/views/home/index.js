import React from 'react';
import PublicPage from '../../components/pages/PublicPage';
import HeroSection from './HeroSection';

function Index() {
	return (
		<PublicPage header={true}>
			<HeroSection />
		</PublicPage>
	);
}

export default Index;
