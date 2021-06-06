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
    return this.belongsTo(Post);
  },
  User() {
    return this.belongsTo(User);
  },
});

module.exports = Comment;
