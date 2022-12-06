// src/App.js
import React from 'react';


class App extends React.Component {
  constructor() {
    super();

    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };
  }
  // ...
handleButtonOne() {
  this.setState((prevState) => ({
    clicksBtnOne: prevState.clicksBtnOne + 1,
  }));
}

handleButtonTwo() {
  this.setState((prevState) => ({
    clicksBtnTwo: prevState.clicksBtnTwo + 1,
  }));
}

handleButtonThree() {
  // Nessa função estamos desestruturando o prevState
  this.setState(({ clicksBtnThree }) => ({
    clicksBtnThree: clicksBtnThree + 1,
  }));
}
// ...
render() {
  const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
  return (
    <div>
      <button
        type="button"
        onClick={ this.handleButtonOne }
      >
        {`Cliques botão 1: ${clicksBtnOne}`}
      </button>
      <button
        type="button"
        onClick={ this.handleButtonTwo }
      >
        {`Cliques botão 2: ${clicksBtnTwo}`}
      </button>
      <button
        type="button"
        onClick={ this.handleButtonThree }
      >
        {`Cliques botão 3: ${clicksBtnThree}`}
      </button>
    </div>
  );
}
}
// ...

export default App;
