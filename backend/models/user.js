const bookshelf = require('../db');
const Comment = require('./comment');
const Post = require('./post');

const TABLE_NAME = 'users';

/**
 * User model.
 */
const User = bookshelf.Model.extend({
  tableName: TABLE_NAME,
  posts() {
    return this.hasMany('Post');
  },
  comments() {
    return this.hasMany('Comment');
  },
});

module.exports = bookshelf.model('User', User);
