import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {'Jefferson Donizete'}
        </h1>
        <p>
          {'Estudante de desenvolvimento web'}
        </p>
        <h2>Minhas Habilidades</h2>
        <ol>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>CSS</li>
        </ol>
      </div>
    );
  }
}

export default About;