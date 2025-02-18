// Question 5: Product of an array
//
// Write a function called productOfArray
// which takes in an array of numbers and returns
// the product of them all
//
// Sample:
//
// var six = productOfArray([1,2,3]) 6
// var sixty = productOfArray([1,2,3,10]) 60

function productOfArray(arr) {
  return !arr.length ? 1 : arr.shift() * productOfArray(arr);
}

const sixty = productOfArray([1, 2, 3, 10]);

console.log(sixty);

// 1 * productOfArray([2, 3, 10]) -> 60 * 1 = 60
// 2 * productOfArray([3, 10]) -> 2 * 30 = 60
// 3 * productOfArray([10]) -> 3 * 10 = 30
// 10 * productOfArray([]) -> Base case return 10 * 1 = 10