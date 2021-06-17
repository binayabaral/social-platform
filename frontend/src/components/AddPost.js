import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../actions/postsAction';

const AddPost = () => {
  const [postBody, setPostBody] = useState('');

  const dispatch = useDispatch();

  const postsDetails = useSelector(state => state.postsDetails);
  const { loading, success, error } = postsDetails;

  useEffect(() => {
    if (success) setPostBody('');
  }, [success]);

  const handleAddPostSubmit = e => {
    e.preventDefault();
    dispatch(addPost(postBody));
  };

  return (
    <section className="add-post">
      <div className="posts-container">
        {loading && <span className="info-text text-info">Loading</span>}
        {error && <span className="info text text-danger"></span>}
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
