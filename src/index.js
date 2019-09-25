var uniqueRandomArray = require("unique-random-array");
var starWarsnames = require("./starwars-names.json");
var getRandomItem = uniqueRandomArray(starWarsnames);

module.exports = {
  all: starWarsnames,
  random: random
};

function random(number) {
  if (number) {
    var randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
  return getRandomItem();
}
