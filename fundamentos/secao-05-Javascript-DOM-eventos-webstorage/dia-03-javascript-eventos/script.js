function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();

  
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  function createDays() {
  let selecioneDias = document.querySelector('#days')
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let dia = decemberDaysList[index]
    let listaDias = document.createElement('li')
    listaDias.innerHTML = dia
   
    if (dia === 24 || dia === 31 ) {
    listaDias.className = "day holiday"
    selecioneDias.appendChild(listaDias)
    } else if (dia === 4 || dia === 11 || dia === 18) {
        listaDias.className = "day friday"
        selecioneDias.appendChild(listaDias)
    }
    else if (dia === 25) {
    listaDias.className = 'day holiday friday'
    selecioneDias.appendChild(listaDias)
    } else {
        listaDias.className = 'day'
        selecioneDias.appendChild(listaDias)
    }

  }

}
  createDays() 

  function createHoliday(nomeBotao) {
  const divBotao = document.querySelector('.buttons-container')
  let criaFeriado = document.createElement('button')
  let newButton = 'btn-holiday'
  criaFeriado.innerHTML = nomeBotao
  criaFeriado.id = newButton
  divBotao.appendChild(criaFeriado)

  }
  createHoliday('Feriados')

  function displayHolidays() {
    let selecionaBotaoFeriado = document.querySelector('#btn-holiday');
    let todosFeriados = document.querySelectorAll('.holiday');
    let backgroundColor = 'red';
    let setNewColor = 'white';
    selecionaBotaoFeriado.addEventListener('click', function() {
        for (let index = 0; index < todosFeriados.length; index += 1) {
            if (todosFeriados[index].style.backgroundColor === setNewColor) {
                todosFeriados[index].style.backgroundColor = backgroundColor;
            }
            else {
                todosFeriados[index].style.backgroundColor = setNewColor;
            }
        }
    })
  }
 displayHolidays();

 function createfriday(nomeBotao) {
    const divBotao = document.querySelector('.buttons-container')
    let criaFriday = document.createElement('button')
    let newButton = 'btn-friday'
    criaFriday.innerHTML = nomeBotao
    criaFriday.id = newButton
    divBotao.appendChild(criaFriday)
  
    }
    
 createfriday('Sexta-feira')

 function displayfriday(sextas) {
    let selecionaBotao = document.querySelector('#btn-friday')
    let fridays = document.getElementsByClassName('friday')
    let textoSexta = 'Sextou'

    selecionaBotao.addEventListener('click', function(){
    for (let index = 0; index < fridays.length; index += 1) {
        if(fridays[index].innerHTML !== textoSexta) {
            fridays[index].innerHTML = textoSexta
        } else {
            fridays[index].innerHTML = sextas[index]
        }
        
    }
    })
 }
  let sextasFeiras = [4, 11, 18, 25]
  displayfriday(sextasFeiras)