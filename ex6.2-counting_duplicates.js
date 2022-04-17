const countingDuplicates = (str) => {
  const strLowerCase = str.toLowerCase();
  let arrayOfLetters = strLowerCase.split("");
  letterObj = {};
  arrayOfLetters.forEach((letter) => {
    letterObj[letter] ? (letterObj[letter] += 1) : (letterObj[letter] = 1);
  });
  let moreThanOne = 0;
  for (let num of Object.keys(letterObj)) {
    if (letterObj[num] > 1) {
      moreThanOne++;
    }
  }
  return moreThanOne;
};
console.log(countingDuplicates("abcde"));
console.log(countingDuplicates("aabbcde"));
console.log(countingDuplicates("aabBcde"));
console.log(countingDuplicates("indivisibility"));
console.log(countingDuplicates("Indivisibilities"));
console.log(countingDuplicates("aA11"));
console.log(countingDuplicates("ABBA"));
