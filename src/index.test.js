var expect = require("chai").expect;
var starWars = require("./index");

describe("beginner-starwars-search", function() {
  describe("all", function() {
    it("It's should be an array of string!", function() {
      expect(starWars.all).to.satisfies(isArrayOfStrings);

      function isArrayOfStrings(args) {
        return args.every(function(item) {
          return typeof item === "string";
        });
      }
    });

    it("Should contain `Luke Skywalker", function() {
      expect(starWars.all).to.include("Luke Skywalker");
    });
  });

  describe("random", function() {
    it("Should return random item from the starWars.all", function() {
      var randomItem = starWars.random();
      expect(starWars.all).to.include(randomItem);
    });
    it("should return an array of random items if passed a number", function() {
      var randomItems = starWars.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(starWars.all).to.include(item);
      });
    });
  });
});
