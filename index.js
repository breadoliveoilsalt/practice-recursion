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
  if (arr.length ===1) {
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
