const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
      // bornIn: nascido em
  ];
  
//   const filterPeople = () => {
//   return people.filter((element) => {
//     return element.nationality === 'Australian' && element.bornIn <= 2000;
//    })
//   }

//   console.log(filterPeople())

const filterPeople = () => {
    return people.filter(({ nationality, bornIn}) => {
    return nationality === 'Australian' && bornIn <= 2000;    
    })
}
console.log(filterPeople)
