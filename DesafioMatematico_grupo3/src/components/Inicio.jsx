import React from 'react';

const Inicio = ({ onStart }) => {
  return (
    <div className="inicio">
      
      <button onClick={onStart}>Empezar</button>
    </div>
  );
};

export default Inicio;
