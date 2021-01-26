const factorial = (parameter) => {
  let result = parameter;
  if (parameter > 0) {
    for (let index = 1; index < parameter; index += 1) {
      result *= index;
    }
  }
  return result
}
console.log(factorial(5));