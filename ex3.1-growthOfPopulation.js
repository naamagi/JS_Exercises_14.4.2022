const nb_year=(p0, percent, aug, p) =>{
  const percentage = percent / 100;
  let countOfYears=0;
  let localP0=p0;
  
  for (let inhabitants = localP0; inhabitants <= p; inhabitants+=inhabitants*percentage+aug) {
      countOfYears++;
  }
  return countOfYears;
}
console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));
