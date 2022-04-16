const toWeirdCase = (str) => {
  let arr = str.split(" ");
  const newArr = arr.map((word) => {
    let letterArr = word.split("");
    const newLetterArr = letterArr.map((letter, index) => {
      return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
    });
    const changesString = newLetterArr.join("");
    return changesString;
  });
  return newArr.join(" ");
 };

console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));