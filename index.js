// Sources of problems:
  // https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php#EDITOR
  // https://medium.com/@lkaileh/practicing-recursion-af8bdaeec05e

////////////////////////////////////////////////////////////////////////////////

// Attempting greatest common divisor solution, based on Elucidian Algo
function gcd(n1, n2) {
  let greater = Math.max(n1, n2)
  let lesser = Math.min(n1, n2)

  if (greater % lesser == 0) {
    return lesser
  } else if (greater % lesser < 2) {
    return 1
  } else {
    return gcd(lesser, greater % lesser)
  }
}

////////////////////////////////////////////////////////////////////////////////

function factoral(num) {
  if (num === 1) {
    return 1
  }

  return num * factoral(num - 1)
}

////////////////////////////////////////////////////////////////////////////////


function getRangeRecursively(n1, n2) {
  let arr = []
  if (n1 === n2 - 1) {
    return arr
  }
  let nextNumber = n1 + 1
  arr.push(nextNumber)
  arr.push(getRangeRecursively(nextNumber, n2))
  return arr.flat()
}

////////////////////////////////////////////////////////////////////////////////

function getSum(arr) {
  if (arr.length === 1) {
    return arr[0]
  }

  let newArr = [arr[0] + arr[1], ...arr.slice(2)]
  return getSum(newArr)
}

// This is a solution from elsewhere. More space efficient than mine above.

var array_sum = function(my_array) {
  if (my_array.length === 1) {
    return my_array[0];
  }
  else {
    return my_array.pop() + array_sum(my_array);
  }
};

////////////////////////////////////////////////////////////////////////////////

// Some craziness in Ruby:

// def getNames(data)
//     namesArray = []

//     namesArray << data[:name]
//     data[:children].each do |child|
//         namesArray << getNames(child)
//     end

//     return namesArray
// end

////////////////////////////////////////////////////////////////////////////////

// ignoring edge cases like bad input or non-factors
function getExponent(product, base) {
  if (product === base) {
    return 1
  }
  let newProduct = product/base
  return 1 + getExponent(newProduct, base)
}

////////////////////////////////////////////////////////////////////////////////

// return the Fibonacci numbers up to argument

// Solution to study. Some modifications by me. Works

function fibonacciNumbersUpTo(num) {
  if (num === 1) {
    return [0]
  }
  if (num === 2) {
    return [fibonacciNumbersUpTo(num - 1), 1].flat()
  }

    // Note the key is to make the recursive call to get everything up until
    // num place, and then push num place given what you got.
  let arr = fibonacciNumbersUpTo(num - 1).flat()
  arr.push(arr[arr.length-1] + arr[arr.length -2])
  return arr
}


// Scraps that did not work:
// function fibNumbs(num) {
//
//   let arr = []
//
//   if (num === 1) {
//     return arr.push(0)
//   }
//
//   if (num === 2) {
//     arr.push(fibNumbs(num - 1))
//     arr.push(1)
//     return arr
//   }
//
//   // arr.push(fibNumbs(num-1) + fibNumbs(num-2))
//   //
//   // return arr.flat()
// }

////////////////////////////////////////////////////////////////////////////////

function isEven(n) {
  if (n === 2) {
    return true
  } else if (n < 2 && n > 0) {
    return false
  } else {
    return isEven(n-2)
  }
}

// Interesting other solution:
//
// function is_even_recursion(number)
// {
//   if (number < 0)
//   {
//     number = Math.abs(number);
//   }
//   if (number===0)
//   {
//     return true;
//   }
//   if (number===1)
//   {
//     return false;
//   }
//   else
//   {
//     number = number - 2;
//     return is_even_recursion(number);
//   }
// }

////////////////////////////////////////////////////////////////////////////////

// Just playing with a problem I thought of on the fly.  Keep multiplying input
// by three until you get above 10000.  Return multiples in an array.

