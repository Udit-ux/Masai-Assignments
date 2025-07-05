function multiplyNumbers(a, b) {
  function multiply(x, y) {
    return x * y;
  }

  return multiply.apply(null, [a, b]);
}

console.log(multiplyNumbers(5, 3)); // Output: 15
