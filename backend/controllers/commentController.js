const asyncHandler = require('express-async-handler');
const Comment = require('../models/comment');
const HttpStatus = require('http-status-codes');

/**
 * Add Comment
 * @param {Object} req
 * @param {Object} res
 */
const addComment = asyncHandler(async (req, res) => {
  const { comment_txt, post_id } = req.body;
  const user_id = req.userId;

  if (!(comment_txt && post_id)) res.status(HttpStatus.BAD_REQUEST).json({ msg: 'Post id and comment Text is required' });
  else {
    try {
      const comment = await new Comment({ comment_txt, user_id, post_id }).save();
      res.json(comment);
    } catch (error) {
      throw error;
    }
  }
});

/**
 * Remove Comment
 * @param {Object} req
 * @param {Object} res
 */
const removeComment = asyncHandler(async (req, res) => {
  const commentId = req.params.id;
  const user_id = req.userId;

  new Comment({ id: commentId })
    .fetch()
    .then(comment => {
      if (comment.attributes.user_id === user_id) {
        comment.destroy();
        res.json({ msg: 'comment deleted' });
      } else {
        res.status(HttpStatus.FORBIDDEN).json({ msg: 'Access Forbidden' });
      }
    })
    .catch(Comment.NotFoundError, () => {
      res.status(HttpStatus.NOT_FOUND).json({ msg: 'Comment not found' });
    });
});

module.exports = { addComment, removeComment };
