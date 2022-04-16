
function centuryFromYear(year) {
  if (year > 0) {
    return Math.ceil(year / 100);
  }
  else console.log(`${Math.abs(Math.floor(year/100))} B.C.`)
}
console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));
console.log(centuryFromYear(-100));
console.log(centuryFromYear(-101));
console.log(centuryFromYear(1));
console.log(centuryFromYear(0.5));
