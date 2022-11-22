import Swal from 'sweetalert2'
const containerPlayer1 = document.querySelector('#container')
const containerPlayer2 = document.querySelector('#containerPlayer2')
const btn = document.querySelector('#btnPlayer1')
const url = `https://akabab.github.io/superhero-api/api/id/`;
const btnadv = document.querySelector('#btnPlayer2')
const resultado = document.querySelector('#btnStart')
const quadrado = document.querySelector('#heros')
let power1;


const superHero =()=> {
    const randonNumber = Math.floor(Math.random() * 731)
    return fetch(`${url}${randonNumber}.json`)
    .then(response => response.json())
    .then(data => {
     const image = document.createElement('img')
     const nome = document.createElement('p')
     const span = document.createElement('spam')
     image.src = data.images.md
     containerPlayer1.appendChild(image)
     nome.innerHTML = `Name: ${data.name}` 
     nome.className ='btn btn-secondary'
     containerPlayer1.appendChild(nome)
     power1 = data.powerstats.power
     span.innerHTML = `Power: ${power1}` ;
     span.className = 'power btn btn-secondary'
     containerPlayer1.appendChild(span)
    }).catch(() => Swal.fire({
        title: 'Que pena!',
        text: `Você não foi abençoado com as habilidades de heroi`,
        icon: 'error',
        confirmButtonText: 'Tente Novamente',

    }))
}
const superPlayer2 = () => {
    const url1 = `https://akabab.github.io/superhero-api/api/id/`;
    const randonNumber = Math.floor(Math.random() * 200)
    return fetch(`${url1}${randonNumber}.json`)
    .then(response => response.json())
    .then(data => {
     const image = document.createElement('img')
     const nome = document.createElement('p')
     const span = document.createElement('spam')
     image.src = data.images.md
     image.className ='ajustes'
     containerPlayer2.appendChild(image)
     nome.innerHTML = `Name:${data.name}`
     nome.className ='btn btn-secondary'
     containerPlayer2.appendChild(nome)
     span.innerHTML = `Power: ${data.powerstats.power}`
     span.className = 'poweradv btn btn-secondary'
     containerPlayer2.appendChild(span)
    }).catch(() => Swal.fire({
        title: 'Que pena!',
        text: `Você não foi abençoado com as habilidades de heroi`,
        icon: 'error',
        confirmButtonText: 'Tente Novamente',}))
}


btn.addEventListener('click', ()=> {
 superHero()
 containerPlayer1.innerHTML ='';
})

btnadv.addEventListener('click', ()=> {
    superPlayer2()
    containerPlayer2.innerHTML ='';
})

resultado.addEventListener('click', ()=> {
    Promise.all([superHero(), superPlayer2()]).then(()=>{
        const powerPlayer1 = document.querySelector('.power').innerHTML;
        const powerPlayer2 = document.querySelector('.poweradv').innerHTML;
        const p = document.createElement('p')
        quadrado.appendChild(p)

        if(powerPlayer1 > powerPlayer2){
           return alert('Player1 Venceu') 
        } if(powerPlayer1 < powerPlayer2) {
           return alert('Player2 Venceu') 
        } else {
            alert('Parabéns guerreiros suas forças são equivalentes')
        }
    })
       containerPlayer1.innerHTML = '';
       containerPlayer2.innerHTML ='';
       

})


   