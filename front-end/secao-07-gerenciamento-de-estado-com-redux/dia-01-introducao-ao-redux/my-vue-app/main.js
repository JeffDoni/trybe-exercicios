import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};

const reducer = (state = INITIAL_STATE, action) => {
switch(action.type) {
  case 'LIGTH_MODE':
    return{
      ...state,
      theme: state.theme === 'dark' ? 'ligth' : 'dark',
    }

case 'ONLINE_MODE':
  return{
    ...state,
    status: state.status === 'offline' ? 'online' : 'offline'
  }
  default :
  return state;
}
}

const store = createStore(reducer, composeWithDevTools());

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  store.dispatch({type: 'LIGTH_MODE' })
});

statusButton.addEventListener('click', () => {
  store.dispatch({type: 'ONLINE_MODE'})
});

store.subscribe(() => {
  const { status, theme } = store.getState();
  if(theme === 'dark') {
    document.getElementById('container').style.backgroundColor = '#333';
    document.getElementById('container').style.color = 'white';
    document.getElementById('toggle-theme').innerHTML = 'Light Mode'
  } else {
    document.getElementById('container').style.backgroundColor = 'white';
    document.getElementById('container').style.color = 'black';
    document.getElementById('toggle-theme').innerHTML = 'Dark Mode'

  }

  if (status === 'online') {
    document.getElementById('status').innerHTML = 'Online';
    document.getElementById('toggle-status').innerHTML = 'Ficar Offline'

  } else {
    document.getElementById('status').innerHTML = 'Offline';
    document.getElementById('toggle-status').innerHTML = 'Ficar Online'


  }
 
});
