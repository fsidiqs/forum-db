
exports.up = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
      table.integer('role_id').unsigned().references('id').inTable('role');
  })
};

exports.down = function(knex) {
  return knex.schema.table('usres', (table) => {
      table.dropColumn('role_id');
  })
};