function binaryToDecimal(array) {
  let decimalValue=0;
  array.forEach(function (value, index) {
    if (value === 1) {
      decimalValue += 2 ** (array.length - 1 - index);
    }
  });
  return decimalValue;
}
console.log(binaryToDecimal([0, 0, 0, 1]));
console.log(binaryToDecimal([0, 0, 1, 0]));
console.log(binaryToDecimal([0, 1, 0, 1]));
console.log(binaryToDecimal([1, 0, 0, 1]));
console.log(binaryToDecimal([0, 0, 1, 0]));
console.log(binaryToDecimal([0, 1, 1, 0]));
console.log(binaryToDecimal([1, 1, 1, 1]));
console.log(binaryToDecimal([1, 0, 1, 1]));
console.log(binaryToDecimal([1, 1, 0, 1, 1]));
