const express = require("express");
const router = express.Router();
const knex = require("../../db/knex");

router.get("/", (req, res, next) => {
  knex("puppies")
    .select(
      "puppies.id",
      "puppies.name",
      "breed",
      "weight",
      "categories.id as category_id",
      "categories.name"
    )
    .leftJoin("puppies_categories", "puppies.id", 'puppies_categories.puppy.id');
    .leftJoin('categories', '')
});

app.post("/", (req, res, next) => {
  knex("puppies")
    .insert(req.body)
    .then(() => {
      knex("puppies")
        .orderBy("id", "desc")
        .then(puppies => res.json(puppies));
    });
});

app.patch("/:id", (req, res, next) => {
  knex("puppies")
    .update(req.body)
    .where("id", req.params.id)
    .then(() => {
      knex("puppies")
        .orderBy("id", "desc")
        .then(puppies => res.json(puppies));
    });
});

app.delete("/:id", (req, res, next) => {
  knex("puppies")
    .del()
    .where("id", req.params.id)
    .then(() => {
      knex("puppies")
        .orderBy("id", "desc")
        .then(puppies => res.json(puppies));
    });
});
module.exports = router;
