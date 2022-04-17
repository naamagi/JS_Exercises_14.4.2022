const isogram = (str) => {
    const strLowerCase = str.toLowerCase();
    let arrayOfLetters = strLowerCase.split("");
    letterObj = {};
    arrayOfLetters.forEach((letter) => {
      letterObj[letter] ? (letterObj[letter] += 1) : (letterObj[letter] = 1);
    });
    for (let num of Object.keys(letterObj)) {
      if (letterObj[num] > 1) {
        return false;
      }
    }
    return true;
  };
  console.log(isogram("Dermatoglyphics"));
  console.log(isogram("aba"));
  console.log(isogram("moOse"));

  