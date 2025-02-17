// Question 7: Parse a multi-dimensional array
//
// Given a multi-dimensional integer array,
// return the total number of integers stored inside this array
//
// Sample:
//
// var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); 7

const seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]);

function totalIntegers(arr) {
  if(!arr.length) return 0;

  let total = 0;
  let shifted = arr.shift();

  if(Array.isArray(shifted)) {
    total += totalIntegers(shifted);
  } else if(Number.isInteger(shifted)) {
    total++;
  }

  return total + totalIntegers(arr);
}

console.log(seven);