exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("puppies_categories")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("puppies_categories").insert([
        { puppy_id: 1, category_id: 1 },
        { puppy_id: 2, category_id: 1 },
        { puppy_id: 3, category_id: 1 },
        { puppy_id: 3, category_id: 2 },
        { puppy_id: 4, category_id: 2 },
        { puppy_id: 5, category_id: 1 },
        { puppy_id: 5, category_id: 2 }
      ]);
    });
};
