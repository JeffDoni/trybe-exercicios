const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const expectedResult = 20;
  
  const containsA = () => {
    let totalLetras = 0;
    names.forEach((name)=> {
      const letrasPorNome = name.split('');
      totalLetras += letrasPorNome.reduce((acc, curr) =>{
        if (curr === 'a' || curr === 'A') {
          return acc + 1;
        }
        return acc
      }, 0)
    })
    return totalLetras
  }

  console.log(containsA())