const User = require('../models/user');
const { generateHash, comparePassword, generateToken } = require('../utility');
const HttpStatus = require('http-status-codes');
const bcrypt = require('bcrypt');

/**
 * Register new user
 * @param {Object} req
 * @param {Object} res
 * @route POST /api/users/register
 * @access Public
 */
const registerUser = async (req, res) => {
  const { fname, lname, email, password } = req.body;
  let status = fname && lname && email && password;
  if (!status) res.status(HttpStatus.BAD_REQUEST).json({ msg: 'Firstname, lastname, email and passwords are required' });
  else {
    try {
      const userExists = await new User({ email })
        .fetch()
        .then(user => res.status(400).json({ msg: 'User already Exists' }))
        .catch(User.NotFoundError, () => {});

      if (!userExists) {
        const hash = await generateHash(password);
        const user = await new User({ first_name: fname, last_name: lname, email, password_hash: hash }).save();
        res.status(HttpStatus.CREATED).json(user);
      }
    } catch (error) {
      throw error;
    }
  }
};

/**
 * Get User by email
 * @param {Object} req
 * @param {Object} res
 */
const getUser = async (req, res) => {
  const email = req.body.email || '';

  try {
    await new User({ email })
      .fetch()
      .then(user => res.json(user))
      .catch(User.NotFoundError, () => {
        res.status(HttpStatus.NOT_FOUND).json({ msg: 'user not found' });
      });
  } catch (error) {
    throw error;
  }
};

/**
 * Delete User by checking username and password
 * @param {Object} req
 * @param {Object} res
 */
const deleteUser = async (req, res) => {
  const email = req.body.email || '';
  const password = req.body.password || '';

  try {
    await User.where({ email })
      .fetch()
      .then(user => {
        let passwordIsCorrect = bcrypt.compareSync(password, user.attributes.password_hash);
        if (passwordIsCorrect) {
          let id = user.attributes.id;
          new User({ id }).fetch().then(user => user.destroy());
          res.json({ msg: 'User Deleted' });
        } else {
          res.status(HttpStatus.FORBIDDEN).json({ msg: 'Incorrect Credentials' });
        }
      })
      .catch(() => {
        res.status(HttpStatus.NOT_FOUND).json({ msg: 'user not found' });
      });
  } catch (error) {
    throw error;
  }
};

/**
 * Authenticate user
 * @param {Object} req
 * @param {Object} res
 */
const loginUser = async (req, res) => {
  const email = req.body.email || '';
  const password = req.body.password || '';

  try {
    await User.where({ email })
      .fetch()
      .then(user => {
        let passwordIsCorrect = bcrypt.compareSync(password, user.attributes.password_hash);
        if (passwordIsCorrect) {
          res.json({ ...user.attributes, token: generateToken(user.attributes.id) });
        } else {
          res.status(HttpStatus.FORBIDDEN).json({ msg: 'Incorrect Credentials' });
        }
      })
      .catch(() => {
        res.status(HttpStatus.NOT_FOUND).json({ msg: 'user not found' });
      });
  } catch (error) {
    throw error;
  }
};

module.exports = { registerUser, getUser, deleteUser, loginUser };
