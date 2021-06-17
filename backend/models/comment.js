const bookshelf = require('../db');
const Post = require('./post');
const User = require('./user');

const TABLE_NAME = 'comments';

/**
 * Comment model.
 */
const Comment = bookshelf.Model.extend({
  tableName: TABLE_NAME,
  post() {
    return this.belongsTo('Post', 'post_id');
  },
  user() {
    return this.belongsTo('User', 'user_id');
  },
});

module.exports = bookshelf.model('Comment', Comment);
