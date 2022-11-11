import Swal from "sweetalert2";


const valor = document.querySelector("#moedas");
const btn = document.querySelector(".btn");
const coinsList = document.querySelector(".coins");
const titulo =document.querySelector('.coins-title')

function fetchApi(coin) {
  const url = `https://api.exchangerate.host/latest?base=${coin}`;
  titulo.innerHTML = `Valores referentes a 1 ${coin}`
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.base !== coin.toUpperCase()) {
        throw new Error("Moeda não existente!");
      }
      return data.rates;
    });
}

function renderCoins(coins) {
  coinsList.innerHTML = "";

  const coinsArray = Object.entries(coins);
  console.log(coinsArray);
  coinsArray.forEach((coin) => {
    const [coinName, value] = coin;
    const li = document.createElement("li");
    li.textContent = `${coinName} - ${value}`;
    li.className = 'bi bi-currency-exchange'
    li.style.color = "yellow"
    coinsList.appendChild(li);
  });
}

function handleSearch() {
  const coin = valor.value;
  fetchApi(coin).then(renderCoins);

  if (!coin) {
    return Swal.fire({
      icon: "error",
      title: "Opsss..",
      text: "Você precisa digitar uma moeda",
    });
  }
  fetchApi(coin)
  .then(renderCoins)
  .catch((error) => {
    Swal.fire({
      icon: "error",
      title: "Opss..",
      text: error.message,
    });
  });
}



btn.addEventListener("click", () => {
  handleSearch();
});
