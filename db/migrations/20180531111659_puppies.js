exports.up = function(knex, Promise) {
  return knex.schema.createTable("puppies", table => {
    table.increments();
    table.string("name");
    table.string("breed");
    table.integer("weight");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("puppies");
};
