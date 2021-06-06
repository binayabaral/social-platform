const router = require('express').Router();
const { addComment, removeComment } = require('../controllers/commentController');
const Comment = require('../models/post');
const asyncHandler = require('express-async-handler');

router.get(
  '/',
  asyncHandler(async (req, res) => {
    try {
      let comments = await new Comment().fetchAll();
      res.json(comments);
    } catch (error) {
      throw error;
    }
  })
);

router.post('/', addComment);
router.delete('/:id', removeComment);
// router.put('/:id', editComment);

module.exports = router;