function multiplyByThree(n) {
  if (n > 10000) {
    return [ ]
  } else {
    let arr = multiplyByThree(n*3)
    arr.push(n)
    return arr
  }
}

////////////////////////////////////////////////////////////////////////////////


function binarySearch(arr, target) {
  let floor = -1
  let ceiling = arr.length

  while (floor + 1 < ceiling) {
    guessIndex = (floor + ceiling)/2
    guessValue = arr[guessIndex]
    if (guessValue === target) {
      return true
    } else if (guessValue > target) {
      ceiling = guessIndex
    } else if (guessValue < target) {
      floor = guessIndex
    }
  }
  return false
}

////////////////////////////////////////////////////////////////////////////////

function merge(firstHalf, secondHalf) {
  let newArr = [ ]

  while (firstHalf.length || secondHalf.length) {
    if (firstHalf[0] < secondHalf[0]) {
      newArr.push(firstHalf.shift())
    } else {
      newArr.push(secondHalf.shift())
    }
  }

    // calling reduce would be more space efficient:
  return newArr.concat(firstHalf).concat(secondHalf)
}

function mergeSort(arr) {

  if (arr.length <= 1) {
    return arr
  }

  midpoint = arr.length/2
  firstHalf = arr.slice(0, midpoint)
  secondHalf = arr.slice(midpoint + 1, arr.length - 1)
  merge(mergeSort(firstHalf), mergeSort(secondHalf))
}


// This solution is very interesting -- note how the function that is
// recursively called is in the middle!!

// Array.prototype.merge_Sort = function () {
//   if (this.length <= 1)
//   {
//     return this;
//   }
//
//   var half = parseInt(this.length / 2);
//   var left = this.slice(0, half).merge_Sort();
//   var right = this.slice(half,     this.length).merge_Sort();
//   var merge = function (left, right)
//   {
//   var arry = [];
//   while (left.length > 0 && right.length > 0)
//   {
//     arry.push((left[0] <= right[0]) ? left.shift() : right.shift());
//   }
//     return arry.concat(left).concat(right);
//   };
//
//   return merge(left, right);
// };

////////////////////////////////////////////////////////////////////////////////

// Problem: reverse a string recursively

function reverseString(str) {
  if (str.length === 0) {
    return ""
  } else if (str.length === 1) {
    return str
  } else if (str.length === 2) {
    return str.slice(1) + str.slice(0,1)
  } else {
    return str.slice(str.length - 1) + reverseString(str.slice(1, str.length - 1 )) + str.slice(0,1)
  }
}

/// A more elegant solution from here: http://kevvv.in/untitledrecursion-in-javascript/

// function reverse( str ) {
//   if ( str.length <= 1 ) {
//     return str;
//   }
//   return reverse( str.substr( 1 ) ) + str[ 0 ];
// }


// "cat" => "tac"
// "cinco" => "ocnic"
//  "four" => "ruof"
// base cases:
//    if str.length === 1, return str
//    if str.length === 0, return ""
//    if str.length === 2, return str[1] + str[0]
// return str.pop() + reverseString(str.splice(str[1], str[str.length-2])) + str.shift()

////////////////////////////////////////////////////////////////////////////////

// Problem: Write a map function

function mapping(arr, callback) {
  if (arr.length === 0) {
    return []
  }

  return [callback(arr[0])].concat(mapping(arr.slice(1), callback))
}

let addFive = (n) => n + 5

// Did not work, for future reference:
// Note that chaining multiple pushes raises errors
// function mapping(arr, callback) {
//   if (arr.length === 1)
//     return callback(arr[0])
//   }
//
//   let newArr = []
//   let firstEl = arr.shift()
//   newArr.push(mapping([firstEl], callback)).push(mapping(arr, callback))
//   return newArr
// }
//
// let addFive = (n) => n + 5

// Solution based on this: http://kevvv.in/untitledrecursion-in-javascript/
