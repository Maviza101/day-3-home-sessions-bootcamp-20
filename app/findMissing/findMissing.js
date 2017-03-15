'use strict';

// NOTE: findMissing assumes that the array arguments differ by only ONE element.
module.exports.findMissing = function(firstArray, secondArray) {
  // Need to specify a comparison function for Array.sort(), otherwise it will 
  // sort according to Unicode values of the elements' string representations.
	var sortNumbersAscending = function(num1, num2) {
    if (typeof num1 == 'number' && isNaN(num1)) {
      return 0;
    }
    if (typeof num2 == 'number' && isNaN(num2)) {
      return 0;
    }
    return num1 - num2;
  }
  firstArray.sort(sortNumbersAscending);
  secondArray.sort(sortNumbersAscending);

  var missingNumber = 0;
  // The array that has the extra element will be longer and the other, shorter.
  var longerArray = [];
  var shorterArray = [];
  if (firstArray.length > secondArray.length) {
    longerArray = firstArray;
    shorterArray = secondArray;
  }
  else if (secondArray.length > firstArray.length) {
    longerArray = secondArray;
    shorterArray = firstArray;
  }
  else {
    return 0;
  }
  for (var i = 0; i < longerArray.length; i++) {
    if (i == longerArray.length) {
      missingNumber = longerArray[i];
    }
    if (longerArray[i] != shorterArray[i]) {
      missingNumber = longerArray[i];
      break;
    }
  }

  return missingNumber;
}
