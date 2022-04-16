function peopleOnTheBus(arrays) {
  let currentNumber = 0;
  let invalidNumber = false;
  arrays.forEach((busStop) => {
    currentNumber += busStop[0];
    if (currentNumber - busStop[1] >= 0) {
      currentNumber -= busStop[1];
    } 
    else {
      console.log(        "Number of people going down cannot be higher than people on the bus."      );
      invalidNumber = true;
      return;
    }
  });
  if (invalidNumber) {
    return undefined;
  }
  return currentNumber;
}
console.log(
  peopleOnTheBus([
    [3, 0],
    [4, 2],
    [7, 6],
  ])
);
console.log(
  peopleOnTheBus([
    [3, 0],
    [2, 8],
    [3, 2],
  ])
);
