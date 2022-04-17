const accum = (word) => {
  lettersArr = word.split(""); 
  let wholeArr = [];
  let newStr = "";
  for (let i = 0; i < lettersArr.length; i++) {
    let duplicatesArr = Array(i + 1).fill(lettersArr[i].toLowerCase());
    duplicatesArr[0] =      duplicatesArr[0].toUpperCase();
    if (i != lettersArr.length - 1) {
      duplicatesArr.push("-");
    }
    let tempStr= duplicatesArr.join("");
    wholeArr.push(tempStr);
  }
  newStr=wholeArr.join("");
  return newStr;
};

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
