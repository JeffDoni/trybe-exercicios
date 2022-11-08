const mensagem = () => 'Acordando!';
const cafe = () => 'Bora tomar café!';
const acao = () => 'Partiu dormir!';

const doingThings = (func) => console.log(func ());

doingThings(mensagem);
doingThings(cafe);
doingThings(acao);


const geraEmail = (nome) => {
 const email = nome.toLowerCase().split(' ').join('_')
 return {nome, email : `${email}@trybe.com`}
}
const newEmployees = (geraEmail) => {
    const employess = {
     id1: geraEmail('Pedro Otavio'),
     id2: geraEmail( 'carlos aberto'),
     id3: geraEmail('Matheus vicente'),
    } 
    return  employess;
} 

console.log(newEmployees(geraEmail))

const sorteado = () => {
 const geraAleatorio = Math.floor(Math.random() * 5)
 return geraAleatorio;
}

const loteria = (numero, sorteado) => (numero === sorteado()) ? 'Prabéns vc ganhou!' : 'Tente novamente!';

console.log(loteria(5, sorteado));


const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const geraNota = (respostas, respostasEstudantes) => {
 let nota = 0
 for (let index = 0; index < respostas.length; index += 1) {
     if (respostas[index] === respostasEstudantes[index]) {
        nota += 1
     }
     else if (respostas[index] !== respostasEstudantes[index] && respostasEstudantes[index] !== 'N.A')
     nota -= 0.5
 }
 return nota
}
const notaFinal = (array1, array2, funcao) => {
  return  `Resultado final: ${funcao(array1, array2)}`
}
console.log(notaFinal(RIGHT_ANSWERS, STUDENT_ANSWERS, geraNota))