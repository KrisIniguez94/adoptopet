
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('puppies').del()
    .then(function () {
      // Inserts seed entries
      return knex('puppies').insert([
        {
          "name": "Bruce",
          "breed":"Bull Mastiff",
          "weight":120
        },
        {
          "name": "Jaffar",
          "breed":"Maltese",
          "weight":20
        },
        {
          "name": "Max",
          "breed":"Bernese Mountain Dog",
          "weight":110
        },
      ]);
    });
};
