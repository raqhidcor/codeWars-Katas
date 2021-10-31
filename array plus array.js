// I'm new to coding and now I want to get the sum of two arrays...a
// ctually the sum of all their elements. I'll appreciate for your help.

function arrayPlusArray(arr1, arr2) {
    let countArray = arr1.concat(arr2);
    let total = countArray.reduce(function(acc,currentValue){
       return acc + currentValue;                                                           
  });
    return total;
  }

//   You have passed all of the tests! :)

