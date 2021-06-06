const jwt = require('jsonwebtoken');
const User = require('../models/user');
const asyncHandler = require('express-async-handler');
const HttpStatus = require('http-status-codes');

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await new User({ id: decoded.id })
        .fetch()
        .then(user => {
          req.userId = user.attributes.id;
          next();
        })
        .catch(User.NotFoundError, () => {
          res.status(HttpStatus.NOT_FOUND).json({ msg: 'user not found' });
        });
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

module.exports = protect;
