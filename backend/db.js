const knexJs = require('knex');
const bookshelfJs = require('bookshelf');

const knexConfig = require('./knexfile');

/**
 * Database connection.
 */
const knex = knexJs(knexConfig);
const bookshelf = bookshelfJs(knex);

// bookshelf.plugin(['bookshelf-virtuals-plugin']);

module.exports = bookshelf;
