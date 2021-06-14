import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
	const navigationLinks = [
		{ to: '/', linkName: 'Home' },
		{ to: '/my-posts', linkName: 'My Posts' },
	];
	return (
		<header className="header">
			<div className="container">
				<Link to="/" className="logo">
					SP
				</Link>
				<ul className="navigation-links">
					{navigationLinks.map(navigationLink => (
						<li key={navigationLink.to}>
							<NavLink exact activeClassName="current-page" to={navigationLink.to}>
								{navigationLink.linkName}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
};

export default Header;
