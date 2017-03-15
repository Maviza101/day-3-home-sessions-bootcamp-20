'use strict';

describe("Find the missing number between two lists of numbers: ", function() {
  var myFindMissingApp = require("../app/findMissing/findMissing.js");
  var findMissing = myFindMissingApp.findMissing;

  describe("Case for an empty list", function() {
    it("should return 0 for empty list", function() {
      expect(findMissing([], [])).toEqual(0);
    });

    // When one is empty, and the other has only ONE element.
    it("should return 9 for a combination of [] and [9]", function() {
      expect(findMissing([], [9])).toEqual(9);
    });

    it("should return 15 for a combination of [15] and []", function() {
      expect(findMissing([15], [])).toEqual(15);
    });
  });

  describe("Case for lists with the same entries", function() {
    it("should return 0 for [2], [2]", function() {
      expect(findMissing([2], [2])).toEqual(0);
    });

    it("should return 0 for [4], [4]", function() {
      expect(findMissing([4], [4])).toEqual(0);
    });

    it("should return 0 for [7], [7]", function() {
      expect(findMissing([7], [7])).toEqual(0);
    });

    // For arrays that have the same entries but in different order.
    it("should return 0 for [7, 9, 2, 89], [89, 7, 2, 9]", function() {
      expect(findMissing([7, 9, 2, 89], [89, 7, 2, 9])).toEqual(0);
    });
  });

  describe("Case for lists with similar entries and a missing number", function() {
    it("should return 5 for [1, 2], [1, 2, 5]", function() {
      expect(findMissing([1, 2], [1, 2, 5])).toEqual(5);
    });

    it("should return 10 for [4, 6, 8], [4, 6, 8, 10]", function() {
      expect(findMissing([4, 6, 8], [4, 6, 8, 10])).toEqual(10);
    });

    it("should return 1 for [5, 4, 7, 6, 11, 66], [5, 4, 1, 7, 6, 11, 66]", function() {
      expect(findMissing([5, 4, 7, 6, 11, 66], [5, 4, 1, 7, 6, 11, 66])).toEqual(1);
    });

    it("should return 9 for [9, 100, 4, 40, 12], [100, 4, 40, 12]", function() {
      expect(findMissing([9, 100, 4, 40, 12], [100, 4, 40, 12])).toEqual(9);
    });

    it("should return `Arrays have an element each, which are different from one another` for " + 
        "a combination of [15] and [2]", function() {
      expect(findMissing([15], [2])).toEqual("Arrays have an element each, which are different from one another");
    });
  });
});
