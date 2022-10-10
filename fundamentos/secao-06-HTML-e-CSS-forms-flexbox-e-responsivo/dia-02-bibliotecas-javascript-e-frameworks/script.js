
window.onload = function() {
    const buttonSubmit = document.getElementById('submit')
    buttonSubmit.addEventListener('click', cancelabotao);
    const envia = document.getElementById('submit')
    const aceitaImagens = document.getElementById('politicas')
    aceitaImagens.addEventListener('change', enableSubmit)
    envia.addEventListener('click', verificaCarcter)

};


function cancelabotao (event) {
event.preventDefault();
};

function enableSubmit () {
    const envia = document.getElementById('submit')
    const aceitaImagens = document.getElementById('politicas')
    envia.disabled = !aceitaImagens.checked;
}
  function alerta () {
    const email = document.getElementById('email').value.length
    const invalidaEmail = email < 10 || email > 50; 

    const name = document.getElementById('name').value.length
    const invalidaName = name < 10 || name > 40; 

    const resp = document.getElementById('resposta').value.length
    const invalidares = resp > 500; 

    if (invalidaEmail || invalidaName || invalidares) {
        return false
    } else {
        return true 
    }
} 

function verificaCarcter (event) {
event.preventDefault()
const validaCaracter = alerta()
if (validaCaracter === false) {
    alert('Dados inválidos')
} else {
    alert('Enviado com sucesso')
}
}