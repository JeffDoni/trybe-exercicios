// Percorra o array imprimindo todos os valores nele contidos com a função console.log();

// Some todos os valores contidos no array e imprima o resultado;

// Calcule e imprima a média aritmética dos valores contidos no array;

// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// let media = 0;


// for ( let i = 0; i <  numbers.length; i++) {
//     console.log(numbers[i])
// } imprime numeros do array

// for (let i = 0; i <  numbers.length; i++) {
//     soma = soma + numbers[i]
    
// }
// media = soma / numbers.length
// console.log(soma)
// console.log(media)

// let maiorNumero = []
// for (let i = 0; i < numbers.length; i++) {
//     if (maiorNumero < numbers[i]) {
//       maiorNumero = numbers[i]
//     }
// }
// console.log(maiorNumero)

let numeroImpar = []
 for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        numeroImpar.push(numbers[i])
      
    } 
} 
console.log(numeroImpar)
if (numeroImpar.length !== 0) {
  console.log(numeroImpar.length)
} else {
  console.log("Não existe numeros impar")
}
    

 
// let menorNumero = numbers[0]
//  for (let i = 0; i < numbers.length; i++) {
//      if (menorNumero > numbers[i]) {
//        menorNumero = numbers[i]
// }
//  }
//  console.log(menorNumero)