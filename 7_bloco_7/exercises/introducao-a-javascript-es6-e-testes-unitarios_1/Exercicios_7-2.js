const oddsAndEvens = (parameters) => {
  return `Os números ${parameters.sort((a, b) => {return a-b})} se encontram ordenados de forma crescente!`;
}      
console.log(oddsAndEvens([13, 3, 4, 10, 7, 2]));