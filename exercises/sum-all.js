// Question 1: Sum all numbers
//
// Write a function called sumRange.
// It will take a number and return the sum of all numbers from 1 up to the number passed in.

function sumRange(n) {
  if(n === 1) {
    return n;
  }

  return n + sumRange(n - 1);
}

console.log(sumRange(6));

// 6 + sumRange(5) -> 15 + 6 = 21
// 5 + sumRange(4) -> 5 + 10 = 15
// 4 + sumRange(3) -> 4 + 6 = 10
// 3 + sumRange(2) -> 3 + 3 = 6
// 2 + sumRange(1) -> 2 + 1 = 3
// 1 -> Base case return 1