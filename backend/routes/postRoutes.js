const router = require('express').Router();
const { addPost, removePost, editPost, getAllPosts } = require('../controllers/postController');
const Post = require('../models/post');

router.get('/', getAllPosts);
router.post('/', addPost);
router.delete('/:id', removePost);
router.put('/:id', editPost);

module.exports = router;
