const fibonacci = (n) => {
  let first = 0;
  let second = 1;
  let third;
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  for (let element = 2; element < n; element++) {
        third = first + second; 
    first = second; 
    second = third; 
  }
  return third;
};

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(13));

