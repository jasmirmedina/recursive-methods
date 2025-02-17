// Question 4: Check all values in an array
//
// Write a function called all which accepts an array and a callback
// and returns true if every value in the array returns true when passed
// as parameter to the callback function
//
// Sample:
//
// var allAreLessThanSeven = all([1,2,9], function(num){
//	return num < 7;
// });
//
// console.log(allAreLessThanSeven); // false

const allAreLessThanSeven = all([1, 2, 9], function(num) {
  return num < 7;
});

function all(arr, callback) {
  if(!arr.length) {
    return true;
  }

  if(callback[arr[0]]) {
    return all(arr.shift(), callback);
  }

  return false;
}

console.log(allAreLessThanSeven);