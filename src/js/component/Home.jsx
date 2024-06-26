import React, { useState } from 'react';

const Home = () => {
  const [tareas, setTareas] = useState([]);
  const [valorInput, setValorInput] = useState('');

  const manejarCambioInput = (e) => {
    setValorInput(e.target.value);
  };

  const manejarPresionTecla = (e) => {
    if (e.key === 'Enter' && valorInput !== '') {
      agregarTarea();
    }
  };

  const agregarTarea = () => {
    if (valorInput !== '') {
      setTareas([...tareas, valorInput]);
      setValorInput('');
    }
  };

  const manejarEliminarTarea = (indice) => {
    const nuevasTareas = tareas.filter((tarea, i) => i !== indice);
    setTareas(nuevasTareas);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card" style={{ width: '50%' }}>
        <h2 className="card-header text-center">Lista de Tareas</h2>
        <div className="card-body">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Agregar tarea"
              value={valorInput}
              onChange={manejarCambioInput}
              onKeyPress={manejarPresionTecla}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                onClick={agregarTarea}
              >
                Agregar
              </button>
            </div>
          </div>
          {tareas.length === 0 ? (
            <p className="text-center text-muted">Sin Tareas</p>
          ) : (
            <ul className="list-group mb-3">
              {tareas.map((tarea, indice) => (
                <li
                  key={indice}
                  className="list-group-item d-flex justify-content-between align-items-center"
                  onMouseEnter={(e) => {
                    const botonEliminar = e.currentTarget.querySelector('button');
                    botonEliminar.style.visibility = 'visible';
                  }}
                  onMouseLeave={(e) => {
                    const botonEliminar = e.currentTarget.querySelector('button');
                    botonEliminar.style.visibility = 'hidden';
                  }}
                >
                  {tarea}
                  <button
                    className="btn btn-link ml-2"
                    style={{
                      visibility: 'hidden',
                      padding: '0',
                      border: 'none',
                      background: 'none',
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                    onClick={() => manejarEliminarTarea(indice)}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'gray')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}
                    onMouseDown={(e) => (e.currentTarget.style.color = 'red')}
                    onMouseUp={(e) => (e.currentTarget.style.color = 'gray')}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
          {tareas.length > 0 && (
            <p className="text-center">
              {tareas.length} {tareas.length === 1 ? 'Tarea' : 'Tareas'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
