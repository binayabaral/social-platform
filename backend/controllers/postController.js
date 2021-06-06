const asyncHandler = require('express-async-handler');
const Post = require('../models/post');
const HttpStatus = require('http-status-codes');

/**
 * Add Post
 * @param {Object} req
 * @param {Object} res
 */
const addPost = asyncHandler(async (req, res) => {
  const { post_text } = req.body;
  const user_id = req.userId;

  if (!post_text) res.status(HttpStatus.BAD_REQUEST).json({ msg: 'Post Text is required' });
  else {
    try {
      const post = await new Post({ post_text, user_id }).save();
      res.json(post);
    } catch (error) {
      throw error;
    }
  }
});

/**
 * Remove Post
 * @param {Object} req
 * @param {Object} res
 */
const removePost = asyncHandler(async (req, res) => {
  const postId = req.params.id;
  const user_id = req.userId;
  new Post({ id: postId })
    .fetch()
    .then(post => {
      if (post.attributes.user_id === user_id) {
        post.destroy();
        res.json({ msg: 'post deleted' });
      } else {
        res.status(HttpStatus.FORBIDDEN).json({ msg: 'Access Forbidden' });
      }
    })
    .catch(Post.NotFoundError, () => {
      res.status(HttpStatus.NOT_FOUND).json({ msg: 'Post not found' });
    });
});

/**
 * Edit Post
 * @param {Object} req
 * @param {Object} res
 */
const editPost = asyncHandler(async (req, res) => {
  const postId = req.params.id;
  const user_id = req.userId;
  const newPostText = req.body.new_post_text;
  if (!newPostText) res.status(HttpStatus.BAD_REQUEST).json({ msg: 'new post text is required' });
  else {
    await new Post({ id: postId })
      .fetch()
      .then(post => {
        if (post.attributes.user_id === user_id) {
          Post.where({ id: postId }).save({ post_text: newPostText, user_id }, { patch: true });
          res.json({ msg: 'post edited' });
        } else {
          res.status(HttpStatus.FORBIDDEN).json({ msg: 'Access Forbidden' });
        }
      })
      .catch(Post.NotFoundError, () => {
        res.status(HttpStatus.NOT_FOUND).json({ msg: 'Post not found' });
      });
  }
});

module.exports = { addPost, removePost, editPost };
