import React from 'react';

const NotFound = () => {
	return (
		<section className="not-found">
			<div className="container">
				<span className="not-found-status-code">404</span>
				<span className="not-found-msg">Requested page is not found</span>
			</div>
		</section>
	);
};

export default NotFound;
