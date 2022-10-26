const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
  emailListInData.forEach(showEmailList);

  const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
 const retornanumber = numbers.find((number) => number % 3 === 0 && number % 5 === 0) ;

 return retornanumber
};

console.log(findDivisibleBy3And5());



const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
const cincoLetras =  names.find((nome) => nome.length === 5)

return cincoLetras
};

console.log(findNameWithFiveLetters());

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  function findMusic(id) {
    const musica = musicas.find((elemento) => elemento.id === id)
    return musica
  };
  
  console.log(findMusic('31031685'));

 
 
  const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((nomes) => (nomes === name) ? true : false)
};

console.log(hasName(names2, 'Caique'));


const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 19 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    return arr.every((idade) => idade.age >= minimumAge)
  };
  
  console.log(verifyAges(people, 18));

  const people2 = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  people2.sort((a,b) => b.age - a.age);
  
  console.log(people2);