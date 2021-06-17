import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const navigationLinks = [
    { to: '/', linkName: 'Home' },
    { to: '/my-posts', linkName: 'My Posts' },
  ];

  const logoutUser = () => {
    dispatch(logout());
  };
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          SP
        </Link>
        {userInfo ? (
          <ul className="navigation-links">
            {navigationLinks.map(navigationLink => (
              <li key={navigationLink.to}>
                <NavLink exact activeClassName="current-page" to={navigationLink.to}>
                  {navigationLink.linkName}
                </NavLink>
              </li>
            ))}
            <li>
              <button className="btn btn-danger" onClick={logoutUser}>
                Logout
              </button>
            </li>
          </ul>
        ) : (
          ''
        )}
      </div>
    </header>
  );
};

export default Header;
