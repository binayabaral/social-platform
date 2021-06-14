import React from 'react';
import Post from '../components/Post';

const Home = () => {
	return (
		<section className="homepg-section">
			<div className="posts-container">
				<h3>Following are the posts from other people</h3>
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</section>
	);
};

export default Home;
