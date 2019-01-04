// Sources of problems:
  // https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php#EDITOR
  // https://medium.com/@lkaileh/practicing-recursion-af8bdaeec05e

// Attempting greatest common divisor solution, based on Elucidian Algo
function gcd(n1, n2) {
  let greater = Math.max(n1, n2)
  let lesser = Math.min(n1, n2)

  if (greater % lesser < 2) {
    return 1
  } else if (greater % lesser == 0) {
    return lesser
  } else {
    return gcd(lesser, greater % lesser)
  }
}
