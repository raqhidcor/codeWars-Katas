// Two strings a and b are called isomorphic if there is a one to one mapping possible for every character of a to every character of b. 
// And all occurrences of every character in a map to same character in b.

// Task
// In this kata you will create a function that return True if two given strings are isomorphic to each other, and False otherwise. Remember that order is important.

// Your solution must be able to handle words with more than 10 characters.

// Example
// True:

// CBAABC DEFFED
// XXX YYY
// RAMBUNCTIOUSLY THERMODYNAMICS
// False:

// AB CC
// XXY XYY
// ABAB CD

function isomorph(a, b) {
    let checkFirstString = ''
    let checkSecondString = ''
    if (a.length !== b.length){
      return false
    } for (let i = 0; i<a.length;i++){
      checkFirstString += a.indexOf(a[i])
    } for (let j=0;j<b.length;j++){
      checkSecondString +=  b.indexOf(b[j])
    } return checkFirstString === checkSecondString
  }

//   You have passed all of the tests! :)