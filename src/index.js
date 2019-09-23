var uniqueRandomArray = require("unique-random-array");
var starWarsnames = require("./starwars-names.json");

module.exports = {
  all: starWarsnames,
  random: uniqueRandomArray(starWarsnames)
};
