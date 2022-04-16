
function findUnique(array) {
  numberObj = {};
  array.forEach((number) => {
    numberObj[number] = numberObj[number]
      ? (numberObj[number] += 1)
      : (numberObj[number] = 1);
  });
  let uniqueNum;
  for (let num of Object.keys(numberObj)) {
    if (numberObj[num] === 1) {
      uniqueNum = num;
      break;
    }
  }
  return uniqueNum;
}

console.log(findUnique([1, 1, 1, 2, 1, 1]));
console.log(findUnique([ 0, 0, 0.55, 0, 0 ]));
