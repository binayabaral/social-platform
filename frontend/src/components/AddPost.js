import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../actions/postsAction';

const AddPost = () => {
  const [postBody, setPostBody] = useState('');

  const dispatch = useDispatch();

  const postsDetails = useSelector(state => state.postsDetails);
  const { loading, success, error } = postsDetails;

  const handleAddPostSubmit = e => {
    e.preventDefault();
    dispatch(addPost(postBody));
  };

  return (
    <section className="add-post">
      <div className="posts-container">
        {error.length ? <span>{error}</span> : ''}
        {loading && <span>Loading</span>}
        {success && <span>Success</span>}
        <form className="add-post-form" onSubmit={handleAddPostSubmit}>
          <textarea name="post-body" id="post-body" value={postBody} onChange={e => setPostBody(e.target.value)} required></textarea>
          <div className="text-right">
            <button type="submit" className="btn">
              Post
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddPost;
