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
