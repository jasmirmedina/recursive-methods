// Question 8:
//
// Write a function that sums squares of numbers in list that may contain more lists
//
// Sample:
//
// var l = [1,2,3];
// console.log(SumSquares(l)); 1 + 4 + 9 = 14
//
// l = [[1,2],3];
// console.log(SumSquares(l)); 1 + 4 + 9 = 14
//
// l = [[[[[[[[[1]]]]]]]]]
// console.log(SumSquares(l)); 1 = 1
//
// l = [10,[[10],10],[10]]
// console.log(SumSquares(l)); 100 + 100 + 100 + 100 = 400

const l =  [[10], [10]];

function sumsSquares(arr) {
  if(!arr.length) return 0;

  let total = 1;
  let shifted = arr.shift();

  if(Array.isArray(shifted)) {
    total = sumsSquares(shifted);
  } else if(Number.isInteger(shifted)) {
    total = shifted * shifted;
  }

  return total + sumsSquares(arr);
}

console.log(sumsSquares(l));