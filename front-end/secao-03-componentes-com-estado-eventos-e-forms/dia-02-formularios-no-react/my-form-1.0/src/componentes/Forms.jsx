import React from "react";
import AnecdoteInput from "./AnecdoteInput";
import NameInput from "./NameInput";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      age: "",
      anectdote: "",
      terms: false,
      formularioComErros: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleError() {
    const { name, email, age, anecdote, terms } = this.state;

    // Criamos um array com os dados obrigatórios.
    // Note que estamos usando a propriedade length.
    // Caso o length seja 0, então !campo.length será
    // true
    const errorCases = [
      !name.length,
      !email.match(/^\S+@\S+$/i),
      !age.length,
      !anecdote.length,
      !terms,
    ];

    // Caso haja algum campo que não seja true,
    // formularioPreenchido estará como false
    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      // Armazenamos o valor inverso no nosso estado
      // para sabermos se o formulário possui erros
      formularioComErros: !formularioPreenchido,
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <div>
        <h1> Estados e React</h1>
        <form>
          <fieldset>
            <legend>Informações pessoais</legend>
            <NameInput
              name={this.state.name}
              handleChange={this.handleChange}
            />

            <label htmlFor="email">
              Email:
              <input
                id="email"
                name="email"
                type="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </label>

            <label htmlFor="age">
              Idade:
              <select
                id="age"
                name="age"
                onChange={this.handleChange}
                value={this.state.age}
              >
                <option value="">Selecione</option>
                <option value="adult">Maior que 18</option>
                <option value="underage">Menor que 18</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>Texto e arquivos</legend>
            <AnecdoteInput
              anectdote={this.state.anectdote}
              handleChange={this.handleChange}
            />

            <input type="file" />
          </fieldset>
          <label htmlFor="terms">
            <input
              id="terms"
              type="checkbox"
              name="terms"
              onChange={this.handleChange}
              value={this.state.terms}
            />
            Concordo com termos e acordos
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
