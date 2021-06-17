import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Post from '../components/Post';
import AddPost from '../components/AddPost';
import { getPosts } from '../actions/postsAction';

const MyPosts = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const allPosts = useSelector(state => state.allPosts);
  let { posts } = allPosts;
  posts = posts.filter(post => post.user_id === userInfo.id);

  useEffect(() => {
    if (!userInfo) history.push('/login');
    dispatch(getPosts());
  }, [dispatch, history, userInfo]);

  return (
    <>
      <AddPost />
      <section className="homepg-section">
        <div className="posts-container">
          <h3>Your posts:</h3>
          {posts
            .slice(0)
            .reverse()
            .map(post => (
              <Post post={post} key={post.id} currentUserId={userInfo.id} />
            ))}
        </div>
      </section>
    </>
  );
};

export default MyPosts;
