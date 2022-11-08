// Faça uma lista com as suas frutas favoritas
const specialFruit = ['', '', ''];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['', '', ''];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};




// destructuring


const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };
  
  const dados = {...user, ...jobInfos}


  const {name, age, nationality, profession, squad, squadInitials} = dados;

  
  // Array destructuring

  const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

const [primeiroElemento, segundoElemento] = saudacoes


let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';



[comida, animal, bebida] = [bebida, comida, animal]

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo


let numerosPares = [1, 3, 5, 6, 8, 10, 12];


// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo


[,,, ...numerosPares] = numerosPares

// Defalut Destructuring

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};


// Property Shorthand

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

// console.log(getPosition(-19.8157, -43.9542));

// Default Parameters

const multiply = (number, value = 1) => {
  return number * value
};

console.log(multiply(8));