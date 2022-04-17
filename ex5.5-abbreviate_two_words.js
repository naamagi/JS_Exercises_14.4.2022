const abbreviateTwoWords = (fullName) => {
    if(typeof fullName!=="string"){
        return "name is invalid";
    }
  let arr = fullName.split(" ");
  if (arr.length !== 2) {
    return "name is invalid";
  }
  const newArr = arr.map((word) => {
   
    return word[0];
  });
  return newArr.join(".");
};

console.log(abbreviateTwoWords("Sam Harris"));
console.log(abbreviateTwoWords("Patrick Feeney"));
console.log(abbreviateTwoWords("Patrick Feeney III"));
console.log(abbreviateTwoWords(1,2));
