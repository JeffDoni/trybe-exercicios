import './style.css'

const btndog = document.querySelector('#btn-dog')
const btncat = document.querySelector('#btn-cat')
const btnsurprise = document.querySelector('#btn-surprise')
const img = document.querySelector('#img-surprise')
const urlcat = 'https://aws.random.cat/meow'
const urlDog = 'https://dog.ceo/api/breeds/image/random'


const randomDog = () => {
 fetch(urlDog)
 .then(response => response.json())
 .then(data => {
  const dog = data.message;
  img.src = dog

 })
}

const randomCat = () => {
  fetch(urlcat)
  .then(response => response.json())
  .then(data => {
   const cat = data.file;
   img.src = cat
 
  })
 }

btndog.addEventListener('click', () => {
  randomDog()

})

btncat.addEventListener('click', () => {
  randomCat()
})

btnsurprise.addEventListener('click', ()=> {
  Promise.any([ fetch(urlDog), fetch(urlcat)])
  .then((res) => res.json())
  .then(data => {
    const urlselecionada = data.file || data.message
    img.src = urlselecionada
  })

})
