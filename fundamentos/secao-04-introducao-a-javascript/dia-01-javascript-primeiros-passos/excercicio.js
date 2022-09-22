let resultado = 'nada'
let mensagem;

switch (resultado) {
    case 'aprovada':
        mensagem = 'Parabéns, você foi aprovada';
        break;
        case 'lista':
        mensagem = 'Você está na nossa lista de espera';
        break;
        case 'reprovada':
        mensagem = 'você foi reprovada';
        break;
        default:
            mensagem = 'erro'
     
}
console.log(mensagem)