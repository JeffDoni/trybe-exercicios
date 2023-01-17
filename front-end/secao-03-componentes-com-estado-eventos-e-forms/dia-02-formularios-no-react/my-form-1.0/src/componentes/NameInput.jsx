// src/components/NameInput.jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameInput extends Component {
  render() {
    const { name, handleChange } = this.props;
    const LimiteCaracteres = 80;

    return (
      <label htmlFor="name">
        Nome:
        <input
          id="name"
          name="name"
          type="text"
          onChange={ handleChange }
          value={ name }
        />
        {!name ? 'O nome deve ser preenchido': ''}
        {name.length > LimiteCaracteres ? 'Onome não pode ter mais que 80 caracteres' : ''}
      </label>
    );
  }
}

NameInput.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default NameInput;