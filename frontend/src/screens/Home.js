import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Post from '../components/Post';

const Home = ({ history }) => {
  // const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) history.push('/login');
  });

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
