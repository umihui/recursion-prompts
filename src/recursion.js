/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {

  if (Math.abs(n) === 1 || n === 0) {
    return 1;
  } else if ( n < 0 ) {
    return null;
  } else {
    return n * factorial(n - 1);
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + sum(array.slice(1));
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (array.length === 0) {
    return 0;
  } else if (typeof array[0] === 'number') {
    return array[0] + arraySum(array.slice(1));
  } else if (Array.isArray(array[0])) {
    return arraySum(array[0]) + arraySum(array.slice(1));
  }

};

// 4. Check if a number is even.
var isEven = function(n) {
  if (Math.abs(n) === 1) {
    return false;
  } else if (Math.abs(n) === 0) {
    return true;
  } else {
    return isEven(Math.abs(n)-2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) {
    return 0;
  } else if (n > 0) {
    return n - 1 + sumBelow(n-1);
  } else {
    return n + 1 + sumBelow(n+1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (x === y || x + 1 === y || x - 1 === y) {
    return [];
  } else if (x < y) {
    return [x + 1].concat(range(x + 1, y));
  } else if (x > y) {
    return [x - 1].concat(range(x - 1, y));
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return base;
  } else if (exp > 1) {
    return base * exponent(base, exp - 1);
  } else if (exp < 0) {
    return exponent(base, exp + 1) / base;
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n / 2 === 1 || n === 1) {
    return true;
  } else if (n / 2 < 1) {
    return false;
  } else {
    return powerOfTwo(n / 2);
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  // var str = '';
  // for (var i = -1; i >= -string.length;i--) {
  //   str += string.substr(i, 1);
  // }
  // return str;
  if (string.length === 1 || string.length === 0) {
    return string;
  }
  var arr = string.split('');
  return arr[arr.length - 1] + reverse(string.slice(1,string.length-1)) + arr[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase();
  if (string.length === 1) {
    return true;
  }
  if (string.length === 2 && string[0] === string[1]) {
    return true;
  }
  if (string[0] === string[string.length - 1]) {
    return palindrome(string.slice(1, string.length - 1));
  }
  return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  var n = y > 0 ? y : 0 - y;
  if (x > 0) {
    if (x < n) {
      return x;
    }
    if (x === n) {
      return 0;
    }
    return modulo(x - n, n);
  } else {
    if (x > 0 - n) {
      return x;
    }
    if (x === n) {
      return 0;
    }
    return modulo(x + n, n);
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
  if (y === 1) {
    return x;
  }
  if (y === -1) {
    return  -x;
  }
  if (y > 0 ) {
    return x + multiply(x, y-1);
  } else if (y < 0 ) {
    return -x + multiply(x, y+1);
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
var divide = function(x, y, prec) {

};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {

};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if ( str1.length === 0 && str2.length === 0) {
    return true;
  }
  if (str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1));
  }
  return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 0) {
    return [];
  }
  var arr = [];
  arr[0] = str[0];
  return arr.concat(createArray(str.slice(1)));

};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 0) {
    return [];
  }
  var arr = [];
  arr[0] = array[array.length - 1];
  return arr.concat(reverseArr(array.slice(0, array.length - 1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var result = [];
  if (length === 0) {
    return [];
  }
  result.push(value);
  return result.concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if (n === 0) {
    return [];
  }
  var current;
  if (n % 3 === 0 && n % 5 === 0) {
    current = ['FizzBuzz'];
  } else if (n % 3 === 0) {
    current = ['Fizz'];
  } else if (n % 5 === 0) {
    current = ['Buzz'];
  } else {
    current = [String(n)];
  }
  return (fizzBuzz(n - 1)).concat(current);
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) {
    return 0;
  }
  if (array[0] === value) {
    return 1 + countOccurrence(array.slice(1), value);
  } else {
    return countOccurrence(array.slice(1), value);
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0) {
    return [];
  } else {
    var current = callback(array[0]);
    return [current].concat(rMap(array.slice(1), callback))
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var result = 0;
  if (obj[key] !== undefined) {
    result++;
  }
  for (const prop in obj) {
    if (typeof obj[prop] === 'object') {
      result += countKeysInObj(obj[prop], key);
    }
  }
  return result;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var result = 0;
  for (const prop in obj) {
    if (obj[prop] === value) {
      result++;
    } else if (typeof obj[prop] === 'object') {
      result += countValuesInObj(obj[prop], value);
    }
  }
  return result;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (const prop in obj) {
    if (typeof obj[prop] === 'object') {
      replaceKeysInObj(obj[prop], oldKey, newKey);
    }
    if (prop === oldKey) {
      var temp = obj[prop];
      delete obj[prop];
      obj[newKey] = temp;
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) {
    return null;
  } else if (n === 1) {
    return [0, 1];
  } else {
    var last = fibonacci(n - 1);
    var l = last.length;
    var current = [last[l - 1] + last[l - 2]];
    return last.concat(current);
  }
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n === 0) {
    return 0;
  } else if (n < 0) {
    return null;
  } else if (n === 1 || n === 2) {
    return 1;
  }
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 0) {
    return [];
  }
  var result = [];
  result.push(array[0].toUpperCase());
  return result.concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) { 
  if (array.length === 0) {
    return [];
  }
  var current = array[0].charAt(0).toUpperCase() + array[0].slice(1);
  return [current].concat(capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var result = 0;
  for (const prop in obj) {
    if (obj[prop] % 2 === 0) {
      result += obj[prop];
    } else if (typeof obj[prop] === 'object') {
      result += nestedEvenSum(obj[prop])
    }
  }
  return result;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'object') {
      result.push(array[i]);
    } else {
      result = result.concat(flatten(array[i]));
    }
  }
  return result;
};
flatten([1,[2],[3,[[4]]],5]);

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  obj = obj || {};
  if (str.length === 0) {
    return obj;
  } else {
    if(!obj[str[0]]) {
      obj[str[0]] = 1;
    } else {
      obj[str[0]]++;
    }
    return letterTally(str.slice(1), obj);
  }
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  // not mutate input
  var result = [];
  if (list.length === 0) {
    return [];
  }
  result.push(list[0]);
  list = list.slice(1);
  while (list[0] === result[result.length - 1]) {
    list.shift();
  }   
  return result.concat(compress(list));
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length === 0) {
    return;
  } else {
    array[0].push(aug);
    augmentElements(array.slice(1), aug);
  }
  return array;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var result = [];
  if (array.length === 0) {
    return [];
  }
  result.push(array[0]);
  array = array.slice(1);
  while (array[0] === result[result.length - 1] && array[0] === 0) {
    array.shift();
  }   
  return result.concat(minimizeZeroes(array));
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var result = [];
  if (array.length === 1) {
    return array;
  } 

  if ((result.length - 1) < 0 || result[result.length - 1] < 0) {
    result.push(Math.abs(alternateSign(array.slice(1))[0]));
  } else {
    result.push(0 - Math.abs(alternateSign(array.slice(1))[0]));
  }
  return result;
  
};
alternateSign([2,7,8,3,1,4]);

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var num = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'};
  if (str.length === 0) {
    return '';
  }
  if (num[str.charAt(0)]) {
    return num[str.charAt(0)] + numToText(str.slice(1));
  } else {
    return str.charAt(0) + numToText(str.slice(1));
  }
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  var result;
  return result;
};
