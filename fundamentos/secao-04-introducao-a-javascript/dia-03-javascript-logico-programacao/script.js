// let numero = 1
// for (let index = 10; index > 0; index -= 1) {
// numero *= index
// }
// console.log(numero)
// Calculo de fatorial

// let palavra = 'tryber'
// let reverso =''
// for (let index = 0; index < palavra.length; index -= 1) {
//     reverso += palavra[]
// }
// console.log(reverso)
// Deixar para mentoria


// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let maiorPalavra = array[0];
// let menorPalavra = array[0];

// for (let index = 0; index < array.length; index += 1) {
// if (array[index].length > maiorPalavra.length) {
// maiorPalavra = array[index];
// }
// }

// for (let index = 0; index < array.length; index += 1) {
// if (array[index].length < menorPalavra.length) {
// menorPalavra = array[index];
// }
// }

// console.log(maiorPalavra);
// console.log(menorPalavra); 

let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);