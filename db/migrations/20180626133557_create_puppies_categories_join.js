exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("puppies_categories", table => {
      table.increments();
      table.integer("puppy_id").references("puppies_id");
      table.integer("category_id").references("categories_id");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("puppies_categories")]);
};
