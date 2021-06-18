const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * Generate password hash
 * @param {String} password
 * @returns {Boolean} password hash
 */
const generateHash = async password => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};

/**
 * Check password
 * @param {String} password
 * @param {String} hash
 * @returns {Boolean} password correct status
 */
const comparePassword = async (password, hash) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    throw error;
  }
};

/**
 * Generates web token for authorization
 * @param {integer} id
 * @returns Token
 */
const generateToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = { generateHash, comparePassword, generateToken };
