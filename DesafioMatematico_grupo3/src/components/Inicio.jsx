import React from 'react';

const Inicio = ({ onStart }) => {
  return (
    <div className="inicio">
      <h1>Desafío Matemático</h1>
      <button onClick={onStart}>Empezar</button>
    </div>
  );
};

export default Inicio;
