const router = require('express').Router();
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const protect = require('./middlewares/authMiddleware');

router.use('/users', userRoutes);
router.use('/posts', protect, postRoutes);
router.use('/comments', protect, commentRoutes);

module.exports = router;
