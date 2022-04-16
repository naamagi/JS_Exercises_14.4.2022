const toCamelCase = (str) => {
  let arr = str.split(/[-_]+/);
  let string;
  for (let index = 1; index < arr.length; index++) {
    string= arr[index];
    if (string!=='') {
        arr[index] = string[0].toUpperCase() + string.slice(1, string.length);
    }
  }
  return arr.join("");
};

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("the_stealth-warrior_"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The-Stealth_Warrior"));
