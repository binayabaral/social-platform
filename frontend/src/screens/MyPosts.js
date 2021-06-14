import React from 'react';
import Post from '../components/Post';

const MyPosts = () => {
	return (
		<section className="homepg-section">
			<div className="posts-container">
				<h3>Your posts:</h3>
				<Post />
				<Post />
			</div>
		</section>
	);
};

export default MyPosts;
