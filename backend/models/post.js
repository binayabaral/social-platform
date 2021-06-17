const bookshelf = require('../db');
const User = require('./user');
const Comment = require('./comment');

const TABLE_NAME = 'posts';

/**
 * Post model.
 */
const Post = bookshelf.Model.extend({
  tableName: TABLE_NAME,
  user() {
    return this.belongsTo('User', 'user_id');
  },
  comments() {
    return this.hasMany('Comment');
  },
});

module.exports = bookshelf.model('Post', Post);
