exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("categories", table => {
      table.increments();
      table.string("name");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("categories")]);
};
