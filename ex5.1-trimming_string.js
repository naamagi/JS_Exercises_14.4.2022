const trimmingString= str=>{
    const letterArr=str.split("");
    let filtered=letterArr.filter(function(currentValue, index){
        return index>0 && index<letterArr.length-1;
    });
    return filtered.join("");
}

console.log(trimmingString("Naama"));
console.log(trimmingString("Good Evening"));