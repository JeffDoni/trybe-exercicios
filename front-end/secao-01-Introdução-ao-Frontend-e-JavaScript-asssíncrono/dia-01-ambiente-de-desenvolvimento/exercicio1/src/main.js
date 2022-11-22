import validator from 'validator';

const buttonEl = document.querySelector('#button');
const inputEl = document.querySelector('#value');
const selectEls = document.querySelector('#option');
const pEl = document.querySelector('#answer');

buttonEl.addEventListener('click', (event) => {
  event.preventDefault();
  const UUID_VERSION = 4;
  const campos = {
    cpf: validator.isTaxID(inputEl.value, 'pt-BR'),
    hexColor: validator.isHexColor(inputEl.value),
    email: validator.isEmail(inputEl.value),
    uuid: validator.isUUID(inputEl.value, UUID_VERSION),
    url: validator.isURL(inputEl.value),
  };

  pEl.innerHTML = `A validação retornou ${campos[selectEls.value]}`;
});
