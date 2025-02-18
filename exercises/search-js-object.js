// Question 6: Search JS object
//
// Write a function called contains that searches for a value in a nested object.
// It returns true if the object contains that value.
//
// Sample:
//
// var nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             }
//         }
//     }
// }
//
// let hasIt = contains(nestedObject, 44); true
// let doesntHaveIt = contains(nestedObject, "foo"); false

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2'
          }
        }
      }
    }
  }
}

function contains(obj, val) {
  for (const key in obj) {
    if(obj[key] === val) {
      return true;
    }

    if(typeof obj[key] === "object") {
      return contains(obj[key], val);
    }
  }

  return false;
}

console.log(contains(nestedObject, "foo"));