const maskify = (stringData) => {
  if (typeof stringData !== "string") {
    return "data is invalid";
  }
  let arrOfHash = [];
  let stringOfHash;
  let arr;
  let last4charStr;
  if (stringData.length > 4) {
    arr = stringData.split("");

    const len = arr.length - 4;
    arrOfHash = Array(len).fill("#");
    stringOfHash = arrOfHash.join("");
    const last4char = arr.slice(arr.length - 4, arr.length);
    last4charStr = last4char.join("");
    let newStr = stringOfHash + last4charStr;
    return newStr;
  }
  return stringData;
};

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));
