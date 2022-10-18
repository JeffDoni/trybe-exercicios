const fatorial = (valor) => {
let total = 1
for (let index = 2; index <= valor; index += 1) {
    total *= index;
    
}
return total
}
const print = fatorial(4);

console.log(`Esse é o fatorial ${print}`)


const longestWord = (text) => {
    const wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';
  
    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }
  
    return result;
  }
  
  console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));