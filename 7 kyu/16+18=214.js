// For this kata you will have to forget how to add two numbers.

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

function add(num1, num2) {
    num1 = ('' + num1).split('').reverse()
    num2 = ('' + num2).split('').reverse()
    let max = Math.max(num1.length, num2.length)
    let str = [];
    for(let i = 0; i < max; i++)
      str.push((parseInt(num1[i]) || 0) + (parseInt(num2[i]) || 0))
    num1 = str.reverse().join('');
    return parseInt(num1);
  }

//   You have passed all of the tests! :)