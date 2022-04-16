const tribonacci = (array, n) => {
  let first = array[0];
  let second = array[1];
  let third = array[2];
  let fourth;
  let tribonacciArr = [];
  if (n === 0) {
    return tribonacciArr;
  }
  if (n === 1) {
    return array.slice(0, 1);
  }
  if (n === 2) {
    return array.slice(0, 2);
  }
  if (n === 3) {
    return (tribonacciArr = array.map(number => number));
  }
  tribonacciArr = array.map(number => number);
  for (let element = 3; element < n; element++) {
    fourth = first + second + third;
    tribonacciArr.push(fourth);
    first = second;
    second = third;
    third = fourth;
  }
  return tribonacciArr;
};

console.log(tribonacci([1,1,1],9));
console.log(tribonacci([0,0,1],9));
console.log(tribonacci([0,0,1],0));
console.log(tribonacci([0,0,1],1));
console.log(tribonacci([0,0,1],2));
console.log(tribonacci([0,0,1],3));
console.log(tribonacci([0,0,1],4));
console.log(tribonacci([2,3,1],6));