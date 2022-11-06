import React from 'react';
import PublicPage from '../../components/pages/PublicPage';
import ErrorSection from './ErrorSection';

function Index() {
	return (
		<PublicPage header={true}>
			<ErrorSection />
		</PublicPage>
	);
}

export default Index;
