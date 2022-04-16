const repeatStr=(number,str) =>{
    let temp="";
    for(let i=0;i<number;i++){
        temp+=str;
    }
    return temp;
}

console.log(repeatStr(6, "I")) ;
console.log(repeatStr(5, "Hello"));
console.log(repeatStr(5, 3));
