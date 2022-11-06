import React from 'react';
import PrivatePage from '../../components/pages/PrivatePage';
import PostsSection from './PostsSection';

function Index() {
	return (
		<PrivatePage header={true}>
			<PostsSection />
		</PrivatePage>
	);
}

export default Index;
