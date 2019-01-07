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
