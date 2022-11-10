import './style.css'

const user = document.querySelector('#user')
const btn = document.querySelector('.btn');
const container = document.querySelector('#container')
const url = "https://api.github.com/users";


// const getData = () => {
//   const getuser = users.value;
//   fetch(`${url/`${getuser}`}`)
//   .then((response)=> response.json())
//   .then((data) => {
//    const p = createElement('p')
//    p.innerText = data.bio
//    container.apenchild(p)
//    console.log('oi')
//   }
// };
// getData();
const getData = () => {
  const getUser = user.value;
  fetch(`${url}/${getUser}`)
    .then(response => response.json())
    .then((data) => {
       const p = document.createElement('p');
      const img = document.createElement('img');
     p.innerText = data.bio;
      img.src = data.avatar_url;
       container.appendChild(p);
    container.appendChild(img);
  });
}



btn.addEventListener('click', ()=> {
  getData();
  container.innerHTML = ''
})