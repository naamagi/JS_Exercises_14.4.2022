function sumOfLowestNumbers(array) {
  let firstNumber = array[0];
  let secondNumber = array[1];
  let tempFirst;
  let subArray = array.slice(2, array.length);
  subArray.forEach(function (currentValue) {
    if (currentValue < firstNumber) {
      tempFirst = firstNumber;
      firstNumber = currentValue;
    } else if (currentValue < secondNumber) {
      secondNumber = currentValue;
    }
    if (tempFirst < secondNumber) {
      secondNumber = tempFirst;
    }
  });
  return firstNumber + secondNumber;
}

console.log(sumOfLowestNumbers([19, 5, 42, 2, 77]));
console.log(sumOfLowestNumbers([10, 343445353, 3453445, 3453545353453]));
console.log(sumOfLowestNumbers([1, 2, 42, 89, 77]));
console.log(sumOfLowestNumbers([76, 43, 42, 7, 6]));
console.log(sumOfLowestNumbers([77, 43, 7, 7, 45]));
