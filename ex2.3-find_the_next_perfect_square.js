function findNextSquare(number) {
  for (let index = 1; index <= number; index++) {
    if (number / index === index) {
      return (index + 1) * (index + 1);
    }
  }
  return -1;
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));
console.log(findNextSquare(1));
