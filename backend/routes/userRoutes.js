const router = require('express').Router();
const { registerUser, getUser, deleteUser, loginUser } = require('../controllers/userController');

router.get('/', (req, res) => {
  res.json({ msg: 'This is user route' });
});

router.post('/register', registerUser);
router.get('/getUser', getUser);
router.delete('/delete', deleteUser);
router.post('/login', loginUser);

module.exports = router;
