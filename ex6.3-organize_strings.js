const longest= (strA,strB)=>{
const aToZ="abcdefghijklmnopqrstuvwxyz";
let aToZArr=[];
const strLowerCaseA = strA.toLowerCase();
const strLowerCaseB = strB.toLowerCase();

    let arrayOfLettersA = strLowerCaseA.split("");
    let arrayOfLettersB = strLowerCaseB.split("");

    letterObj = {};
    arrayOfLettersA.forEach((letter) => {
      letterObj[letter] ? (letterObj[letter] += 1) : (letterObj[letter] = 1);
    });
    arrayOfLettersB.forEach((letter) => {
        letterObj[letter] ? (letterObj[letter] += 1) : (letterObj[letter] = 1);
      });
      for(index=0;index<aToZ.length;index++){
          if(Object.keys(letterObj).includes(aToZ[index])){
            aToZArr.push(aToZ[index]);
          }
      }
      return aToZArr.join("");

  };
 
  console.log(longest("xyaabbbccccdefww","xxxxyyyyabklmopq"));
  console.log(longest( "abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"));
  
