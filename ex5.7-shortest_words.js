const shortestWord = (sentence) => {
  arr = sentence.split(" ");
  const lengthOfShortestWord = arr
    .map((word) => word.length)
    .reduce((smallest, currentValue) => {
      if (currentValue < smallest) {
        return currentValue;
      }
      return smallest;
    });
  
  return lengthOfShortestWord;
};

console.log(shortestWord("You only live once but if you do it right once is enough"));
console.log(shortestWord("Live as if you were to die tomorrow Learn as if you were to live forever"));
console.log(shortestWord("I am so clever that sometimes I don't understand a single word of what I am saying"));
console.log(shortestWord("Twenty years"));

