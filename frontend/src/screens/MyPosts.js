import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Post from '../components/Post';

const MyPosts = ({ history }) => {
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) history.push('/login');
  });

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
