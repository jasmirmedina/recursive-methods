// Question 2: Power function
// Write a function called power which takes in a base and an exponent.
// If the exponent is 0, return 1.
//
// Sample:
//
// console.log(power(2, 4)); 16
// console.log(power(2, 3)); 8
// console.log(power(2, 2)); 4
// console.log(power(2, 1)); 2
// console.log(power(2, 0)); 1

function power(b, e) {
  return e === 0 ? 1 : b * power(b, e - 1);
}

console.log(power(2, 4));

// 2 * power(2, 3) -> 2 * 8 = 16
// 2 * power(2, 2) -> 2 * 4 = 8
// 2 * power(2, 1) -> 2 * 1 = 2
// 2 * power(2, 0) -> Base case return 1