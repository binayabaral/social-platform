const router = require('express').Router();
const { addPost, removePost, editPost } = require('../controllers/postController');
const Post = require('../models/post');
const asyncHandler = require('express-async-handler');

router.get(
  '/',
  asyncHandler(async (req, res) => {
    try {
      let posts = await new Post().fetchAll();
      res.json(posts);
    } catch (error) {
      throw error;
    }
  })
);

router.post('/', addPost);
router.delete('/:id', removePost);
router.put('/:id', editPost);

module.exports = router;
