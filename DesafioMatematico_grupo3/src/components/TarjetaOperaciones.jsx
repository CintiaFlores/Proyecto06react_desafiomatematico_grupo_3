import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/TarjetaOperaciones.css';  // Importa los estilos personalizados


const CardDesafio = () => {
  return (
    <div className="card-container">
      <div className="card card-desafio">
        <div className="card-body">
          <h5 className="card-title text-center">Desafío Matemático</h5>
          <p className="card-text text-center display-6">
            3 + 5 =
          </p>
          
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Escribe tu respuesta"
            />
          </div>

          <div className="d-flex justify-content-between">
            <button className="btn btn-primary">Verificar Respuesta</button>
            <button className="btn btn-secondary">Siguiente Desafío</button>
          </div>

          <div>
            <p className="text-center mt-3">Desafíos resueltos: 0</p>
            <p className="text-center mt-3">Desafio 4 de 5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDesafio;
