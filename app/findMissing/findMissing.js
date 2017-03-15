'use strict';

module.exports.findMissing = function(firstArray, secondArray) {
  // Need to specify a comparison function for Array.sort, otherwise 
  // it will sort according to Unicode values.
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
  // Note that the array that has the extra element will be longer while 
  // the other will be shorter.
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
