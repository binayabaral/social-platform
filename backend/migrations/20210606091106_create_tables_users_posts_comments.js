exports.up = function (knex) {
  return knex.schema
    .createTable('users', table => {
      table.increments('id').primary();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').notNullable();
      table.string('password_hash').notNullable();
      table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
      table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
    })
    .createTable('posts', table => {
      table.increments('id').primary();
      table.string('post_text').notNullable();
      table.integer('user_id').references('users.id');
      table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    })
    .createTable('comments', table => {
      table.increments('id').primary();
      table.string('comment_txt').notNullable();
      table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
      table.integer('post_id').references('posts.id');
      table.integer('user_id').references('users.id');
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users').dropTable('posts').dropTable('comments');
};
