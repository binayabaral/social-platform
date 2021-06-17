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
    return this.hasMany('Post', 'post_id');
  },
  comments() {
    return this.hasMany('Comment', 'user_id');
  },
});

module.exports = bookshelf.model('User', User);
