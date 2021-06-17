import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePostAction, editPostAction } from '../actions/postsAction';

const Post = props => {
  const { id, post_text, created_at, user } = props.post;

  const dispatch = useDispatch();

  const editPost = useSelector(state => state.editPost);
  const { loading, success, error } = editPost;

  const [postComment, setPostComment] = useState('');
  const [newPostText, setNewPostText] = useState(post_text);
  const [editMode, setEditMode] = useState(false);

  const handlePostComment = e => {
    e.preventDefault();
    console.log({ post_id: id, comment_txt: postComment });
    setPostComment('');
  };

  const submitEdit = () => {
    dispatch(editPostAction(id, newPostText));
  };

  const submitDelete = () => {
    dispatch(deletePostAction(id));
  };

  useEffect(() => {
    if (success) setEditMode(false);
  }, [success]);

  return (
    <div className="post">
      {error ? <span className="info-text text-danger">{error}</span> : ''}
      {loading && <span className="info-text text-info">Loading</span>}
      {success && <span className="info-text text-success">Post Edited Successfully!</span>}
      <div className="post-head">
        <span className="post-by h5">
          {user.first_name} {user.last_name}
        </span>
        <span className="post-created-at">{new Date(created_at).toString().split(' GMT')[0]}</span>
      </div>
      {editMode ? (
        <textarea value={newPostText} onChange={e => setNewPostText(e.target.value)}></textarea>
      ) : (
        <div className="post-body">
          <p>{post_text}</p>
        </div>
      )}
      <div className="post-footer">
        <ul className="post-comments">
          <li>
            <span className="comment-by h6">Binaya Baral</span>
            <span className="comment">I like it</span>
          </li>
          <li>
            <span className="comment-by h6">Binaya Baral</span>
            <span className="comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi id magni fugiat ex aliquam,</span>
          </li>
          <li>
            <span className="comment-by h6">Binaya Baral</span>
            <span className="comment">I like it</span>
          </li>
        </ul>
        <form onSubmit={handlePostComment}>
          <textarea name="post-comment" value={postComment} onChange={e => setPostComment(e.target.value)}></textarea>
          <button type="submit">Add Comment</button>
        </form>
        {user.id === props.currentUserId ? (
          <div className="text-right">
            {editMode ? (
              <>
                <button className="btn btn-cancel" onClick={() => setEditMode(false)}>
                  Cancel Edit
                </button>
                <button className="btn btn-cancel" onClick={submitEdit}>
                  Submit Edit
                </button>
              </>
            ) : (
              <button className="btn" onClick={() => setEditMode(!editMode)}>
                Edit
              </button>
            )}
            <button className="btn btn-danger" onClick={submitDelete}>
              Delete
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Post;
