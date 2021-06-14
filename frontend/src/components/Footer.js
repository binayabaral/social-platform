import React from 'react';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<span className="footer-txt">©{new Date().getFullYear()} Social Platform - All rights reserved</span>
			</div>
		</footer>
	);
};

export default Footer;
