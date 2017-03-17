'use strict';

module.exports.toTwenty = function() {
  /* Generate an array of numbers like [1, 2, 3... 20]. */
  return generateArrayOfNumbers(1, 21, 1);
}

module.exports.toForty = function() {
  /* Generate an array of numbers like [2, 4, 6... 40]. */
  return generateArrayOfNumbers(2, 41, 2);
}

module.exports.toOneThousand = function() {
  /* Generate an array of numbers like [10, 20, 30... 1000]. */
  return generateArrayOfNumbers(10, 1001, 10);
}

/* Generates an array of numbers from value `start` to value `end` exclusive using 
steps of `increment`. */
function generateArrayOfNumbers(start, end, increment) {
  var arrayOfNumbers = [];
  for (var i = start; i < end; i += increment) {
    arrayOfNumbers.push(i);
  }
  return arrayOfNumbers;
}

module.exports.search = function(num) {
  // Handle trivial cases
  if (this.length == 0) {
    return {count: 0, index: -1, length: 0};
  }
  if (this.length == 1) {
    return {count: 0, index: 0, length: 1};
  }

  var loopCount = 0;
  // Next two var names inspired by Quicksort.
  var leftMark = 0;
  var rightMark = this.length - 1;
  var foundAt = -1;
  // Binary search has O(log n). So, for us to know when we've searched all of 
  // the array, we need the antilog. Otherwise the loop never terminates if the 
  // sought number isn't in the array.
  var antiLog = 1;

  while (antiLog <= this.length) {
    var midPoint = Math.trunc((leftMark + rightMark) / 2);
    if (num == this[leftMark]) {
      foundAt = leftMark;
      break;
    }
    if (num == this[rightMark]) {
      foundAt = rightMark;
      break;
    }

    if (num == this[midPoint]) {
      foundAt = midPoint;
      break;
    }
    else {
      if (num < this[midPoint]) {
        leftMark++;
        rightMark = midPoint - 1;
      }
      else {
        leftMark = midPoint + 1;
        rightMark--;
      }
    }

    antiLog *= 2;
    loopCount++;
  }
  // This handles cases of arrays that have many instances of the same number e.g [2, 4, 4, 5, 6, 6, 6].
  // In that case, this function returns the least index.
  if (this[foundAt] != undefined && this[foundAt - 1] != undefined) {
    while (this[foundAt] == this[(foundAt - 1)]) {
      foundAt -= 1;
      if (this[foundAt - 1] == undefined) {
        break;
      }
    }
  }
  var results = {};
  results.count = loopCount;
  results.index = foundAt;
  results.length = this.length;
  return results;
}
