// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");


HREF_LINK.addEventListener('click', abreLink)

function abreLink (event) {
event.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', cancelacheckBox)
function cancelacheckBox (event) {
event.preventDefault();
}

INPUT_TEXT.addEventListener('keypress', travaA)

function travaA (event) {
const letra = event.key;
if(letra !== 'a') {
event.preventDefault();
}
}